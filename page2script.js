const params = new URLSearchParams(window.location.search);
    const selectedItems = params.get('liquor');

    if (selectedItems) {
      const list = document.getElementById('selectedLiquors');
      selectedItems.split(",").forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
      });
    }

// Handle this page's ingredient selections
document.getElementById("submitBtn").addEventListener("click", function () {
    const selectedIngredients = Array.from(document.querySelectorAll('input[name="ingredient"]:checked'))
    .map(el => el.value);

    const allSelections = {
    liquor: selectedItems ? selectedItems.split(",") : [],
    ingredients: selectedIngredients
    };

    alert("Your selections:\n" +
    "Liquors: " + allSelections.liquor.join(", ") + "\n" +
    "Ingredients: " + allSelections.ingredients.join(", "));
    });