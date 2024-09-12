const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const imageUpload = document.getElementById("imageUpload");
let currentImage = null;

// Handle image upload
imageUpload.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        currentImage = img;
        Caman(canvas, img, function () {
          this.render();
        });
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Apply filter using CamanJS
function applyFilter(filter, value) {
  if (currentImage) {
    Caman(canvas, currentImage, function () {
      if (filter === "brightness") {
        this.brightness(value);
      } else if (filter === "contrast") {
        this.contrast(value);
      } else if (filter === "vintage") {
        this.vintage();
      }
      this.render();
    });
  }
}

// Reset the image to its original state
function resetImage() {
  if (currentImage) {
    Caman(canvas, currentImage, function () {
      this.revert();
      this.render();
    });
  }
}

// Download the edited image
function downloadImage() {
  if (currentImage) {
    canvas.toBlob(function (blob) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "edited-image.png";
      a.click();
      URL.revokeObjectURL(url);
    });
  }
}
