
var superHerosList = require('../models/superHeros.js');

// Create and Save a super hero
exports.create = (req, res) => {
    
};

// Retrieve and return all super heros
exports.findAll = (req, res) => {
    res.status(200).send([...superHerosList.superHeros]);
};

// Find a single super hero by name
exports.findOne = (req, res) => {
    var name = req.params.name;
    var superHeros = superHerosList.superHeros;

    for (const hero in superHeros) {
        if (superHeros.hasOwnProperty(hero)) {
           if(superHeros[hero].name == name) {
                return res.status(200).send(superHeros[hero]);
           }            
        }
    }


    return res.status(404).send({ "message": name + " is not super hero" });
};

// Update a super heros by name
exports.update = (req, res) => {
    // Validate Request
    
};

// Delete a super hero by name
exports.delete = (req, res) => {
    
};
