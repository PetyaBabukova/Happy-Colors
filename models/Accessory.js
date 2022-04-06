const mongoose = require('mongoose');

const accessoryScheme = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: String,
    mainImageUrl: String,
    description: String,
});


module.exports = mongoose.model('Accessory', accessoryScheme);