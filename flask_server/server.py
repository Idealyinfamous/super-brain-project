import sys
import os

# Append the project's root directory to the Python path
project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
sys.path.append(project_root)

from flask_server import app
from flask_server.controllers import users, recipes

if __name__ == "__main__":
    app.run(debug=True)

    