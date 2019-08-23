const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

module.exports = {
    async store(req , res) {
        const { id } = req.params;
        const { auth } = req.headers;
        const { title, body } = req.body;
    
        const PostAtual = await Post.findById(id);

        const post = await Comment.create({
            title: title,
            body: body
        })

        PostAtual.comments.push(post._id);
        await PostAtual.save();

        return res.json(PostAtual);
    }
}