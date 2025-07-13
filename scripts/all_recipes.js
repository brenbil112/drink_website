document.addEventListener("DOMContentLoaded", () => {
    const recipeList = document.getElementById("allRecipes");
  
    Object.keys(drinkRecipes).forEach(recipeName => {
      const recipeItem = document.createElement("li");
  
      const button = document.createElement("button");
      button.className = "recipe-btn";
      button.textContent = recipeName;
  
      const detailsDiv = document.createElement("div");
      detailsDiv.className = "recipe-details";
      detailsDiv.style.display = "none";
  
      const recipe = drinkRecipes[recipeName];
  
      detailsDiv.innerHTML = `
    <p><strong>Ingredients:</strong> ${Array.isArray(recipe.ingredients) ? recipe.ingredients.join(", ") : "N/A"}</p>
    <p><strong>Instructions:</strong> ${recipe.instructions || "N/A"}</p>
    <p><strong>Garnishes:</strong> ${Array.isArray(recipe.garnishes) ? recipe.garnishes.join(", ") : "N/A"}</p>
    <p><strong>Glass:</strong> ${recipe.glass || "N/A"}</p>
    `;

  
      button.addEventListener("click", () => {
        detailsDiv.style.display =
          detailsDiv.style.display === "none" ? "block" : "none";
      });
  
      recipeItem.appendChild(button);
      recipeItem.appendChild(detailsDiv);
      recipeList.appendChild(recipeItem);
    });
  });
  