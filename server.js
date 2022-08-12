const express = require("express");
require("dotenv").config({ path: "./config.env" });
const dbo = require("./db/conn");
const user = require("./controllers/user");
const path = require("path")
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.static(path.join(__dirname, 'client/build')));

app.get("/api", (req, res) => {res.send("api is ready!")});

app.post("/read/login", user.readUser);

app.get("/api/user/getall", user.getUserAll);
app.get("/api/user/get/:id", user.getUserbyId);
app.post("/api/user/create", user.createUser);
app.post("/api/user/update/:id", user.updateUser);
app.delete("/api/user/delete/:id", user.deleteUser);

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(
    port
    ,() => {
        dbo.connectServer(
            (err) => {
                if (err) console.error(err);
            }
        );
        console.log(`http://localhost:${port}`);
    }
);
