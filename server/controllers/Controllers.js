const Title = require("../model/model");

module.exports = {
    greeting(req, res, next) {
        res.send({hello: "there"});
    },

    create(req, res, next) {
        const titleProps = req.body;

        Title.create(titleProps)
            .then(title => res.send(title))
            .catch(next);
    }
}