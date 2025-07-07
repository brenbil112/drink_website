const params = new URLSearchParams(window.location.search);
const selectedLiquors = params.get("liquor")?.split(",") || [];
const selectedIngredients = params.get("ingredient")?.split(",") || [];

const userItems = [...selectedLiquors, ...selectedIngredients];

const liquorList = document.getElementById("liquorList");
selectedLiquors.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  liquorList.appendChild(li);
});

const ingredientList = document.getElementById("ingredientList");
selectedIngredients.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  ingredientList.appendChild(li);
});

const matchList = document.getElementById("matchingRecipes");

Object.entries(drinkRecipes).forEach(([drinkName, recipe]) => {
    const matches = recipe.ingredients.every(item =>
      userItems.includes(item)
    );
  
    if (matches) {
      // Create clickable drink name
      const li = document.createElement("li");
  
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = drinkName;
      link.style.cursor = "pointer";
  
      // Hidden paragraph with instructions
      const instructions = document.createElement("p");
      instructions.textContent = recipe.instructions;
      instructions.style.display = "none"; // hidden initially
  
      // Toggle on click
      link.addEventListener("click", (e) => {
        e.preventDefault();
        instructions.style.display =
          instructions.style.display === "none" ? "block" : "none";
      });
  
      li.appendChild(link);
      li.appendChild(instructions);
      matchList.appendChild(li);
    }
});
  
