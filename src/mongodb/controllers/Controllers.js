const Title = require("../model/model");

module.exports = {
    greeting(req, res, next) {
        res.send({hi: "there"});
    },

    create(req, res, next) {
        res.send({ hi: "there" });
    }
}