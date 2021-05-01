const { Shows } = require('../models');

const showData = [
    {
        name: 'The Office',
        descripton: 'Steve Carell stars in The Office, a fresh and funny mockumentary-style glimpse into the daily interactions of the eccentric workers at the Dunder Mifflin paper supply company. Based on the smash-hit British series of the same name and adapted for American Television by Greg Daniels, this fast-paced comedy parodies contemporary American water-cooler culture. Earnest but clueless regional manager Michael Scott believes himself to be an exceptional boss and mentor, but actually receives more eye-rolls than respect from his oddball staff.'
    },
    {
        name: 'How I Met Your Mother',
        descripton: "How I Met Your Mother is a comedy about Ted and how he fell in love. It all starts when Teds best friend, Marshall drops the bombshell that hes going to propose to his long-time girlfriend, Lilya kindergarten teacher. At that moment, Ted realizes that he had better get a move on if he too hopes to find true love. Helping him in his quest is Barney a friend with endless, sometimes outrageous opinions, a penchant for suits and a foolproof way to meet women. When Ted meets Robin hes sure its love at first sight, but destiny may have something else in store."
    }
]

//this is where script proabbly needs to come in to pull the shows from the API and add it to ours 

const seedShows = () => Shows.bulkCreate(showData);
module.exports = seedShows;