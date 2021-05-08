const router = require('express').Router();
const { User } = require('./../models/');
const { Shows } = require ('../models');

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
    const users = { ...user.dataValues };
    console.log(users);
    const showData = await Shows.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } }).catch((err) => { res.json(err);});
    const shows = showData.map((show) => show.get({ plain: true }));
    console.log(shows);
    res.render('profile', {users, shows});
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