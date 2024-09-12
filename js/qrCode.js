function generateQRCode() {
  // Get the user input
  var input = document.getElementById("qrInput").value;

  if (input.trim() === "") {
    alert("Please enter a value to generate a QR code.");
    return;
  }

  // Clear previous QR code
  document.getElementById("qrcode").innerHTML = "";

  // Generate the QR code
  new QRCode(document.getElementById("qrcode"), {
    text: input,
    width: 128, // QR code width
    height: 128, // QR code height
  });
}
