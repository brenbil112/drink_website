document.addEventListener("DOMContentLoaded", () => {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");

      const content = button.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});

// Display selected liquors from query string
const params = new URLSearchParams(window.location.search);
const selectedLiquors = params.get("liquor"); // e.g., "Gin,Vodka"

if (selectedLiquors) {
  const list = document.getElementById('selectedLiquors');
  list.textContent = selectedLiquors;
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

const toggleAllBtn = document.getElementById("toggleAllBtn");
const collapsibleButtons = document.querySelectorAll(".collapsible");

let allExpanded = false;

toggleAllBtn.addEventListener("click", () => {
  allExpanded = !allExpanded;

  collapsibleButtons.forEach(btn => {
    const content = btn.nextElementSibling;

    if (allExpanded) {
      content.style.display = "block";
      btn.classList.add("active");
      toggleAllBtn.textContent = "Collapse All";
    } else {
      content.style.display = "none";
      btn.classList.remove("active");
      toggleAllBtn.textContent = "Expand All";
    }
  });
});
