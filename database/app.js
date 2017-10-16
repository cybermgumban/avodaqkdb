const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose.Promise = global.Promise;

if(process.env.NODE_ENV !== 'test') {
    console.log("helloooooo");
    mongoose.connect('mongodb://10.96.128.49/avodaqkdb');
    mongoose.connection
        .once('open', done => done)
        .on('error', (err) => {
            console.log('Warning', err)
        });
}

app.use(bodyParser.json());

app.use(cors());

routes(app);

app.use((req, res, next) => {
});

module.exports = app;