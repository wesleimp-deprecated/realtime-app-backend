const Tweet = require('../models/Tweet');

module.exports = {
  async get(req, res) {
    const tweets = await Tweet.find({}).sort('-createdAt');

    return res.json(tweets);
  },
  async store(req, res) {
    const tweet = await Tweet.create(req.body);

    return res.json(tweet);
  }
}