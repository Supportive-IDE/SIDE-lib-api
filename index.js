//import { parse } from "./SIDE-lib/index.js";
const SIDElib = require("./SIDE-lib/dist/index");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8081;

app.get('/', async (_, res) => {
    res.status(200).send("Hello!")
});

app.get('/parse', async (req, res) => {
    const pythonStr = req.query.pythonStr;
    try {
        const result = SIDElib.parse(decodeURIComponent(pythonStr));
        res.json(result);
    } catch (e) {
        res.status(400).send(`Error parsing the Python string.`);
    }
})

app.listen(PORT, () => {
    console.log(`SIDE-lib-api listening on port ${PORT}`);
})