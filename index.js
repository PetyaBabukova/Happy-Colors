const express = require('express');
const {engine} = require('express-handlebars');

const config = require('./config/config');
const routes = require('./routes');

const app = express();

// require("bootstrap")

require('./config/express')(app); 

app.use(routes);


app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));