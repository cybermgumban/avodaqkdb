const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TitleSchema = new Schema ({
    category: String,
    customer: String,
    title: {
        type: String,
        //required: [true, 'Title is required']
    },
    description: {
        type: String,
        //required: [true, 'Description is required']
    },
    ticket_tag: String,
    workarounds: [{
        type: Schema.Types.ObjectId,
        ref: 'workaround'
    }],
    resolutions: [{
        type: Schema.Types.ObjectId,
        ref: 'resolution'
    }]
});

const Title = mongoose.model('title', TitleSchema);

module.exports = Title;