const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SALT_ROUNDS, SECRET } = require('../config/config');

let create = async (password, name, surname, email, phone) => {
    // validate user exist
    // let existingUser = await User.findOne({ email });

    // if (existingUser) {
    //     return {message: 'This e-mail is already in use!'};
    // }

        let salt = await bcrypt.genSalt(SALT_ROUNDS);
        let hash = await bcrypt.hash(password, salt);
    
        let user = new User({ email, password: hash, name, surname, phone });
        return user.save();
}

let login = async (email, password)=>{
    //find user
    let user = await User.findOne ({email})
    if (!user) {
        throw {message: 'User not found'}        
    }

    //compare password - hash
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw {message : 'Password missmatch!'}
    }

    //generate token
    let token = jwt.sign({_id: user._id, user: user.name, roles: ['admin']}, SECRET) //cleims - the info in the token
    return token;

}


module.exports = {
    create,
    login,
    
}