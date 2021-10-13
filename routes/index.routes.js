const router = require('express').Router();

/**
 * Application Routes imports
 */
const pagesRoutes = require('./pages.routes');
const notFoundRoutes = require('./notfound.routes');

router.use(pagesRoutes);
router.use(notFoundRoutes);

module.exports = router;
