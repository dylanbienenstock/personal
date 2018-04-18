const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const fs = require("fs");
const prettyBytes = require("pretty-bytes");
const downloadsPath = path.join(".", "downloads");

const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");

var config;

try {
    config = require("./config.json");
} catch (e) { }

app.use(express.static(path.join(__dirname, "client/dist")));
app.use(bodyparser.json({ extended: true }));

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

app.get("/downloads/:fileName", (req, res) => {
    res.download(path.join(downloadsPath, req.params.fileName));
});

app.post("/note", (req, res) => {
    if (config) {
        let transporter = nodemailer.createTransport(config.nodemailer);
        let email = {
            from: `"${req.body.sender}" <${req.body.email}>`,
            to: "db@dylanbienenstock.com",
            subject: `Note from ${req.body.sender}`,
            html: `
                Name: <b>${req.body.sender}</b> <br>
                Email: <b>${req.body.email}</b> <br> <br>
                ${req.body.text}
            `
        };

        let success = true;

        transporter.sendMail(email, (err, info) => {
            if (err) {
                console.log(err);

                success = false;
            }
        });

        res.send(success);
    } else {
        res.send(false);
    }
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});