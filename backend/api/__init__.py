from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from api.models import db, db_path, setup_db


def create_app(test_config=None):

    app = Flask(__name__)
    migrate = Migrate(app, db)
    setup_db(app, db_path)

    CORS(app)

    @app.route('/api/hello')
    def greet():
        return {"greeting": "Hello"}

    return app


# if __name__ == '__main__':
#     app.run(debug=True)
