
module.exports = (app) => {
    const superHeroController = require('../controllers/controller.js');

    // Create a new super hero
    app.post('/super-heros', superHeroController.create);

    // Retrieve all super heros
    app.get('/super-heros', superHeroController.findAll);

    // Retrieve a single super hero
    app.get('/super-heros/:name', superHeroController.findOne);

    // Update a existing super hero
    app.put('/super-heros/:name', superHeroController.update);

    // Delete a super hero
    app.delete('/super-heros/:name', superHeroController.delete);
}
