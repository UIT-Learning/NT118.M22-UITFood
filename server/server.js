const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./connectDB/connectDB");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

var server = app.listen(process.env.PORT || 8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

// require API routes
const login = require("./routes/Login");
const register = require("./routes/Register");

// call API routes
// Login
app.use("/api", login);

// Register
app.use("/api", register);

// Profile
