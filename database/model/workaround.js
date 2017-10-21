const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkaroundSchema = new Schema ({
    workaround_list: [],
});

const Workaround = mongoose.model('workaround', WorkaroundSchema);

module.exports = Workaround;