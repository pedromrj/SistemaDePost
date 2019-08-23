const { Schema , model } = require('mongoose');

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
},
    {
        timestamps: true
});

module.exports = model('Post', PostSchema);