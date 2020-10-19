const express = require("express");

const app = express();
const port = 7777;

app.use(express.static("./client"));

//check
// app.get("/check", (req, res) => {
//     res.send("i'm working");
// })

app.listen(port, () => {
    console.log(`we hear u @${port}`);
})