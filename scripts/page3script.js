const params = new URLSearchParams(window.location.search);
const selectedLiquors = params.get("liquor")?.split(",") || [];
const selectedIngredients = params.get("ingredient")?.split(",") || [];

const userItems = [...selectedLiquors, ...selectedIngredients];

const liquorList = document.getElementById("liquorList");
liquorList.textContent = selectedLiquors.join(", ");

const ingredientList = document.getElementById("ingredientList");
ingredientList.textContent = selectedIngredients.join(", ");

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

// Handle Reveal Recipes
document.getElementById("revealButton").addEventListener("click", function () {
  document.getElementById("recipeListContainer").style.display = "block";
});
  
document.getElementById("spinButton").addEventListener("click", () => {
  const recipeList = document.querySelectorAll("#matchingRecipes li");

  if (recipeList.length === 0) {
    alert("No matching recipes found!");
    return;
  }

  const spinButton = document.getElementById("spinButton");
  const wheelContainer = document.getElementById("wheelAnimation");

  spinButton.textContent = "🔁 Spin the Wheel Again!";
  wheelContainer.style.display = "flex";

  // Reset animation by forcing reflow
  const wheel = document.getElementById("rouletteWheel");
  wheel.classList.remove("roulette-wheel");
  void wheel.offsetWidth; // trigger reflow
  wheel.classList.add("roulette-wheel");

  setTimeout(() => {
    wheelContainer.style.display = "none";

    const randomIndex = Math.floor(Math.random() * recipeList.length);
    const selected = recipeList[randomIndex];
    const drinkName = selected.querySelector("a").textContent;
    const instructions = selected.querySelector("p").textContent;
    const recipeObj = drinkRecipes[drinkName];

    
    // Create and show result box
    const resultBox = document.createElement("div");
    resultBox.className = "result-box";
    resultBox.innerHTML = `
      <h2>🎉 Your Drink: 🎉</h2>
      <h3>${drinkName}</h3>
      <p><strong>Instructions:</strong> ${instructions}</p>
      <p><strong>Ingredients:</strong> ${recipeObj.ingredients.join(", ")}</p>
      <p><strong>Garnishes:</strong> ${recipeObj.garnishes?.join(", ") || "None"}</p>
      <p><strong>Glass:</strong> ${recipeObj.glass || "Any"}</p>
    `;

    // Clear previous result if exists
  const existingResult = document.querySelector(".result-box");
  if (existingResult) existingResult.remove();

  // Insert result box below the wheel
  wheelContainer.insertAdjacentElement("afterend", resultBox);

  }, 3000);
});
