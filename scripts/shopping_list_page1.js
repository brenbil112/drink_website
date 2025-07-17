document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('shoppingListContainer');
    const liquorGroups = {};
  
    // Step 1: group recipes by first liquor
    for (const [name, recipe] of Object.entries(drinkRecipes)) {
      const liquor = recipe.ingredients[0] || 'Other';
      if (!liquorGroups[liquor]) {
        liquorGroups[liquor] = [];
      }
      liquorGroups[liquor].push({ name, ingredients: recipe.ingredients });
    }
  
    // Step 2: create collapsible sections
    Object.entries(liquorGroups).forEach(([liquor, recipes]) => {
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
  
    // Step 3: handle "Create Shopping List" button
    document.getElementById('generateListBtn').addEventListener('click', () => {
      const checked = document.querySelectorAll('.drink-entry input[type="checkbox"]:checked');
      const selected = Array.from(checked).map(cb => cb.value);
  
      if (selected.length === 0) {
        alert('Please select at least one recipe.');
        return;
      }
  
      localStorage.setItem('selectedRecipes', JSON.stringify(selected));
      window.location.href = 'shopping_results.html';
    });
  });
  