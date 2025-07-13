document.getElementById("nextPageBtn").addEventListener("click", function (e) {
    e.preventDefault();
  
    const selectedLiquors = Array.from(document.querySelectorAll('input[name="liquor"]:checked'))
      .map(cb => cb.value);
  
    if (selectedLiquors.length === 0) {
      alert("Please select at least one liquor.");
      return;
    }
  
    const params = new URLSearchParams();
    params.set("liquor", selectedLiquors.join(","));
  
    // 🚀 Go to page2.html with the selected liquors
    window.location.href = "page2.html?" + params.toString();
  });