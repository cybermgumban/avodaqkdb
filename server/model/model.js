const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TitleSchema = new Schema ({
    category: String,
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
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

const WorkaroundSchema = new Schema ({
    workaround_list: []
});

const ResolutionSchema = new Schema ({
    resolution_list: []
});

const Title = mongoose.model('title', TitleSchema);
const Workaround = mongoose.model('workaround', WorkaroundSchema);
const Resolution = mongoose.model('resolution', ResolutionSchema);

module.exports = Title, Workaround, Resolution;