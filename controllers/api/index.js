const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/user-routes', userRoutes);

module.exports = router;