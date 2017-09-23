const Controller = require("../controllers/Controllers");

module.exports = (app) => {
    app.get('avodaqkdb', Controllers.greeting);
    app.post('/avodaqkdb/:category', Controllers.create);
    app.get('/avodaqkdb/:category/:id', Controllers.find);
    app.put('/avodaqkdb/:category/:id', Controllers.update);
    app.delete('/avodaqkdb/:category/:id', Controllers.delete);
};