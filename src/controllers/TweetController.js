const Tweet = require('../models/Tweet');

module.exports = {
  // Get all data
  async get(req, res) {
    const tweets = await Tweet.find({}).sort('-createdAt');

    return res.json(tweets);
  },
  // Get by id
  async getById(req, res){
    const tweet = await Tweet.findById(req.params.id);
    return res.json(tweet);
  },
  // Save data
  async store(req, res) {
    const tweet = await Tweet.create(req.body);

    return res.json(tweet);
  },
  // Like data
  async like(req, res) {
    const tweet = await Tweet.findById(req.params.id);
    tweet.set({
      likes: tweet.likes + 1
    });
    await tweet.save();

    return res.json(tweet);
  }
}