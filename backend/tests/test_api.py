import unittest
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text, inspect, create_engine
from sqlalchemy.exc import DBAPIError
from api import create_app
from api.models import db_path, db


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
            self.db.create_all()

    def test_001_column_country_name(self):
        def get_country_name_or_err_code():
            stmt_sel_name_country = text('select name from country;')
            with self.app.app_context():
                try:
                    return self.db.engine.execute(stmt_sel_name_country)
                except DBAPIError as e:
                    return e.orig.pgcode

        self.assertIsInstance(get_country_name_or_err_code(), tuple)
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

        self.assertIsInstance(get_visa_name_or_err_code(), tuple)
        # should return a '42703' String if Column is undefined
        # should return a '42P01' String if Table is undefined
        # https://www.psycopg.org/docs/errors.html#sqlstate-exception-classes

    def test_003_table_names(self):
        # have to create sqlalchemy engine to inspect, otherwise:
        #   No inspection system is available for object of type <class 'flask_sqlalchemy.SQLAlchemy'>
        engine = create_engine(self.database_path)
        table_names = inspect(engine).get_table_names()

        self.assertIn('country_visa', table_names)
        self.assertIn('country', table_names)
        self.assertIn('visa', table_names)
        self.assertIn('region', table_names)


if __name__ == '__main__':
    unittest.main()
