const images = ["1.jpg", "2.jpeg", "3.jpeg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bodySelect = document.querySelector("body");
bodySelect.style = `background-image: url("img/${chosenImage}")`;