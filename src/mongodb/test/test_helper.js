const mongoose = require("mongoose");

before((done) => {
    mongoose.connect('mongodb://localhost/avodaqkdb_test');
    mongoose.connection
        .once('open', () => done())
        .on('error', (err) => {
            console.warn('Warning', error);
        });
});