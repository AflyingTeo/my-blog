const postModel = require('../models/Post.model');

class PostController {
    // [POST] /create 
    async postCreate(req, res, next) {
        const newPost = new postModel(req.body);
        try {
            const savedPost = await newPost.save();
            res.status(200).json(savedPost);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    //[PUT] /:id
    async postUpdate(req, res, next) {
        try {
            const post = await postModel.findById(req.params.id);

            if (post.username === req.body.username) {

                try {
                    const updatedPost = await postModel.findByIdAndUpdate(req.params.id, {
                        $set: req.body,
                    }, { new: true });
                    res.status(200).json(updatedPost);
                } catch (error) {
                    res.status(500).json(error);
                }
            } else {
                res.status(401).json("You can update only one post!!!");
            }

        } catch (error) {
            res.status(500).json(error);
        }
    }

    // [DELETE] /:id

    async postDelete(req, res, next) {
        if (req.body.userId === req.params.id) {
            try {
                const post = postModel.findById(req.params.id);
                try {
                    await post.delete();
                    res.status(200).json("Post has been deleted!!!");
                } catch (error) {
                    res.status(500).json(err);
                }
            } catch (error) {
                res.status(400).json("Post not found!!!");
            }

        }
        else {
            res.status(400).json("You can delete only one your account!!")
        }
    }
}

module.exports = new PostController();