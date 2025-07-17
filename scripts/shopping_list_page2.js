document.addEventListener('DOMContentLoaded', () => {
    const ingredientList = document.getElementById('ingredient-list');
    const selectedRecipes = JSON.parse(localStorage.getItem('selectedRecipes')) || [];
  
    if (selectedRecipes.length === 0) {
      ingredientList.innerHTML = '<li>No recipes selected.</li>';
      return;
    }
  
    const allIngredients = new Set();
  
    selectedRecipes.forEach(recipeName => {
      const recipe = drinkRecipes[recipeName];
      if (recipe && recipe.ingredients) {
        recipe.ingredients.forEach(ingredient => {
          allIngredients.add(ingredient);
        });
      }
    });
  
    // Display ingredients in alphabetical order
    [...allIngredients].sort().forEach(ingredient => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      ingredientList.appendChild(li);
    });
  });
  