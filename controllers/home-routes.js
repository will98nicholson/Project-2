const router = require('express').Router();
//const { Project } = require('../models');

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(err).json(err);
  }
});


module.exports = router;