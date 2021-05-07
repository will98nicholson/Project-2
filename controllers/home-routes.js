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
    const user = await User.findByPk(req.session.user_id, { attributes: { exclude: ['password'] } });
    // console.log(profiles)
    // console.log(user);
    const users = { ...user.dataValues };
    console.log(users);
    res.render('profile', users);

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