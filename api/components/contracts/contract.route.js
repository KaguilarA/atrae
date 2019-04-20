const express = require('express'),
  router = express.Router(),
  contracts = require('./contract.api');

router.param('id', (req, res, next, id) => {
  req.body._id = id;
  next();
});

router.route('/save_contract').post((req, res, next) => {
  contracts.registerContract(req, res, next);
});

router.route('/get_all_contracts').put((req, res) => {
  contracts.listAllContracts(req, res);
});

module.exports = router;