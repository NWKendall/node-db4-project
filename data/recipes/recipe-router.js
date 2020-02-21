const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();


router.get('/', (req, res) => {
  Recipes
  .getRecipes()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Recipes!' });
  });
})


router.get('/:id', (req, res) => {
  Recipes
  .getRecipesId(req.params.id)
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Recipes!' });
  });

})


router.get('/:id/instructions', (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
  .then(instructions => {
    if (instructions.length) {
      res.json(instructions);
    } else {
      res.status(404).json({ message: 'Could not find steps for given scheme' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get steps' });
  });
});


router.get('/:id/shoppinglist', (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
  .then(instructions => {
    if (instructions.length) {
      res.json(instructions);
    } else {
      res.status(404).json({ message: 'Could not find steps for given scheme' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get steps' });
  });
});


// POST REQUESTS
router.post('/', (req, res) => {
  const recipe = req.body;

  Recipes.addRecipe(recipe)
  .then(scheme => {
    res.status(201).json(recipe);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new Recipe' });
  });
});


router.post('/:id/instructions', (req, res) => {
  const instructionData = req.body;
  const { id } = req.params; 

  Recipes.getRecipesId(id)
  .then(scheme => {
    if (scheme) {
      Recipes.addInstruction(instructionData, id)
      .then(step => {
        res.status(201).json(step);
      })
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new step' });
  });
});




module.exports = router