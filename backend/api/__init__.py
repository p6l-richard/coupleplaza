from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from sqlalchemy.sql import select, column
# from sqlalchemy import select, text
from api.models import db, db_path, setup_db, Visa, Country
import traceback
import re


def return_dupes(data, table):
    if table == 'visa':
        return Visa.query.filter(Visa.name.ilike(f'{data.get("name")}')).all()
    return None


def camel_to_snake(name):
    name = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', name).lower()


def to_camel_case(snake_str):
    components = snake_str.split('_')
    # We capitalize the first letter of each component except the first one
    # with the 'title' method and join them together.
    return components[0] + ''.join(x.title() for x in components[1:])


def fetch_countries(countries):
    country_models = []
    for country in countries:
        entries = Country.query.filter(
            Country.name.ilike(f'%{country}%')).all()
        if not entries:
            raise Exception(f'Country {country} not found in Database')
        if len(entries) > 1:
            raise Exception('Too many countries found for:', country)
        country_models.append(fetch_country(country))
    return country_models


def fetch_country(name):
    return Country.query.filter(
        Country.name.ilike(f'%{name.lower()}%')
    ).first()


def create_app(test_config=None):

    app = Flask(__name__)
    migrate = Migrate(app, db)
    setup_db(app, db_path)

    CORS(app)

    @app.route('/api/visas', methods=['POST'])
    def create_visa():

        request_data = request.get_json()

        # define required params as camel and snake case to handle frontend & backend conventions
        required_params = ['name', 'validity', 'costs',
                           'valid_countries', 'issuing_country']
        required_params_camel = list(map(to_camel_case, required_params))
        required_params_snake = list(map(camel_to_snake, required_params))

        if not request_data:
            return {"status": "error", "error_desc": "Request format not supported"}, 400
        if not all(param in request_data.keys()
                   for param in required_params_camel):
            return {"status": "error", "error_desc": "Missing required parameter(s)"}, 400
        if return_dupes(request_data, 'visa'):
            print('DUPES FOUND:', return_dupes(request_data, 'visa'))
            return {"status": "error", "error_desc": "Resource already exists"}, 400
        # define keys for readability
        valid_countries_key = required_params_snake[3]
        issuing_country_key = required_params_snake[4]

        issuing_country = fetch_country(
            request_data[to_camel_case(issuing_country_key)])
        if not issuing_country:
            return {"status": "error", "error_desc": f"{request_data[to_camel_case(issuing_country_key)]} not yet present in database"}, 400

        # exception handling bc fetch_countries() differentiates between non existence vs. not-identifiable
        try:
            valid_countries = fetch_countries(
                request_data[to_camel_case(valid_countries_key)])
        except Exception as e:
            print(e)
            print(traceback.print_exc())
            return {"status": "error", "error_desc": e}, 400

        # prepare dict for insertion to DB:
        #   1) convert camelCase to snake_case
        #   2) parse only name, validity & costs as the other keys require the controller to provide DB models
        #   3) add issuing country
        #   4) add eligible countries
        data_for_db = {
            camel_to_snake(key): value for key,
            value in request_data.items()  # 1)
            if key !=
            to_camel_case(valid_countries_key) and key !=
            to_camel_case(issuing_country_key)}  # 2)

        data_for_db.update({issuing_country_key: issuing_country})  # 3)

        try:
            new_visa = Visa(**data_for_db)
            new_visa.valid_countries.extend(valid_countries)  # 4)
            db.session.add(new_visa)
            last_record = Visa.query.order_by(Visa.id.desc()).first()
            return jsonify(
                {
                    "status": "success", "added": last_record.serialize
                }
            )
        except Exception as e:
            db.session.rollback()
            print('rolled back, because of', e)
            print(traceback.print_exc())
            return {
                "status": "error", "error_desc": e, "error_message": traceback.print_exc()
            }, 400
        finally:
            db.session.commit()
            db.session.close()

    @app.route('/api/visas/<int:id>', methods=['DELETE'])
    def delete_visa(id):
        visa_to_delete = Visa.query.get_or_404(id)
        try:
            db.session.delete(visa_to_delete)
            return jsonify(
                {"status": "success", "deleted": visa_to_delete.serialize}
            )
        except Exception as e:
            db.session.rollback()
            print('rolled back because of', e)
            print(traceback.print_exc())
            return {"status": "error", "error_desc": e, "error_message": traceback.print_exc()}, 400
        finally:
            db.session.commit()
            db.session.close()

    @app.route('/api/visas/<int:id>', methods=['PATCH'])
    def update_visa(id):
        # parse fields from request to understand which fields need patching
        request_data = request.get_json()

        valid_params = ['name', 'validity', 'costs',
                        'valid_countries', 'issuing_country']
        valid_params_camel = list(map(to_camel_case, valid_params))

        # Return 400, if:
        #   can't parse json from rqst
        #   < 1 valid field
        if not request_data:
            return {"status": "error", "error_desc": "Request format not supported"}, 400

        if not any(camel_key in valid_params_camel
                   for camel_key in request_data.keys()):
            return {"status": "error", "error_desc": "Missing required parameter"}, 400

        # Ensure to use snake_case on columns
        columns_in_snake = list(map(camel_to_snake, request_data.keys()))

        visa = db.session.query(Visa).get_or_404(id)

        try:
            for attr in columns_in_snake:
                if attr == 'valid_countries':
                    continue

                if getattr(visa, attr) != request_data[to_camel_case(attr)]:
                    setattr(visa, attr, request_data[to_camel_case(attr)])
            if 'valid_countries' in columns_in_snake:
                visa.valid_countries = fetch_countries(
                    request_data[to_camel_case('valid_countries')])

            return {"status": "success", "updated": visa.serialize}
        except Exception as e:
            db.session.rollback()
            print(traceback.print_exc())
            print("ERROR:", e)
            return "Something went wrong updating the data", 500
        finally:
            db.session.commit()
            db.session.close()

    return app


# if __name__ == '__main__':
#     app.run(debug=True)
