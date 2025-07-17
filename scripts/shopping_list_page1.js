// Group recipes by base liquor
function groupByLiquor(recipes) {
    const liquorMap = {};
  
    Object.entries(recipes).forEach(([name, data]) => {
      const baseLiquor = data.ingredients[0]; // crude but works if first ingredient is liquor
      if (!liquorMap[baseLiquor]) liquorMap[baseLiquor] = [];
      liquorMap[baseLiquor].push({ name, ingredients: data.ingredients });
    });
  
    return liquorMap;
  }
  
  // Render collapsible sections
  function renderShoppingList(recipes) {
    const container = document.getElementById('shopping-list-container');
    const grouped = groupByLiquor(recipes);
  
    Object.entries(grouped).forEach(([liquor, drinks]) => {
      const section = document.createElement('section');
      section.className = 'liquor-section';
  
      const button = document.createElement('button');
      button.className = 'collapsible';
      button.textContent = liquor;
  
      const content = document.createElement('div');
      content.className = 'content hidden';
  
      drinks.forEach(drink => {
        const label = document.createElement('label');
        label.innerHTML = `
          <input type="checkbox" value="${drink.name}"> 
          <strong>${drink.name}</strong>: ${drink.ingredients.join(', ')}
        `;
        content.appendChild(label);
        content.appendChild(document.createElement('br'));
      });
  
      section.appendChild(button);
      section.appendChild(content);
      container.appendChild(section);
    });
  
    // Add collapsible functionality
    document.querySelectorAll('.collapsible').forEach(button => {
      button.addEventListener('click', () => {
        button.nextElementSibling.classList.toggle('hidden');
      });
    });
  }
  
  // Save selected recipes to localStorage and redirect
  document.getElementById('create-list-btn').addEventListener('click', () => {
    const selected = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
      selected.push(cb.value);
    });
  
    localStorage.setItem('selectedRecipes', JSON.stringify(selected));
    window.location.href = 'shopping_list_page2.html';
  });
  
  // Wait until DOM is ready then render list
  document.addEventListener('DOMContentLoaded', () => {
    renderShoppingList(drinkRecipes);
  });
  