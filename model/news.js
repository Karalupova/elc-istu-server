const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title: { type: String, default: null },
    text: { type: String, default: null },
    smallText: { type: String, default: null },
    date: { type: Date, default: null },
    img: { type: String, default: null },
    tag: { type: String, default: null },
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

});

module.exports = mongoose.model("News", newsSchema);
