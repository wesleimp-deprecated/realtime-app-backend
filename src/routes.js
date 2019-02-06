const router = require('express').Router();
const tweetController = require('./controllers/TweetController');

// tweets
router.get('/tweet', tweetController.get)
router.post('/tweet', tweetController.store);

module.exports = router;