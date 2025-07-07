document.getElementById("nextPageBtn").addEventListener("click", function () {
    const selectedLiquors = Array.from(document.querySelectorAll('input[name="liquor"]:checked'))
      .map(cb => cb.value);

    const params = new URLSearchParams();
    params.set("liquor", selectedLiquors.join(","));

    window.location.href = "page2.html?" + params.toString();
  });