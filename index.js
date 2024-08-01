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
            console.log(req.query)
            res.status(400).json({error: `Missing required parameter, pythonStr, which should be Python source code in string format.`});
        }
        else {
            console.log("processing request")
            const showTree = req.query.showTree && req.query.showTree == "true"
            const result = SIDElib.parse(pythonStr, showTree);
            res.json(result);
        }
    } catch (e) {
        console.log(req.query.pythonStr);
        console.log(e)
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