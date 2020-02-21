
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions_ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      const stuff = [
        {
          quantity: 3,
          measurement_type: 'single', 
          instruction_id: 1, 
          ingredient_id: 1
        },
        {
          quantity: 5,
          measurement_type: 'cups', 
          instruction_id: 2, 
          ingredient_id: 2
        },
        {
          quantity: 1,
          measurement_type: 'single', 
          instruction_id: 2, 
          ingredient_id: 1
        },
        {
          quantity: 5,
          measurement_type: 'cups', 
          instruction_id: 1, 
          ingredient_id: 2
        }       
      ]
      return knex('instructions_ingredients').insert(stuff);
    })
};
