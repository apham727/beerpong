const express = require("express");
const app = express();
const port = process.env.PORT || "8000";
const cors = require('cors')
app.use(cors())


app.get("/", (req, res) => {
    res.status(200).send("suk my pepeasef");
});

app.route("/existing_games").get((req, res) => {
    res.status(200).send("suk my pepe from node");
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
