let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let img = new Image();

document.getElementById("upload").addEventListener("change", function (e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function () {
        img.src = reader.result;
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            applyFilters();
        };
    };
    reader.readAsDataURL(file);
});

function applyFilters() {
    const brightness = document.getElementById("brightness").value;
    const blur = document.getElementById("blur").value;
    const sharp = document.getElementById("sharpness").value;
    const grey = document.getElementById("gray").value;
    const blue = document.getElementById("blue").value;

    // Blue Effect using hue-rotate
    let blueFilter = `hue-rotate(${blue}deg)`;

    ctx.filter = `
        brightness(${brightness}%)
        blur(${blur}px)
        contrast(${sharp}%)
        grayscale(${grey}%)
        ${blueFilter}
    `;

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

document.querySelectorAll("input[type=range]").forEach(slider => {
    slider.addEventListener("input", applyFilters);
});

document.getElementById("downloadBtn").addEventListener("click", function () {
    let link = document.createElement("a");
    link.download = "p3-edited-image.png";
    link.href = canvas.toDataURL();
    link.click();
});
