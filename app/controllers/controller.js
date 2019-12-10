var superHerosList = require("../models/superHeros.js");

// Create and Save a super hero
exports.create = (req, res) => {
  var superHero = {
    name: req.body.name,
    superName: req.body.superName,
    profession: req.body.profession,
    age: req.body.age,
    canFly: req.body.canFly
  };

  superHerosList.superHeros.push(superHero);
  res.status(200).send({
    message: "Super hero added to team",
    superHeros: [...superHerosList.superHeros]
  });
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
      if (superHeros[hero].name == name) {
        return res.status(200).send({
          message: "You are seeing super hero's secret data",
          superHeros: superHeros[hero]
        });
      }
    }
  }

  return res.status(404).send({ message: name + " is not super hero" });
};

// Update a super heros by name
exports.update = (req, res) => {
  var name = req.params.name;
  var superHeros = superHerosList.superHeros;
  let existringSuperHero = {};

  for (const hero in superHeros) {
    if (superHeros.hasOwnProperty(hero)) {
      if (superHeros[hero].name == name) {
        existringSuperHero = superHeros[hero];
      }
    }
  }

  if (existringSuperHero.name == undefined) {
    return res
      .status(404)
      .send({ message: name + " is not super hero, so can't update" });
  }

  var superHeroUpdated = {
    name: req.body.name,
    superName: req.body.superName,
    profession: req.body.profession,
    age: req.body.age,
    canFly: req.body.canFly
  };

  var superHeros = superHerosList.superHeros;
  superHeros.pop(existringSuperHero);
  superHeros.push(superHeroUpdated);

  res.status(200).send({
    message: "Super hero's data updated secretly",
    superHero: superHeroUpdated
  });
};

// Delete a super hero by name
exports.delete = (req, res) => {
  var name = req.params.name;
  var superHeros = superHerosList.superHeros;
  let existringSuperHeros = [];

  for (const hero in superHeros) {
    if (superHeros.hasOwnProperty(hero)) {
      if (superHeros[hero].name != name) {
        existringSuperHeros.push(superHeros[hero]);
      }
    }
  }

  res.status(200).send({
    message: "Super hero's is no longer in team",
    superHeros: [...existringSuperHeros]
  });
};
