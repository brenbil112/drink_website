// Display selected liquors from query string
const params = new URLSearchParams(window.location.search);
const selectedLiquors = params.get("liquor"); // e.g., "Gin,Vodka"

if (selectedLiquors) {
  const liquorList = document.getElementById("selectedLiquors");

  selectedLiquors.split(",").forEach(liquor => {
    const li = document.createElement("li");
    li.textContent = liquor;
    liquorList.appendChild(li);
  });
}

// Handle "Submit" button click
document.getElementById("submitBtn").addEventListener("click", function () {
  // Get the ingredients the user selected
  const selectedIngredients = Array.from(document.querySelectorAll('input[name="ingredient"]:checked'))
    .map(cb => cb.value)
    .join(",");

  // Preserve liquor list from previous page
  const liquorsFromQuery = selectedLiquors || "";

  // Create a new URL with both sets of data
  const nextParams = new URLSearchParams();
  nextParams.set("liquor", liquorsFromQuery);
  nextParams.set("ingredient", selectedIngredients);

  // Redirect to page3.html
  window.location.href = "page3.html?" + nextParams.toString();
});
