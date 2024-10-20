// creating element here and then send it to html

const images = ["0.JPG", "1.JPG", "2.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

// const bgImage = document.createElement("img") //element name = img

// bgImage.src = `img/${chosenImage}`; //src name
// console.log(bgImage);

// document.body.appendChild(bgImage);

const bgImage = document.createElement("style");

bgImage.innerText = `body {background-image: url(img/${chosenImage}); background-position: center; background-repeat: no-repeat; background-size: cover; }`;

document.head.appendChild(bgImage);
console.log(bgImage);
