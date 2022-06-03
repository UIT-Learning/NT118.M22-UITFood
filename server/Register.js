app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    var sql = "INSERT INTO login_food.user (username, password) VALUES (?,?)";
    db.query(sql, [username, password], (err) => {
        if (err) throw err;
        console.log(result);
        if (result)
            res.send({
                message: "success",
                username: req.body.username,
                password: req.body.password,
            });
        else {
            res.send({ message: "Wrong username" });
        }
    });
});
