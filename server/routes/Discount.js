const express = require("express");
const router = express.Router();
const db = require("../connectDB/connectDB");

// router api/discount
// GET
// @desc:
// @access: public

router.get("/discount", (req, res) => {
    var sql = "SELECT * FROM uitfood.discount";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

module.exports = router;
