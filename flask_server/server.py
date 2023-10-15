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

@app.route("/apicheck")
def apicheck():
    url = f'https://api.spoonacular.com/recipes/findByIngredients?apiKey={apiKey}&ingredients=chicken,+pasta,+tomatoes&number2'
    
    r = requests.get(url)
    # print(r)
    return(r.json())
    # return{"list": ["li", "list", "listy"]}

    # response = urllib.request.urlopen(url)
    # data = response.read()
    # dict = json.loads(data)

    # return (dict)
    # print(url)
    # return {"test": ["chicken pants", "fish umbrella", "bird box"]}

if __name__ == "__main__":
    app.run(debug=True)