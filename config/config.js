const config = {
    development: {
        PORT: process.env.PORT || 5000,
        DB_CONNECTION: 'mongodb://localhost:27017/happy-colors', 
        SALT_ROUNDS: 1,
        SECRET: 'polyBelyata',
        COOKIE_NAME: 'USER_SESSION',

    },

    production: {
        PORT: process.env.PORT || 80,
        DB_CONNECTION: 'mongodb+srv://PetyaBabukova:Petya-310626@happycolors.mriyp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        SALT_ROUNDS: 8,
        SECRET: 'polyBelyata',
        COOKIE_NAME: 'USER_SESSION',
    }
};

module.exports = config[process.env.NODE_ENV.trim()]