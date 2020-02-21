const db = require('../db-config');

module.exports = {
  getRecipes,
  getRecipesId,
  getInstructions,
  getShoppingList,
  addRecipe,
  addInstruction
}

function getRecipes() {
  return db('recipes')
}


function getRecipesId(id) {
  return db('recipes')
  .where({ id })
  .first()
}

function getInstructions(id) {
  return db('instructions_ingredients as ii')
  .join('instructions as inst', 'ii.instruction_id', 'inst.id')
  .join('ingredients as i', 'ii.ingredient_id', 'i.id')
  .join('recipes as r', 'ii.instruction_id', 'r.id')
  .select(
    'r.name as recipe',
    'inst.steps',
    
  )
  .where('r.id', id )
}

function getShoppingList(id) {
  return db('instructions_ingredients as ii')
  .join('instructions as inst', 'ii.instruction_id', 'inst.id')
  .join('ingredients as i', 'ii.ingredient_id', 'i.id')
  .join('recipes as r', 'ii.instruction_id', 'r.id')
  .select(
    'r.name as recipe',    
    'i.name',
    'ii.quantity',
    'ii.measurement_type'
  )
  .where('r.id', id )
}


function addRecipe(recipe){
  return db('recipes')
  .insert(recipe, 'id')
}

function addInstruction(instruction){
  return db('instructions')
  .insert(instruction, 'id')
}