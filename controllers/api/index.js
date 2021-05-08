const router = require('express').Router();
const userRoutes = require('./user-routes');
const showRoutes = require('./show-routes')

router.use('/user-routes', userRoutes);
router.use('/show-routes', showRoutes);

module.exports = router;