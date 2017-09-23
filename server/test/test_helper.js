const mongoose = require("mongoose");

before((done) => {
    mongoose.connect('mongodb://localhost/avodaqkdb_test');
    mongoose.connection
        .once('open', () => done())
        .on('error', (err) => {
            console.warn('Warning', error);
        });
});

beforeEach((done) => {
    const {titles} = mongoose.connection.collections;
    titles.drop()
        .then(() => done())
        .catch(() => done());
});