const Title = require("../model/model");
const Workaround = require("../model/workaround");
const Resolution = require("../model/resolution");

module.exports = {
    showall(req, res, next) {
        console.log("nakapasok kana sa showall");

            Title.find({})
                .populate('workarounds')
                .populate('resolutions')
                .then((result) => {
                    console.log(result)
                    res.send(result);
                })
            },

    add(req, res, next) {
        console.log("nakapasok kana sa create")
        const titleProps = req.body;

        const workaroundNew = new Workaround({ workaround_list: req.query.workaround_list })
        const resolutionNew = new Resolution({ resolution_list: req.query.resolution_list })

        Promise.all([ workaroundNew.save(), resolutionNew.save() ])
            .then((res) => {
                const titleNew = new Title({ category: titleProps.category, title: titleProps.title, description: titleProps.description, ticket_tag: titleProps.ticket_tag, workarounds: res[0]._id, resolutions: res[1]._id })
                titleNew.save();
            });
    },

    delete(req, res, next) {
        console.log("nakapasok kana sa delete")
        const titleProps = req.body.title;

        Title.find({title: titleProps})
        .then((result) => Promise.all([Workaround.findByIdAndRemove({ _id: result[0].workarounds }), Resolution.findByIdAndRemove({ _id: result[0].resolutions })]))
            .then(() => Title.find({title: titleProps}))
            .then((result) => Title.findByIdAndRemove({ _id: result[0]._id }))
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