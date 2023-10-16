from flask_server import app
from flask import render_template, redirect, request, session

# Homepage
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ingredients')
def ingredients():
    return parse_ingredients_list()

def parse_ingredients_list():
    results = []
    with open("./ingredients.csv", "r") as file:
        for line in file:
            parts = line.split(";")
            ingredient = {}
            ingredient["name"] = parts[0]
            ingredient["id"] = parts[1]
            results.append(ingredient)
    return results
