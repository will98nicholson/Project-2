const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Shows } = require('../../models');

router.post('/', withAuth, async (req, res) => {
  try { 
    const showData = await Shows.create({
    name: req.body.show_name,
  });
  res.status(200).json(showData)
} catch (err) {
  res.status(400).json("not working");
}
});

module.exports = router;