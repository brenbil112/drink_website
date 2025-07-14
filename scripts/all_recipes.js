const groups = {
    Bourbon: [],
    Gin: [],
    Rum: [],
    Rye: [],
    Tequila: [],
    Vodka: [],
    "All Others": [],
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
    const wrapper = document.createElement("li");
  
    const button = document.createElement("button");
    button.className = "recipe-btn";
    button.textContent = recipe.name;
  
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
      detailsDiv.style.display = detailsDiv.style.display === "none" ? "block" : "none";
    });
  
    wrapper.appendChild(button);
  
    return { wrapper, detailsDiv };
  }
  
  // Create collapsible ingredient groups
  Object.entries(groups).forEach(([groupName, recipes]) => {
    const groupContainer = document.createElement("div");
    groupContainer.className = "ingredient-section";
  
    const collapsibleBtn = document.createElement("button");
    collapsibleBtn.type = "button";
    collapsibleBtn.className = "collapsible";
    collapsibleBtn.textContent = `${groupName} (${recipes.length})`;
  
    const contentDiv = document.createElement("ul");
    contentDiv.className = "content";
    contentDiv.style.display = "none";
  
    const detailsContainer = document.createElement("div");
    detailsContainer.className = "details-container";
  
    recipes.forEach(recipe => {
      const { wrapper, detailsDiv } = createRecipeButton(recipe);
      contentDiv.appendChild(wrapper);
      detailsContainer.appendChild(detailsDiv); // placed after flex row
    });
  
    collapsibleBtn.addEventListener("click", () => {
      const isVisible = contentDiv.style.display === "block";
      contentDiv.style.display = isVisible ? "none" : "block";
      detailsContainer.style.display = isVisible ? "none" : "block";
      collapsibleBtn.textContent = isVisible
        ? `${groupName} (${recipes.length})`
        : `${groupName} (-)`;
    });
  
    groupContainer.appendChild(collapsibleBtn);
    groupContainer.appendChild(contentDiv);
    groupContainer.appendChild(detailsContainer);
    recipeGroupsContainer.appendChild(groupContainer);
  });
  