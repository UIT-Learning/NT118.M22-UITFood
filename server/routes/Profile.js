const express = require("express");
const router = express.Router();
const db = require("../connectDB/connectDB");
// router api/profile
// GET
// @desc:
// @access: public

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

module.exports = router;
