const { Schema , model } = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    post : [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
},{
    timestamps: true
});

module.exports = model('User' , UserSchema);