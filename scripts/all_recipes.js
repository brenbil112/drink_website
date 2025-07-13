document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("recipeListContainer");
    const list = document.getElementById("allRecipes");
  
    for (const [name, recipe] of Object.entries(window.drinkRecipes)) {
      const item = document.createElement("li");
      item.textContent = name;
      item.style.cursor = "pointer";
  
      const details = document.createElement("div");
      details.style.display = "none";
      details.innerHTML = `
        <strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}<br>
        <strong>Instructions:</strong> ${recipe.instructions}<br>
        <strong>Garnishes:</strong> ${recipe.garnishes?.join(", ") || "None"}<br>
        <strong>Glass:</strong> ${recipe.glass || "N/A"}
      `;
  
      item.addEventListener("click", () => {
        details.style.display = details.style.display === "none" ? "block" : "none";
      });
  
      list.appendChild(item);
      list.appendChild(details);
    }
  
    container.style.display = "block";
  });
  