const router = require('express').Router();
const { User } = require('./../models/');

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(err).json(err);
  }
});

router.get('/login', (req, res) => {

  if (req.session.loggedIn) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});
router.get('/profile', async (req, res) => {
  try {
    // const profiles = await User.findAll({});
    // console.log(profiles)

    res.render('profile');
  } catch (err) {
    console.log(err);
    res.status(err).json(err);
  }
});
router.get('/homepage', async (req, res) => {
  try {
    // const posts = await Post.findAll({});
    // console.log(posts)
    // console.log(posts);
    res.render('homepage');
  } catch (err) {
    console.log(err);
    res.status(err).json(err);
  }
});
module.exports = router;