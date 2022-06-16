const express = require("express");
const router = express.Router();
const db = require("../connectDB/connectDB");

// router api/orderhistory
// GET
// @desc: get all order history
// @access: public
// => API: http://localhost:8080/api/orderhistory/3

router.get("/orderhistory/:id", (req, res) => {
    const cus_id = req.params.id;
    var sql =
        "SELECT distinct * FROM uitfood.product JOIN uitfood.invoice_detail ON product.product_id = invoice_detail.product_id JOIN uitfood.invoice ON invoice_detail.invoice_id = invoice.invoice_id WHERE invoice.cus_id = ?";
    db.query(sql, [cus_id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// router api/invoice
// GET
// @desc: get all invoice
// @access: public
// => API: http://localhost:8080/api/invoice/3

router.get("/invoice/:id", (req, res) => {
    const cus_id = req.params.id;
    var sql = "SELECT * FROM uitfood.invoice WHERE cus_id = ?";
    db.query(sql, [cus_id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// router api/product_in_invoice
// GET
// @desc: get all product_in_invoice
// @access: public
// => API: http://localhost:8080/api/product_in_invoice/3

router.get("/product_in_invoice/:id", (req, res) => {
    const invoice_id = req.params.id;
    var sql =
        "SELECT * FROM uitfood.invoice JOIN uitfood.invoice_detail ON invoice.invoice_id = invoice_detail.invoice_id JOIN uitfood.product ON invoice_detail.product_id = product.product_id WHERE invoice.invoice_id = ?";
    db.query(sql, [invoice_id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// router api/create_invoice
// POST
// @desc: create_invoice
// @access: public
// => API:

router.post("/create_invoice", (req, res) => {
    const { cus_id, invoice_total, invoice_feeship, invoice_discount, items } =
        req.body;
    var sql =
        "INSERT INTO uitfood.invoice (cus_id, dis_id, invoice_total, invoice_status, invoice_createddate, invoice_feeship, invoice_discount, invoice_bill) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(
        sql,
        [
            cus_id,
            null,
            invoice_total,
            0,
            new Date(),
            invoice_feeship,
            invoice_discount,
            "",
        ],
        (err, result) => {
            if (err) throw err;
            else {
                var sql =
                    "INSERT INTO uitfood.invoice_detail (invoice_id, product_id, inde_quantity, inde_total) VALUES (?, ?, ?, ?)";
                for (var i = 0; i < items.length; i++) {
                    db.query(
                        sql,
                        [
                            result.insertId,
                            items[i].product_id,
                            items[i].cart_quantity,
                            items[i].cart_quantity * items[i].product_price,
                        ],
                        (err, result) => {
                            if (err) throw err;
                            else {
                                var sql =
                                    "DELETE FROM uitfood.cart WHERE cus_id = ?";
                                db.query(sql, [cus_id], (err, result) => {
                                    if (err) throw err;
                                });
                            }
                        }
                    );
                }
            }
        }
    );
});

// api/updatestatus
// PUT
// desc: update status of invoice
// access: private
// => API:

router.put("/updatestatus", (req, res) => {
    const { invoice_id } = req.body;
    var sql =
        "UPDATE uitfood.invoice SET invoice_status = 1 WHERE invoice_id = ?";
    db.query(sql, [invoice_id], (err, result) => {
        if (err) throw err;
        res.send({ message: "Update status success" });
    });
});

// api/updatebill
// PUT
// desc: update bill of invoice
// access: private
// => API:

router.put("/updatebill", (req, res) => {
    const { invoice_bill, invoice_id } = req.body;
    var sql =
        "UPDATE uitfood.invoice SET invoice_bill = ? WHERE invoice_id = ?";
    db.query(sql, [invoice_bill, invoice_id], (err, result) => {
        if (err) throw err;
        res.send({ message: "Update bill success" });
    });
});

module.exports = router;
