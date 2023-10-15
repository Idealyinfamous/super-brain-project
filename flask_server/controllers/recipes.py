from flask_server import app
from flask import render_template, redirect, request, session


# Homepage
@app.route('/')
def index():
    return render_template('index.html')