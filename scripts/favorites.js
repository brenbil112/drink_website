document.getElementById("submitCodeBtn").addEventListener("click", function () {
    const code = document.getElementById("codeInput").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (code === "1102") {
      // Redirect to your target URL
      window.location.href = "https://highballer.app/page3.html?liquor=Bourbon%2CRye%2CVodka%2CGin%2CTequila%2CRum%2CCacha%C3%A7a&ingredient=Red+Wine%2CEspresso%2CChai+Tea%2COrange%2CSoda+Water%2CTonic+Water%2CBitters%2CSimple+Syrup%2COrange%2CEgg+White%2CHoney+Syrup%2CHoney%2CMilk%2CSugar%2CChai+Tea";
    } else {
      // Show error message
      errorMsg.style.display = "block";
    }
  });
