const Title = require("../model/model");
const Workaround = require("../model/model");
const Resolution = require("../model/model");

module.exports = {
    showall(req, res, next) {
        console.log("nakapasok kana sa showall");
            console.log("walang laman cat at key")
            Title.find({})
                .then((result) => {
                    res.send(result);
                });
        },

    add(req, res, next) {
        console.log("nakapasok kana sa create")
        const titleProps = req.body;

        Promise.all([
            Workaround.create({ workaround_list: req.query.workarounds }), 
            Resolution.create({ resolution_list: req.query.resolutions }), 
        ]).then((res) => {
            console.log(res);
            console.log(res[0]._id);
            console.log(res[1]._id);
            Title.create(titleProps, { workarounds: res[0]._id, resolutions: res[1]._id })
                .then((res) => console.log(res)); 
        });
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
    },

    update(req, res, next) {
        console.log("nakapasok kana sa update")
        const titleId = req.params.id;
        const titleProps = req.body;

        Title.findByIdAndUpdate(
            { _id: titleId }, 
            { title: titleProps.title, description: titleProps.description }, 
            { new:true } 
        ).then(title => res.send(title))  
        .catch(next);
    }
}