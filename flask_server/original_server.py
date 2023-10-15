from flask import Flask
import urllib.request, json
import os
from dotenv import load_dotenv
load_dotenv()
apiKey=os.getenv('APIKEY')
import requests

app = Flask(__name__)

@app.route("/test")
def test():
    return {"test": ["thing1", "thing2", "thing3"]}


# this route works! 
@app.route("/apicheck")
def apicheck():
    url = f'https://api.spoonacular.com/recipes/findByIngredients?apiKey={apiKey}&ingredients=chicken,+pasta,+tomatoes&number2'
    
    r = requests.get(url)

    return(r.json())


if __name__ == "__main__":
    app.run(debug=True)