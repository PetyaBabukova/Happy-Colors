const Accessory = require('../models/Accessory');

function create(data) {
    let accessory = new Accessory(data);

    return accessory.save();
}

async function getAll() {
    let accessories = await Accessory.find({}).lean();

    return accessories;

}

async function getOne(_id) {
    return await Accessory.findById(_id).lean();
}

module.exports = {
    create,
    getAll,
    getOne,
}