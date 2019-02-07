const Post = require('../models/Post');

module.exports = {
  // Get all data
  async get(req, res) {
    const tweets = await Post.find({}).sort('-createdAt');
    return res.json(tweets);
  },
  // Get by id
  async getById(req, res) {
    const tweet = await Post.findById(req.params.id);
    return res.json(tweet);
  },
  // Save data
  async store(req, res) {
    const tweet = await Post.create(req.body);
    req.io.emit('newTweet', tweet);
    return res.json(tweet);
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
    const tweet = await Post.findById(req.params.id);
    tweet.set({
      likes: tweet.likes + 1
    });
    await tweet.save();
    req.io.emit('likeTweet', tweet);
    return res.json(tweet);
  }
}