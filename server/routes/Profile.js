const express = require("express");
const router = express.Router();
const db = require("../connectDB/connectDB");
// router api/profile
// GET
// @desc:
// @access: public

router.get("/profile", (req, res) => {
    const cus_id = req.query.cus_id;
    const cus_email = req.query.cus_email;
    var sql =
        "SELECT * FROM uitfood.customer WHERE cus_id = ? and cus_email = ?";
    db.query(sql, [cus_id, cus_email], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(...result);
    });
});

module.exports = router;
