const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");

mongoose.Promise = global.Promise;

if(process.env.NODE_ENV !== 'test') {
    console.log("helloooooo");
    mongoose.connect('mongodb://localhost/avodaqkdb');
    mongoose.connection
        .once('open', done => done)
        .on('error', (err) => {
            console.log('Warning', err)
        });
}

app.use(bodyParser.json());

routes(app);

app.use((req, res, next) => {
});

module.exports = app;