const { Schema , model } = require('mongoose');

const CommentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = new model('Comment', CommentSchema);