const Title = require("../model/model");

module.exports = {
    showall(req, res, next) {
        console.log("nakapasok kana sa showall");
        Title.find({})
            .then((result) => {
                res.send(result);
                console.log(result);
            });
    },

    add(req, res, next) {
        console.log("nakapasok kana sa create")
        const titleProps = req.body;

        Title.create(titleProps)
            .then(title => res.send(title))
            .catch(next);
    },

    delete(req, res, next) {
        console.log("nakapasok kana sa delete")
        const titleProps = req.body.title;

        Title.find(titleProps)
        .then((result) => delete(`/avodaqkdb/${result._id}`))
            .then(title => res.send(title))
            .catch(next);
    }
}