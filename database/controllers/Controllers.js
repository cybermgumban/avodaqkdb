const Title = require("../model/model");

module.exports = {
    showall(req, res, next) {
        console.log("nakapasok kana sa showall");
        if(req.query.category) {
            Title.find({ category: req.query.category })
                .then((result) => {
                    res.send(result);
                })
        } else {
            console.log("walang laman cat at key")
            Title.find({})
                .then((result) => {
                    res.send(result);
                });
        }
    },

    add(req, res, next) {
        console.log("nakapasok kana sa create")
        const titleProps = req.body;
        console.log(req);
        Title.create(titleProps)
            .then(title => res.send(title))
            .catch(next);
    },

    delete(req, res, next) {
        console.log("nakapasok kana sa delete")
        const titleProps = req.body.title;

        Title.find({title: titleProps})
        .then((result) => (
            Title.findByIdAndRemove({_id: result[0]._id})
        ))
            .then(title => res.send(title))
            .catch(next);
    }
}