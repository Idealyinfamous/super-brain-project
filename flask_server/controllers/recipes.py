from flask_server import app
from flask_server.models.recipe import Recipe
from flask import render_template, redirect, request, session, send_from_directory

# Homepage
@app.route('/')
def index():
    return send_from_directory('client/build', 'index.html')

@app.route('/recipe-by-user-id/<id>', methods=['get'])
def my_recipes(id):
    return Recipe.get_recipes_by_user_id(id)

@app.route('/save_recipe', methods=['post'])
def save_recipe():
    data = request.json
    Recipe.save(data)
    return "True" # TODO make this return something sensible

@app.route('/ingredients')
def ingredients():
    return parse_ingredients_list()

def parse_ingredients_list():
    with open("./ingredients.csv", "r") as file:
        return [{"name": line.split(";")[0], "id": line.split(";")[1].strip()} for line in file]

