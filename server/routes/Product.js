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

// router api/product/:id
// GET
// @desc: get all product
// @access: public
// => API: http://localhost:8080/api/product/1

router.get("/product/:id", (req, res) => {
    const product_id = req.params.id;
    var sql = "SELECT * FROM uitfood.product WHERE product_id = ?";
    db.query(sql, [product_id], (err, result) => {
        if (err) throw err;
        res.send(...result);
    });
});

// router api/review/:id
// GET
// @desc: get all review of product
// @access: public
// => API: http://localhost:8080/api/review/1

router.get("/review/:id", (req, res) => {
    const product_id = req.params.id;
    var sql = "SELECT * FROM uitfood.review WHERE product_id = ?";
    db.query(sql, [product_id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;
