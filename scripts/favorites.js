document.getElementById("submitCodeBtn").addEventListener("click", function () {
    const code = document.getElementById("codeInput").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (code === "00455") {
      // Redirect to your target URL
      window.location.href = "https://highballer.app/page3.html?liquor=Bourbon%2CRye%2CVodka%2CGin%2CTequila%2CRum%2CCacha%C3%A7a&ingredient=Espresso%2CSimple+Syrup%2COrange%2CEgg+White%2CHoney+Syrup%2CHoney%2CMaple+Syrup%2CMilk%2CSugar";
    } else {
      // Show error message
      errorMsg.style.display = "block";
    }
  });
