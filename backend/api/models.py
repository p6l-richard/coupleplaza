from flask_sqlalchemy import SQLAlchemy
import os


def read_password(file_name):
    return str(open(file_name, "r").read())


db = SQLAlchemy()
cwd = os.getcwd()
password = read_password(os.path.join("..", cwd, "db_creds.txt"))
db_path = f'postgresql://postgres:{password}@localhost/couple-plaza'


def setup_db(app, database_path=db_path):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)


visa_country = db.Table(
    'visa_country', db.Column(
        'visa_id', db.Integer, db.ForeignKey('visa.id'),
        primary_key=True), db.Column(
        'country_id', db.Integer, db.ForeignKey('country.id'),
        primary_key=True))
user_visa = db.Table(
    'user_visa',
    db.Column(
        'user_id', db.Integer, db.ForeignKey('user.id'),
        primary_key=True),
    db.Column(
        'visa_id', db.Integer, db.ForeignKey('visa.id'),
        primary_key=True))


class Visa(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    validity = db.Column(db.Integer, nullable=False)
    costs = db.Column(db.Integer, nullable=False)
    issuing_country_id = db.Column(
        db.Integer, db.ForeignKey('country.id'), nullable=False)
    issuing_country = db.relationship(
        'Country', backref=db.backref('issuing_visas', lazy=True))

    valid_countries = db.relationship('Country', secondary=visa_country,
                                      lazy='subquery', backref=db.backref(
                                          'visas', lazy=True))

    def __repr__(self):
        return f'Visa: {self.id} | {self.name}'

    @property
    def serialize(self):
        return {
            "id": self.id, "name": self.name, "costs": self.costs, "validity": self.validity, "issuingCountryId": self.issuing_country_id, "issuingCountry": self.issuing_country.serialize, "validCountries": [item.serialize for item in self.valid_countries]
        }


class Country(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    iso_code_3 = db.Column(db.String(3), nullable=False)
    iso_code_2 = db.Column(db.String(2), nullable=False)
    region_id = db.Column(
        db.Integer, db.ForeignKey('region.id'),
        nullable=False)
    region = db.relationship('Region', backref=db.backref(
        'countries', lazy=True))

    def __repr__(self):
        return f'Country: {self.id} | {self.name}'

    @property
    def serialize(self):
        return {
            # , "visas": self.serialize_visas
            "id": self.id, "name": self.name, "isoCode3": self.iso_code_3, "isoCode2": self.iso_code_2, "regionId": self.region_id, "region": self.region.serialize
        }


class Region(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f'Region: {self.id} | {self.name}'

    @property
    def serialize(self):
        return {
            "id": self.id, "name": self.name
        }


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, nullable=False)
    visas = db.relationship(
        'Visa', secondary=user_visa, lazy='subquery', backref=db.backref(
            'users', lazy=True))

    @property
    def serialize(self):
        return {"id": self.id, "email": self.email, "visas": [item.serialize for item in self.visas]}
