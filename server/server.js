const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const { application } = require("express");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

var server = app.listen(process.env.PORT || 8080, function () {
    var host = server.address().address;
    var port = server.address().port;
});

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "uitfood",
});
db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

// login
app.post("/login", (req, res) => {
    const cus_email = req.body.cus_email;
    const cus_pass = req.body.cus_pass;
    var sql =
        "SELECT * FROM uitfood.customer WHERE cus_email = ? AND cus_pass = ?";
    db.query(sql, [cus_email, cus_pass], (err, result) => {
        if (err) throw err;
        // console.log(result);
        if (result.length > 0) {
            if (res) {
                // console.log("success");
                res.send({
                    message: "success",
                    result,
                });
            } else {
                res.send({ message: "Wrong cus_pass" });
            }
        } else {
            res.send({ message: "Wrong cus_email" });
        }
    });
});

// get user
app.get("/data", (req, res) => {
    var sql = "SELECT * FROM uitfood.customer";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});
// Register
app.post("/register", (req, res) => {
    const cus_email = req.body.cus_email;
    const cus_pass = req.body.cus_pass;
    var sql = "INSERT INTO uitfood.customer (cus_email, cus_pass) VALUES (?,?)";
    db.query(sql, [cus_email, cus_pass], (err) => {
        if (err) throw err;
        console.log(result);
        if (result)
            res.send({
                message: "success",
                cus_email: req.body.cus_email,
                cus_pass: req.body.cus_pass,
            });
        else {
            res.send({ message: "Wrong cus_email" });
        }
    });
});

// profile
app.get("/profile", (req, res) => {
    const cus_email = req.body.cus_email;
    var sql = "SELECT * FROM uitfood.customer where cus_email = ?";
    db.query(sql, [cus_email], (err, result) => {
        if (err) throw err;
        console.log(result);
        if (result) {
            res.send({
                message: "success",
                result,
            });
        } else {
            res.send({ message: "error" });
        }
    });
});
