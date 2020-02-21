
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      const stepSeed = [
        {id: 1, steps: 'test', recipe_id: 1 },
        {id: 2, steps: 'test', recipe_id: 1 },
        {id: 3, steps: 'test', recipe_id: 2 },
        {id: 4, steps: 'test', recipe_id: 2 }
      ]
      return knex('instructions').insert(stepSeed)
    });
};
