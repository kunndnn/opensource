// Function to generate barcode based on user input
function generateBarcode() {
  var inputValue = document.getElementById("barcodeInput").value;

  // Check if input is not empty
  if (inputValue) {
    JsBarcode("#barcode", inputValue, {
      format: "CODE128", // Barcode type
      lineColor: "#000", // Line color
      width: 2, // Width of each bar
      height: 100, // Height of the barcode
      displayValue: true, // Show the input value below the barcode
    });
  } else {
    alert("Please enter a value to generate the barcode.");
  }
}
