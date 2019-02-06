const router = require('express').Router();

router.use('/tweet', require('./routes/tweet'));

module.exports = router;