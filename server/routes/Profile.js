const express = require("express");
const router = express.Router();
const db = require("../connectDB/connectDB");
// router api/profile
// GET
// @desc:
// @access: public

router.get("/profile", (req, res) => {
    const cus_email = "a";
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
