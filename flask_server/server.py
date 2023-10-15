from flask import Flask

app = Flask(__name__)

@app.route("/test")
def test():
    return {"test": ["thing1", "thing2", "thing3"]}


if __name__ == "__main__":
    app.run(debug=True)