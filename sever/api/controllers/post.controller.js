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
    async postSingleGet(req, res, next) {
        try {
            const singlePost = await postModel.findOne({ _id: req.params.id })
            res.status(200).json(singlePost);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    //[GET]
    async postGet(req, res, next) {
        const username = req.query.user;
        const catname = req.query.cat;
        const postId = req.params.id;

        try {
            let posts;
            if (username) {
                posts = await postModel.find({ username });
            } else if (catname) {
                posts = await postModel.find({
                    categories: {
                        $in: [catname],
                    }
                })
            } else if (postId) {
                posts = await postModel.findOne({ _id: postId })
            } else {
                posts = await postModel.find();
            }
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json(error);
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
        try {
            const post = await postModel.findById(req.params.id);
            if (post.username === req.body.username) {
                try {
                    await post.delete();
                    res.status(200).json("Post has been deleted!!!");
                } catch (error) {
                    res.status(500).json(err);
                }
            }
            else {
                res.status(400).json("You can delete only one your account!!")
            }

        } catch (error) {
            res.status(500).json("Post not found!!!");
        }
    }
}

module.exports = new PostController();