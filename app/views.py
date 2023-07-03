from flask import Flask
from app import app


@app.route("/")
def hello_world():
    return "Hello, World!"


@app.route("/index")
def index():
    return "testing"
