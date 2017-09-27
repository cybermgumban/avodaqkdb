const Title = require("../model/model");

module.exports = {
    showall(req, res, next) {
        Title.find({})
            .then((result) => {
                res.send(result);
                console.log(result);
            });
    },

    create(req, res, next) {
        console.log("nakapasok kana sa create")
        const titleProps = req.body;

        Title.create(titleProps)
            .then(title => res.send(title))
            .catch(next);
    }
}