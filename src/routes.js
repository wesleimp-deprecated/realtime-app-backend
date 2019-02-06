const router = require('express').Router();
const tweetController = require('./controllers/TweetController');

// tweets
router.get('/tweet', tweetController.get)
router.post('/tweet', tweetController.store);
router.get('/tweet/:id', tweetController.getById);
router.post('/tweet/:id/like', tweetController.like);

module.exports = router;