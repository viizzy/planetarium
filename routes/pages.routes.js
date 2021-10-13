const router = require('express').Router();
const {
  getIndexPage,
  getPlanetsPage,
  getPlanetDetails
} = require('../controllers/pages.controller');

router.get('/', getIndexPage);
router.get('/planets', getPlanetsPage);
router.get('/planets/:id', getPlanetDetails);

module.exports = router;
