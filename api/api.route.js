const express = require('express'),
  router = express.Router({
    mergeParams: true
  }),
  userRoutes = require('./components/user/user.route');

router.use('/api', userRoutes);

module.exports = router;
