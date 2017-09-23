const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const routes = require("./routes/routes");

mongoose.Promise = global.Promise;

if(process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://localhost/avodaqkdb');
    mongoose.connection
        .once('open', () => done())
        .on('error', (err) => {
            console.log('Warning', err)
        });
}

app.use(bodyParser.json());

routes(app);

app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
});

module.exports = app;