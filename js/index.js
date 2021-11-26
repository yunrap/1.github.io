const colorButton = document.querySelector("#colorButton");

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

colorButton.addEventListener("click", colorChange);

function colorChange() {
  const oneChosenColor = colors[Math.floor(Math.random() * colors.length)];
  const secChosenColor = colors[Math.floor(Math.random() * colors.length)];

  console.log(oneChosenColor);
  console.log(secChosenColor);

  const bodySelect = document.querySelector("body");

  //bodySelect.linear -gradient = `linear-gradient(${oneChosenColor}, ${secChosenColor})`;

bodySelect.style = `background: linear-gradient(${oneChosenColor}, ${secChosenColor})`;


}
