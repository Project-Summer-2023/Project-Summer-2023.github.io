from app import db


class Inventory(db.Model):
    id = db.Column(db.Integer, db.Sequence("item_id_seq"), primary_key=True)
    name = db.Column(db.String(200), unique=False, nullable=False)

    def __repr__(self):
        return f"ID: {self.id}\nName: {self.name}"
