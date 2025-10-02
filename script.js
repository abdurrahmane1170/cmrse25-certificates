document.getElementById("certForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const code = document.getElementById("code").value.trim();

  fetch("codes.json")
    .then(response => response.json())
    .then(codes => {
      if (codes[code]) {
        const pdfFile = codes[code];
        document.getElementById("result").innerHTML = 
          `<a href="pdfs/${pdfFile}" download>Download your certificate</a>`;
      } else {
        document.getElementById("result").textContent = "❌ Invalid code. Please try again.";
      }
    })
    .catch(error => {
      document.getElementById("result").textContent = "Error loading codes.";
      console.error(error);
    });
});
