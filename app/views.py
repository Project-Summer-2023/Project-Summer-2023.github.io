from flask import render_template, request, redirect
from app import app, db
from app.models import Tasks
from app.utils import Error


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/tasks", methods=["GET", "POST"])
def tasks():
    if request.method == "POST":
        task_name = request.form["task"]
        new_task = Tasks(content=task_name)
        print(new_task)

        try:
            db.session.add(new_task)
            db.session.commit()
            return redirect("/tasks")
        except:
            return render_template("tasks.html", error=Error.insert)
    else:
        task_list = db.session.query(Tasks).all()
        print(task_list)

        return render_template("tasks.html", error=Error.none, task_list=task_list)
