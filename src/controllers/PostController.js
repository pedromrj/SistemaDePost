const User = require("../models/User");
const Post = require("../models/Post");

module.exports = {
    async store(req , res) {
        const { auth } = req.headers;
        const { title, body } = req.body;

        const Logged = await User.findById(auth);

        const post = await Post.create({
            title: title,
            body: body
        })

        Logged.post.push(post._id);
        await Logged.save();

        return res.json(Logged);
    }
}