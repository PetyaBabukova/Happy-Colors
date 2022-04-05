const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    
    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        validate: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },

   phone: {
        type: Number,
        required: true,
        validate: /[0-9]{10}/
    },

    address:{
        type: String,
        required: true,
    },

    city:{
        type: String,
        required: true,
    },

    zipCode:{
        type: Number,
        required: true,
    },
});

userScheme.methods.connectData = function(){
    return `Потребител: ${this.name} ${this.surname}, тел.: ${this.phone}, град: ${this.city}, пощ.код: ${this.zipCode}, адрес: ${this.address}`;
}


module.exports = mongoose.model('User', userScheme);