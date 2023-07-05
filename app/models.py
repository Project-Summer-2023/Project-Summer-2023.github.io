from app import db


class Tasks(db.Model):
    id = db.Column(db.Integer, db.Sequence("task_id_seq"), primary_key=True)
    content = db.Column(db.String(200), unique=False, nullable=False)
    completed = db.Column(db.Boolean, unique=False, default=False)

    def __repr__(self):
        return f"ID: {self.id}\nContent: {self.content}\nCompleted: {self.completed}"
