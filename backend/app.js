const express = require("express");
const app = express();
const port = process.env.PORT || "8000";
const cors = require('cors')

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())



app.get("/", (req, res) => {
    // res.status(200).send("suk my pepe");
    res.send("suckkkkkk");
});



app.put("/new_game", (req, res) => {
    
});

app.post("/create_new_game", (req, res) => {
    console.log("request is");
    console.log(req)
    console.log(req.body);
    res.status(200).send("suk my pepe 2");
})


app.get("/existing_games", (req, res) => {
    // res.status(200).send("suk my pepe");
    res.status(200).send(existing_games);
});

app.listen(port, () => {
    console.log(`Listening to new requests on http://localhost:${port}`);
});



{
    // track existing games 
    existing_games = []
}