const express = require('express'),
  router = express.Router({
    mergeParams: true
  }),
  userRoutes = require('./components/user/user.route'),
  contractsRoutes = require('./components/contracts/contract.route');

router.use('/api', userRoutes);
router.use('/api', contractsRoutes);

module.exports = router;
