function convertFile() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please choose a file.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    const base64String = e.target.result.split(",")[1]; // Extract base64 string
    const mimeType = file.type || "application/octet-stream"; // Default to binary if empty

    // Dynamically create data URI prefix using mimeType
    const dataUriPrefix = `data:${mimeType};base64,`;

    const fullDataUri = dataUriPrefix + base64String;
    document.getElementById("output").value = fullDataUri;
  };

  // Read the file as Data URL (base64 encoded string)
  reader.readAsDataURL(file);
}
