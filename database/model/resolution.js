const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResolutionSchema = new Schema ({
    resolution_list: [],
});

const Resolution = mongoose.model('resolution', ResolutionSchema);

module.exports = Resolution;