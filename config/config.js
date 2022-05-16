const config = {
    development: {
        PORT: process.env.PORT || 5000,
        DB_CONNECTION: 'mongodb://localhost:27017/happy-colors'
    },

    production: {
        PORT: process.env.PORT || 80,
        DB_CONNECTION: 'mongodb+srv://PetyaBabukova:Petya-310626@happycolors.mriyp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    }
};

module.exports = config[process.env.NODE_ENV.trim()]