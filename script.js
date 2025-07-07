document.getElementById("itemForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const selected = Array.from(document.querySelectorAll('input[name="item"]:checked'))
        .map(el => el.value);
    
    const params = new URLSearchParams();
    params.set("selected", selected.join(","));
    window.location.href = "page2.html?" + params.toString();
})