const UsersModel = require('../models/Users.model');
const bcrypt = require('bcrypt');


const loginCheck = async (req, res, next) => {
    try {
        const user = await UsersModel.findOne({
            username: req.body.username,
        });
        !user && res.status(400).json("Wrong credentails!!");

        const validatedPassw = await bcrypt.compare(req.body.password, user.password);
        !validatedPassw && res.status(400).json("Wrong password!!");

        next();
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = loginCheck;
