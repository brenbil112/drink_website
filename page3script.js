const params = new URLSearchParams(window.location.search);

const liquors = params.get("liquor");
const ingredients = params.get("ingredient");

if (liquors) {
  liquors.split(",").forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    document.getElementById("liquorList").appendChild(li);
  });
}

if (ingredients) {
  ingredients.split(",").forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    document.getElementById("ingredientList").appendChild(li);
  });
}
