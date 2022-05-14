const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
];
const pageBg = document.querySelector(".content");

const chosenImage = images[Math.floor(Math.random() * images.length)];

pageBg.style.background = `url(./img/${chosenImage})`;

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);

