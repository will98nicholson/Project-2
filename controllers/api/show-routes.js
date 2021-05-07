const router = require('express').Router();
const { Shows } = require('../../models');

router.post('/', async (req, res) => {
  try { 
    const showData = await Shows.create({
    name: req.body.show_name,
  });
  res.status(200).json(showData)
} catch (err) {
  res.status(400).json("not working");
}
});
router.get('/profile', async (req, res) => {
  const showData = await Shows.findAll().catch((err) => { 
      res.json(err);
    });
      const shows = showData.map((show) => show.get({ plain: true }));
      console.log(shows);
      res.render('all', { shows });
    });

module.exports = router;