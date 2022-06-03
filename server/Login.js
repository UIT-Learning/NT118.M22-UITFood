// login
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    var sql =
        "SELECT * FROM login_food.user WHERE username = ? AND password = ?";
    db.query(sql, [username, password], (err, result) => {
        if (err) throw err;
        // console.log(result);
        if (result.length > 0) {
            if (res) {
                // console.log("success");
                res.send({
                    message: "success",
                    username: req.body.username,
                    password: req.body.password,
                });
            } else {
                res.send({ message: "Wrong password" });
            }
        } else {
            res.send({ message: "Wrong username" });
        }
    });
});

// get user
app.get("/data", (req, res) => {
    var sql = "SELECT * FROM login_food.user";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});
