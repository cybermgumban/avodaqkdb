const Controllers = require("../controllers/Controllers");

module.exports = (app) => {
    app.get('/avodaqkdb', Controllers.showall);
    app.post('/avodaqkdb', Controllers.add);
//    app.get('/avodaqkdb/find/:id', Controllers.find);
    app.put('/avodaqkdb/update/:id', Controllers.update);
    app.delete('/avodaqkdb', Controllers.delete);
};