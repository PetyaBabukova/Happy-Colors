const mongoose = require('mongoose');
const config = require('./config');

module.exports = (app) => {
    mongoose.connect(config.DB_CONNECTION);

    // this is from mongoose documentation:
    // main().catch(err => console.log(err));
    // async function main() {
    //     await mongoose.connect('mongodb://localhost:27017/happy-colors');
    // }

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection errro:'));
    db.once('open', () => console.log('Db connected!'));
}