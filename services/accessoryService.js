const Accessory = require('../models/Accessory');

function create(data) {
    let accessory = new Accessory(data);

    return accessory.save();
}

async function getAll() {
    let accessories = await Accessory.find({}).lean();
    return accessories;

}


module.exports = {
    create,
    getAll,
}