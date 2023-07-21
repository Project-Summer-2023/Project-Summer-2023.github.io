from flask import render_template, request, redirect
from app import app, db
from app.models import Inventory
from app.utils import Error


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/inventory", methods=["GET", "POST"])
def tasks():
    if request.method == "POST":
        print(request.get_data())
        # task_name = request.form["task"]
        # new_task = Tasks(content=task_name)
        # print(new_task)

        # try:
        #     db.session.add(new_task)
        #     db.session.commit()
        #     return redirect("/tasks")
        # except:
        #     return render_template("tasks.html", error=Error.insert)
        return "hello"
    else:
        inventory_list = db.session.query(Inventory).all()
        # print(type(task_list))
        ret = []
        for i in inventory_list:
            # print(type(i))
            ret.append({"id": i.id, "name": i.name})

        return ret


@app.route("/inventory/add", methods=["POST"])
def add_item():
    print(request.get_data())
    print(request.json)
    request_contents = request.json
    new_item = Inventory(name=request_contents["itemName"])

    try:
        db.session.add(new_item)
        db.session.commit()
    except:
        return "Could not add new item to DB"
    return "Successfully added new item to DB"


@app.route("/profile")
def profile():
    return {"name": "Ellie", "about": "cool"}


@app.route("/test")  # type: ignore
def test():
    return {"id": 0, "age": 22}
