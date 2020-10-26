const knexfile = require("./knexfile");
const knex = require("knex")(knexfile.development);
const express = require("express");

const app = express();
const port = 7777;

app.use(express.static("./client"));

// lists all compliments
app.get("https://heysivani.github.io/free-compliments/compliments", (req, res) => {
    knex
    .from("compliments")
    .select("id", "message")
    .orderBy("id", "asc")
    .then (data => {
        res.send(data);
    });
});

// delivers random compliment to <name>
app.get("/compliments/random/:name", (req, res) => {
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
app.post("/compliments/:message", (req, res) => {
    let compliment = req.params.message.replace(/-/g, " ");
    knex("compliments")
    .insert({ message: compliment })
    .then (done => {
        res.sendStatus(201);
    });
});

// deletes a compliment
app.delete("/compliments/:id", (req, res) => {
    knex("compliments")
    .where({ id: req.params.id })
    .del()
    .then (data => {
        res.sendStatus(200);
    })
});

// edits a compliment
app.patch("/compliments/:id/:message", (req, res) => {
    let compliment = req.params.message.replace(/-/g, " ");
    knex("compliments")
    .where({ id: req.params.id })
    .update({ message: compliment })
    .then (data => {
        res.sendStatus(200);
    })
});

// replaces a compliment (this basically does the same as above, but with put)
app.put("/compliments/:id/:message", (req, res) => {
    let compliment = req.params.message.replace(/-/g, " ");
    knex("compliments")
    .where({ id: req.params.id })
    .update({ message: compliment })
    .then (data => {
        res.sendStatus(200);
    })
});

app.listen(port, () => {
    console.log(`we hear u @${port}`);
})