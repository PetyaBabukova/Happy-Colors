const User = require('../models/User');

function create(data) {
    let user = new User(data);
    return user.save();
}

function getData(data) {
    return data;
}

module.exports = {
    create,
    getData,
}