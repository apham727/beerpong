const express = require("express");
const app = express();
const port = process.env.PORT || "8000";
const cors = require('cors')
app.use(cors())


app.get("/", (req, res) => {
    res.status(200).send("suk my pepeasef");
});

app.put("/new_game", (req, res) => {
    
});

app.post("/create_new_game", (req, res) => {
    console.log("request is");
    console.log(req);
    res.status(200).send("suk my pepe 2");
})


app.route("/existing_games").get((req, res) => {
    res.status(200).send("suk my pepe");
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
