const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const articleSchema = new Schema({

    description: {
        type: String,
        required: true,
    },

    author: {
        type: ObjectId,
        ref: "User"
    }

});

module.exports = new Model('Articles', articleSchema);