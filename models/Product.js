const mongoose = require('mongoose');

const productScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
        maxlength: 50
    },

    mainImageUrl: {
        type: String,
        required: true,
        validate: /^https?/,
    },

    imageUrl1: {
        type: String,
        validate: /^https?/,
    },

    imageUrl2: {
        type: String,
        validate: /^https?/,
    },

    category: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
        min: 0.5

    },

    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'         
    }]
});


module.exports = mongoose.model('Product', productScheme);