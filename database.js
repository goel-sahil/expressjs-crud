'use strict';
const mongoose = require('mongoose');
const config = require('./config/config');

let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};


mongoose.connect(`mongodb://${config.local.database.host}:${config.local.database.port}/${config.local.database.name}`, options, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connected to ' + config.local.database.name);
    }
});

module.exports = mongoose;