const knexfile = require("./knexfile");
const knex = require("knex")(knexfile.development);
const express = require("express");

const app = express();
const port = 7777;

app.use(express.static("./client"));

// lists all compliments
app.get("/api/compliments", (req, res) => {
    knex
    .from("compliments")
    .select("id", "message")
    .then (data => {
        res.send(data);
    });
});

// delivers random compliment to <name>
app.get("/api/compliments/:name", (req, res) => {
    knex
    .from("compliments")
    .select("message")
    .orderByRaw('RANDOM()')
    .limit(1)
    .then (data => data[0].message)
    .then (message => message.replace("<name>", req.params.name))
    .then (compliment => res.send(compliment))
});

// creates new compliment message
app.post("/api/compliments/:message", (req, res) => {
    knex("compliments")
    .insert({ message: req.params.message })
    .then (data => {
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

app.listen(port, () => {
    console.log(`we hear u @${port}`);
})