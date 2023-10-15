from flask_server import app


@app.route('/register_or_login')
def register_or_login():
    return ("register or login page")

