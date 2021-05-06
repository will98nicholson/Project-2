const { Shows } = require('../models');

const showData = [
]

//this is where script proabbly needs to come in to pull the shows from the API and add it to ours 

const seedShows = () => Shows.bulkCreate(showData);
module.exports = seedShows;