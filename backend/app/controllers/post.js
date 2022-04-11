const mongoose = require("mongoose");

const Post = mongoose.model("Post");

// exports.getUserToken = async (req, res) => {
//     if (!req.user) return res;
//     const token = req.user.generateJwtToken();

//     res.cookie('token', token, req.user.generateCookie()).json({ ...req.user.resUserData(), token });
// };

module.exports.getPosts = async (req, res, next) => {
  try {
    const post = await Post.find({});
    res.json(post);
  } catch (error) {
    next(error);
  }
};

module.exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    next(error);
  }
};

module.exports.createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    next(error);
  }
};

module.exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.json(post);
  } catch (error) {
    next(error);
  }
};

module.exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );
    res.json(post);
  } catch (error) {
    next(error);
  }
};
