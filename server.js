const knexfile = require("./knexfile");
const knex = require("knex")(knexfile.development);
const express = require("express");

const app = express();
const port = 7777;

app.use(express.static("./client"));

app.get("/api/compliments", (req, res) => {
    knex
    .from("compliments")
    .select("id", "message", "type", "intensity")
    .then (data => {
        console.log("HERE ", data);
        res.send(data);
    });
});

app.post("/api/compliments/:message", (req, res) => {
    knex("compliments")
    .insert({ message: req.params.message, type: "happy", intensity: "medium" })
    .then (data => {
        console.log("HERE ", data);
        res.sendStatus(201);
    });
});

app.delete("/api/compliments/:id", (req, res) => {
    knex("compliments")
    .where({ id: req.params.id })
    .del()
    .then (data => {
        res.sendStatus(200);
    })
});

app.patch("/api/compliments/:id", (req, res) => {
    knex("compliments")
    .where({ id: req.params.id })
    .del()
    .then (data => {
        res.sendStatus(200);
    })
});


//check
// app.get("/check", (req, res) => {
//     res.send("i'm working");
// })

app.listen(port, () => {
    console.log(`we hear u @${port}`);
})