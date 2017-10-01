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

        Title.find({title: titleProps})
        .then((result) => (
            console.log(result[0]._id),
            Title.findByIdAndRemove({_id: result[0]._id})
        ))
            .then(title => res.send(title))
            .catch(next);
    }
}