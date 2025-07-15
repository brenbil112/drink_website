const groups = {
    Bourbon: [],
    Gin: [],
    Rum: [],
    Rye: [],
    Tequila: [],
    Vodka: [],
    "All Others": []
  };
  
  const recipeGroupsContainer = document.getElementById("recipeGroupsContainer");
  
  // Group recipes by first ingredient
  Object.entries(drinkRecipes).forEach(([recipeName, recipe]) => {
    const firstIng = recipe.ingredients[0];
    if (groups.hasOwnProperty(firstIng)) {
      groups[firstIng].push({ name: recipeName, data: recipe });
    } else {
      groups["All Others"].push({ name: recipeName, data: recipe });
    }
  });
  
  function createRecipeButton(recipe) {
    const button = document.createElement("button");
    button.className = "recipe-btn";
  
    // Add recipe name and toggle icon
    button.innerHTML = `
      <span class="recipe-name">${recipe.name}</span>
      <span class="toggle-icon">+</span>
    `;
  
    const detailsDiv = document.createElement("div");
    detailsDiv.className = "recipe-details";
    detailsDiv.style.display = "none";
  
    const ingredients = recipe.data.ingredients?.join(", ") || "N/A";
    const instructions = recipe.data.instructions || "N/A";
    const garnishes = recipe.data.garnishes?.join(", ") || "None";
    const glass = recipe.data.glass || "N/A";
  
    detailsDiv.innerHTML = `
      <p><strong>Ingredients:</strong> ${ingredients}</p>
      <p><strong>Instructions:</strong> ${instructions}</p>
      <p><strong>Garnishes:</strong> ${garnishes}</p>
      <p><strong>Glass:</strong> ${glass}</p>
    `;
  
    button.addEventListener("click", () => {
      const isHidden = detailsDiv.style.display === "none";
      detailsDiv.style.display = isHidden ? "block" : "none";
  
      const icon = button.querySelector(".toggle-icon");
      icon.textContent = isHidden ? "−" : "+";
    });
  
    const wrapper = document.createElement("li");
    wrapper.appendChild(button);
    wrapper.appendChild(detailsDiv);
    return wrapper;
  }
  
  // Create collapsible groups
  Object.entries(groups).forEach(([groupName, recipes]) => {
    const groupContainer = document.createElement("div");
    groupContainer.className = "ingredient-section";
  
    const collapsibleBtn = document.createElement("button");
    collapsibleBtn.type = "button";
    collapsibleBtn.className = "collapsible";
    collapsibleBtn.textContent = groupName + ` (${recipes.length})`;
  
    const contentDiv = document.createElement("ul");
    contentDiv.className = "content";
    contentDiv.style.display = "none";
  
    recipes.forEach(recipe => {
      const recipeBtn = createRecipeButton(recipe);
      contentDiv.appendChild(recipeBtn);
    });
  
    collapsibleBtn.addEventListener("click", () => {
      const isVisible = contentDiv.style.display === "block";
      contentDiv.style.display = isVisible ? "none" : "block";
      collapsibleBtn.textContent = groupName + (isVisible ? ` (${recipes.length})` : ` (${recipes.length})`);
    });
  
    groupContainer.appendChild(collapsibleBtn);
    groupContainer.appendChild(contentDiv);
    recipeGroupsContainer.appendChild(groupContainer);
  });
  