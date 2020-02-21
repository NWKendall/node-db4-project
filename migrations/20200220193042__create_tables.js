
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();
    tbl.string('name', 255)
      .notNullable()
      .unique();
  })
  .createTable('instructions', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable()
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  })
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable()
  })
  .createTable('instructions_ingredients', tbl => {
    tbl.primary(['ingredient_id', 'instruction_id'])
    tbl.float('quantity').notNullable();
    tbl.string('measurement_type', 255).notNullable()

    tbl.integer('instruction_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('instructions')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

    tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  })
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
