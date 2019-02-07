const router = require('express').Router();
const tweetController = require('../controllers/TweetController');

router.get('/', tweetController.get);
router.post('/', tweetController.store);
router.delete('/:id', tweetController.delete);
router.get('/:id', tweetController.getById);
router.post('/:id/like', tweetController.like);

module.exports = router;