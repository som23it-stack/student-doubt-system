const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is working");
});


let db;

connectDB().then(database => {
    db = database;
    app.listen(5000, () =>
        console.log("Server running on http://localhost:5000")
    );
});

/* Student asks doubt */
app.post("/askDoubt", async (req, res) => {
    await db.collection("doubts").insertOne({
        question: req.body.question,
        answer: "",
        status: "Pending"
    });
    res.json({ message: "Doubt Submitted" });
});

/* Get all doubts */
app.get("/getDoubts", async (req, res) => {
    const data = await db.collection("doubts").find().toArray();
    res.json(data);
});

/* Admin reply */
app.put("/reply/:id", async (req, res) => {
    const { ObjectId } = require("mongodb");

    await db.collection("doubts").updateOne(
        { _id: new ObjectId(req.params.id) },
        {
            $set: {
                answer: req.body.answer,
                status: "Answered"
            }
        }
    );

    res.json({ message: "Reply Saved" });
});
