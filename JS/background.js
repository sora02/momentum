const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const choosenimg = images[Math.floor(Math.random() * images.length)];

const bgimages = document.createElement("img");
bgimages.src = `Picture/${choosenimg}`;
document.body.appendChild(bgimages);