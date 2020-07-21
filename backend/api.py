from flask import Flask
from flask_cors import CORS


def create_app(test_config=None):

    app = Flask(__name__)

    CORS(app)

    @app.route('/api/hello')
    def greet():
        return {"greeting": "Hello"}

    return app


if __name__ == '__main__':
    app.run(debug=True)
