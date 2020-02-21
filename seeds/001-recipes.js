
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      const recipesSeed = [
        {id: 1, name: 'veg' },
        {id: 2, name: 'fruit' }
      ]
      return knex('recipes').insert(recipesSeed)
    });
      
};




