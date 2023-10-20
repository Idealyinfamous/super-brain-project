from flask import Flask
from flask_mongoengine import MongoEngine

app = Flask(__name__)

app.config['MONGODB_SETTINGS'] = {
    'db': 'superBrain',
    # 'host': 'localhost',
    # 'port': 27017
}
db = MongoEngine(app)

import mongoengine as me


class FavoriteRecipe(me.Document):
    recipeId= me.IntField()
    title = me.StringField()
    image = me.StringField()
    userId = me.StringField()

if __name__ == "__main__":
    app.run(debug=True)


    # https://flask.palletsprojects.com/en/2.3.x/patterns/mongoengine/
    # python -m pip install -U mongoengine

    # https://pythonbasics.org/flask-mongodb/

    # https://github.com/Princekrampah/flaskMongoTodoApp

    # pip install flask Flask-PyMongo Flask-WTF

    # python -m pip install "pymongo[srv]
