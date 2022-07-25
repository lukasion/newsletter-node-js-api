var router = require('express').Router();
const { models } = require('../../models');
const { getIdParam } = require('../../helpers');

async function getByLoginPassword(login, password) {
	const user = await models.users.findOne({
        where: {
            login: login,
            password: password
        }
    });

	return user;
};

router.post('/', (req, res) => {
    if (req.query && req.body.login !== undefined && req.body.password !== undefined) {
        getByLoginPassword(req.body.login, req.body.password).then((result) => {
            if (result) {
                res.json(result);
            } else {
                res.json({result: null});
            }
        });
    } else {
        res.send();
    }
})

module.exports = router;
