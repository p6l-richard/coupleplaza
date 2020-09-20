import unittest
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text, inspect, create_engine
from sqlalchemy.exc import DBAPIError
from sqlalchemy.engine import ResultProxy
from api import create_app
from api.models import db_path, db, Region, Country, Visa, User, user_visa, visa_country


class CouplePlazaIntegrityTestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.database_path = db_path.replace(
            'couple-plaza', 'couple-plaza-test')
        # Bind the app to testing context
        with self.app.app_context():
            self.app.config["SQLALCHEMY_DATABASE_URI"] = self.database_path
            self.app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
            # Cannot use self.db = SQLAlchemy(self.app) because create_all() needs metadata from models
            # importing the db object from models provides the correct metadata
            self.db = db
            self.db.init_app(self.app)

    def test_001_column_country_name(self):
        def get_country_name_or_err_code():
            stmt_sel_name_country = text('select name from country;')
            with self.app.app_context():
                try:
                    return self.db.engine.execute(stmt_sel_name_country)
                except DBAPIError as e:
                    return e.orig.pgcode

        self.assertIsInstance(get_country_name_or_err_code(), ResultProxy)
        # should return a '42703' String if Column is undefined
        # should return a '42P01' String if Table is undefined
        # https://www.psycopg.org/docs/errors.html#sqlstate-exception-classes

    def test_002_column_visa_name(self):
        def get_visa_name_or_err_code():
            stmt_sel_name_visa = text('select name from visa;')
            with self.app.app_context():
                try:
                    return self.db.engine.execute(stmt_sel_name_visa)
                except DBAPIError as e:
                    return e.orig.pgcode

        self.assertIsInstance(get_visa_name_or_err_code(), ResultProxy)
        # should return a '42703' String if Column is undefined
        # should return a '42P01' String if Table is undefined
        # https://www.psycopg.org/docs/errors.html#sqlstate-exception-classes

    def test_003_table_names(self):
        # have to create sqlalchemy engine to inspect, otherwise:
        #   No inspection system is available for object of type <class 'flask_sqlalchemy.SQLAlchemy'>
        engine = create_engine(self.database_path)
        table_names = inspect(engine).get_table_names()

        self.assertIn('visa_country', table_names)
        self.assertIn('country', table_names)
        self.assertIn('visa', table_names)
        self.assertIn('region', table_names)

    def test_004_many2many(self):
        with self.app.app_context():
            if Region.query.first() is None:
                # insert data to empty db
                latam = Region(name='Latin America')
                brazil = Country(
                    name='Brazil', iso_code_2='br', iso_code_3='bra')
                latam.countries.append(brazil)
                db.session.add(latam)
                db.session.add(brazil)
            if not Country.query.filter_by(name='Colombia').first():
                colombia = Country(
                    name='Colombia', iso_code_2='co', iso_code_3='col')
                if not 'latam' in locals():
                    latam = Region.query.filter_by(
                        name='Latin America').first()
                latam.countries.append(colombia)
                db.session.add(colombia)

            if not Visa.query.first():
                new_visa = Visa(name='temporary resident visa',
                                validity=365, costs=99)
                if not 'brazil' in locals():
                    brazil = Country.query.filter_by(name='Brazil').first()
                brazil.issuing_visas.append(new_visa)
                if not 'colombia' in locals():
                    colombia = Country.query.filter_by(name='Colombia').first()
                new_visa.valid_countries.append(colombia)
                db.session.add(new_visa)

            db.session.commit()

            temp_visa = Visa.query.first()
            self.assertIsNotNone(temp_visa.valid_countries)

            # testing correct cascade deletion
            to_delete = Country.query.filter_by(name='Colombia').first()
            to_delete_id = to_delete.id
            db.session.delete(to_delete)
            db.session.commit()
            m2m = db.session.query(visa_country).filter_by(
                country_id=to_delete_id).first()
            self.assertFalse(m2m)

    def test_005_visa_user_m2m(self):
        with self.app.app_context():
            # provide LATAM, brazil and colombia as region & countries for later use
            if Region.query.first() is None:
                # insert data to empty db
                latam = Region(name='Latin America')
                db.session.add(latam)
                brazil = Country(
                    name='Brazil', iso_code_2='br', iso_code_3='bra')
                latam.countries.append(brazil)
                db.session.add(brazil)
            if not Country.query.filter_by(name='Colombia').first():
                colombia = Country(
                    name='Colombia', iso_code_2='co', iso_code_3='col')
                if not 'latam' in locals():
                    latam = Region.query.filter_by(
                        name="Latin America").first()
                latam.countries.append(colombia)
                db.session.add(colombia)

            # define values to assert later
            email = "test@mail.com"
            visa_name = "test visa"
            validity = 1
            costs = 1
            # create new visa to add to user
            new_visa = Visa(name=visa_name,
                            validity=validity, costs=costs)
            if not 'brazil' in locals():
                brazil = Country.query.filter_by(
                    name="Brazil").first()
            brazil.issuing_visas.append(new_visa)
            new_visa.valid_countries.append(colombia)
            # create new user
            new_user = User(email=email)
            new_user.visas.append(new_visa)

            # commit changes to db
            db.session.add(new_user)
            db.session.add(new_visa)
            db.session.commit()

            latest_user = User.query.order_by(User.id.desc()).first()
            latest_user_id = latest_user.id
            self.assertIn('visas', latest_user.serialize)
            self.assertIn('id', latest_user.serialize['visas'][0])

            # delete user & commit
            db.session.delete(latest_user)
            db.session.commit()
            latest_user_visas = db.session.query(
                user_visa).filter_by(user_id=latest_user_id).all()
            self.assertFalse(latest_user_visas)

            db.session.close()


if __name__ == '__main__':
    unittest.main()
