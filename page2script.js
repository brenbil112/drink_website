const params = new URLSearchParams(window.location.search);
const selectedItems = params.get('liquor');

if(selectedItems) {
    const list = document.getElementById('selectedLiquors');
    selectedItems.split(",").forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    }
    );  
}