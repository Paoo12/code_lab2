const express = require('express');
const fs = require('fs').promises;
const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {

    //Error handling
    try {
        //be able to read examplefile.txt by the fs module
        const data = await fs.readFile("examplefile.txt", "utf-8");
        res.send(data); //send data back to the front-end
    } catch (e) {
        console.error('Error reading file.', e);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`Connected at http://localhost:${PORT}`);
});

/* Submitted by: Paolo Salvador */