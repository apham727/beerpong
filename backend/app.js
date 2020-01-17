const express = require("express");
const app = express();
const port = process.env.PORT || "8000";
const cors = require('cors')

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/", (req, res) => {
    // res.status(200).send("suk my pepe");
    res.send("suckkkkkk");
});



app.put("/new_game", (req, res) => {
    
});

app.post("/create_new_game", (req, res) => {
    console.log("received new request");
    var newGameName = req.body.gameName;
    var creatorName = req.body.creatorName;
    console.log(req.body.gameName);
    console.log(req.body.creatorName);
    
    existing_games.push(createGame(newGameName, creatorName));
    res.status(200).send("suk my pepe 2");
})


app.get("/existing_games", (req, res) => {
    // res.status(200).send("suk my pepe");
    console.log("existing games");
    console.log(existing_games);
    res.status(200).send(existing_games);
});

app.listen(port, () => {
    console.log(`Listening to new requests on http://localhost:${port}`);
});

/**
 * 
 * @param {the name of the new game} gName 
 * @param {name of the game's creator} cName 
 * @param {geo coordinates of the game} gameLocation 
 */
function createGame(gName, cName, gameLocation = null) {
    var game = {
        gameName : gName,
        location : gameLocation,
        queue : [cName]
    }
    return game;
}

{
    // track existing games 
    existing_games = []
}