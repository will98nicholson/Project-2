const { Shows } = require('../models');

const showData = []

const seedShows = () => Shows.bulkCreate(showData);
module.exports = seedShows;