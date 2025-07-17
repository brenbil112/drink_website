document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('shoppingListContainer');
  
    // Predefined liquor categories
    const liquorCategories = {
      Bourbon: [],
      Gin: [],
      Rum: [],
      Rye: [],
      Tequila: [],
      Vodka: [],
      "All Others": []
    };
  
    // Step 1: Group recipes by first liquor
    for (const [name, recipe] of Object.entries(drinkRecipes)) {
      const firstIngredient = (recipe.ingredients[0] || "").toLowerCase();
  
      let matchedCategory = "All Others";
      if (firstIngredient.includes("bourbon")) matchedCategory = "Bourbon";
      else if (firstIngredient.includes("gin")) matchedCategory = "Gin";
      else if (firstIngredient.includes("rum")) matchedCategory = "Rum";
      else if (firstIngredient.includes("rye")) matchedCategory = "Rye";
      else if (firstIngredient.includes("tequila")) matchedCategory = "Tequila";
      else if (firstIngredient.includes("vodka")) matchedCategory = "Vodka";
  
      liquorCategories[matchedCategory].push({ name, ingredients: recipe.ingredients });
    }
  
    // Step 2: Create collapsible sections
    Object.entries(liquorCategories).forEach(([liquor, recipes]) => {
      if (recipes.length === 0) return; // Skip empty sections
  
      const button = document.createElement('button');
      button.className = 'shopping-collapsible';
      button.textContent = liquor;
  
      const section = document.createElement('div');
      section.className = 'shopping-section';
  
      recipes.forEach(({ name, ingredients }) => {
        const row = document.createElement('div');
        row.className = 'drink-entry';
  
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = name;
  
        const label = document.createElement('label');
        label.innerHTML = `<strong>${name}</strong>: ${ingredients.join(', ')}`;
  
        row.appendChild(checkbox);
        row.appendChild(label);
        section.appendChild(row);
      });
  
      button.addEventListener('click', () => {
        section.classList.toggle('open');
      });
  
      container.appendChild(button);
      container.appendChild(section);
    });
  
    // Step 3: Handle "Create Shopping List" button
    document.getElementById('generateListBtn').addEventListener('click', () => {
      const checked = document.querySelectorAll('.drink-entry input[type="checkbox"]:checked');
      const selected = Array.from(checked).map(cb => cb.value);
  
      if (selected.length === 0) {
        alert('Please select at least one recipe.');
        return;
      }
  
      localStorage.setItem('selectedRecipes', JSON.stringify(selected));
      window.location.href = 'shopping_list_page2.html';
    });
  });
  