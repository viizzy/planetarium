const router = require('express').Router();

router.use('*', (req, res, next) => {
  res.status(404).send('Not Found!');
});

module.exports = router;