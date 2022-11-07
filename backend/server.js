const express = require("express"); //modul importálása
const path = require("path");
const fs = require("fs");

const app = express();

//endpoint metodus,
app.get("/", (req, res) => {
    res.sendFile(path.join(`${__dirname}/../frontend/index.html`));
});

app.use("/public", express.static(`${__dirname}/../frontend/public`));

app.get("/beers", (req, res) => {
    fs.readFile(`${__dirname}/data/data.json`, (error, data) => {
        if (error) {
            console.log("Hiba: ", error);
            res.status(500).send("hibavan");
        } else {
            res.status(200).send(JSON.parse(data));
        }
    });
});

app.listen(2022, console.log("http://127.0.0.1:2022"));
