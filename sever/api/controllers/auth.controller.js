 const UserModel = require('../models/Users.model');
 const bcrypt = require('bcrypt');

class AuthController {
    //[Post] /register
    async register(req, res, next){
        try{
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(req.body.password, salt);
            const newUser = new UserModel({
                username: req.body.username,
                email: req.body.email,
                password: hashedPass,
            });

            const user = await newUser.save();
            res.status(200).json(user);
        }catch(error){
            res.status(500).json(error);
        }
    }
}

module.exports = new AuthController();
