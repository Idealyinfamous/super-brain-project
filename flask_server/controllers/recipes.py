from flask_server import app
from flask_server.models.recipe import Recipe
from flask import render_template, redirect, request, session

# Homepage
@app.route('/')
def index():
    return render_template('index.html')

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
    results = []
    with open("./ingredients.csv", "r") as file:
        for line in file:
            line2 = line.strip()
            parts = line2.split(";")
            ingredient = {}
            ingredient["name"] = parts[0]
            ingredient["id"] = parts[1]
            results.append(ingredient)
    return results
