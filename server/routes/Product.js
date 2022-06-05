const express = require("express");
const router = express.Router();
const db = require("../connectDB/connectDB");

// router api/product
// GET
// @desc: get all product
// @access: public

router.get("/product", (req, res) => {
    var sql = "SELECT * FROM uitfood.product";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;
