const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();


router.get('/', (req, res) => {
  Recipes
  .findRecipes()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Recipes!' });
  });
})


module.exports = router