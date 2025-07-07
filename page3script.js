// Step 1: Parse the query string
const params = new URLSearchParams(window.location.search);
const selectedLiquors = params.get("liquor")?.split(",") || [];
const selectedIngredients = params.get("ingredient")?.split(",") || [];

// Combine all available user items
const userItems = [...selectedLiquors, ...selectedIngredients];

const liquorList = document.getElementById("liquorList");
selectedLiquors.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  liquorList.appendChild(li);
});

// Step 4: Display selected ingredients
const ingredientList = document.getElementById("ingredientList");
selectedIngredients.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  ingredientList.appendChild(li);
});

// Step 5: Find and display matching recipes
const matchList = document.getElementById("matchingRecipes");

Object.entries(drinkRecipes).forEach(([drinkName, requiredItems]) => {
  const matches = requiredItems.every(item =>
    userItems.includes(item)
  );

  if (matches) {
    const li = document.createElement("li");
    li.textContent = drinkName;
    matchList.appendChild(li);
  }
});
