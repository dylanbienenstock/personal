const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const fs = require("fs");
const prettyBytes = require("pretty-bytes");
const downloadsPath = path.join(".", "downloads");

app.use(express.static(path.join(__dirname, "client/dist")));

app.get("/downloads", (req, res) => {
    fs.readdir(downloadsPath, (err, fileNames) => {
        let files = [];
        
        fileNames.forEach((fileName) => {
            let file = fs.statSync(path.join(downloadsPath, fileName));
                
            files.push({
                name: fileName,
                size: prettyBytes(file.size)
            });
        });

        res.json(files);
    });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});