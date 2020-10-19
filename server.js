const knexfile = require("./knexfile");
const knex = require("knex")(knexfile.development);
const express = require("express");

const app = express();
const port = 7777;

app.use(express.static("./client"));

const test = knex.select().table("compliments")
.then((rows) => {
    console.log("ROWS" + rows);
});

//check
// app.get("/check", (req, res) => {
//     res.send("i'm working");
// })

app.listen(port, () => {
    console.log(`we hear u @${port}`);
})