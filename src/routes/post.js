const router = require('express').Router();
const postController = require('../controllers/PostController');

router.get('/', postController.get);
router.post('/', postController.store);
router.delete('/:id', postController.delete);
router.get('/:id', postController.getById);
router.post('/:id/like', postController.like);

module.exports = router;