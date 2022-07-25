var router = require('express').Router();

router.post('/', (req, res) => {
    if (req.query && req.body.login !== undefined && req.body.password !== undefined) {
        con.query(`SELECT * FROM users WHERE login = '${req.body.login}' AND password = '${req.body.password}'`, function (err, result) {
            if (err) throw err;

            if (result && result.length > 0) {
                res.json({
                    result: result[0]
                });
            } else {
                res.json({
                    result: false
                });
            }
        });
    } else {
        res.send();
    }
})

module.exports = router;
