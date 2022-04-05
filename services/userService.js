const User = require('../models/User');

function create(data) {
    let name = new User(data);
    return User;
}

function getData(data) {
    return data;
}

module.exports = {
    create,
    getData,
}