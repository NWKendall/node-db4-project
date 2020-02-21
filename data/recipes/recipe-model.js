const db = require('../db-config');

module.exports = {
  findRecipes
}

function findRecipes() {
  return db('recipes')
}
