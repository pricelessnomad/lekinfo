const express = require('express');
const drugController = require('../controllers/drugController');

const router = express.Router();

router.route('/search').get(drugController.searchDrug);

router
  .route('/')
  .get(drugController.getAllDrugs)
  .post(drugController.createDrug);

router.get('/:id', drugController.getDrug);

module.exports = router;
