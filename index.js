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
        if (!pythonStr) {
            res.status(400).json({error: `Missing required parameter, pythonStr, which should be Python source code in string format.`});
        }
        else {
            const result = SIDElib.parse(decodeURIComponent(pythonStr));
            res.json(result);
        }
    } catch (e) {
        res.status(400).json(
            {
                error: `Error parsing the supplied Python code.`,
                detail: e
            });
    }
});

app.get('/misconceptionInfo', async (_, res) => {
    try {
        const info = SIDElib.misconceptionInfo();
        res.json(info);
    } catch (e) {
        res.status(500).json(
            {
                error: "Unable to get misconception info.",
                detail: e
            });
    }
});

app.get('/symptomInfo', async (_, res) => {
    try {
        const info = SIDElib.symptomInfo();
        res.json(info);
    } catch (e) {
        res.status(500).json(
            {
                error: "Unable to get symptom info.",
                detail: e
            }
        )
    }
})

app.listen(PORT, () => {
    console.log(`SIDE-lib-api listening on port ${PORT}`);
});