const express = require("express");
const mysql = require("mysql");

const app = express();

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

module.exports = db;
