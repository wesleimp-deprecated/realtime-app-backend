const Post = require('../models/Post');

module.exports = {
  // Get all data
  async get(req, res) {
    const posts = await Post.find({}).sort('-createdAt');
    return res.json(posts);
  },
  // Get by id
  async getById(req, res) {
    const post = await Post.findById(req.params.id);
    return res.json(post);
  },
  // Save data
  async store(req, res) {
    const post = await Post.create(req.body);
    req.io.emit('newPost', post);
    return res.json(post);
  },
  // Delete data
  async delete(req, res) {
    await Post.deleteOne({
      _id: req.params.id
    });
    return res.json({
      message: "Record deleted"
    });
  },
  // Like data
  async like(req, res) {
    const post = await Post.findById(req.params.id);
    post.set({
      likes: post.likes + 1
    });
    await post.save();
    req.io.emit('likePost', post);
    return res.json(post);
  }
}