const mongoose = require('mongoose');

const accessoryScheme = new mongoose.Schema({
    name: String,
    description: String,
    id: mongoose.Types.ObjectId,
    mainImageUrl: String,
    price: Number
});


module.exports = mongoose.model('Accessory', accessoryScheme);