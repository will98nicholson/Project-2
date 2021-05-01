const router = require('express').Router();
//const { Project } = require('../models');

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(err).json(err);
  }
});

router.get('/login', (req, res) => {
   if (req.session.loggedIn) {
     res.redirect('/');
     return;
   }

  res.render('login');
});

module.exports = router;