let data = document.getElementById(fetchData);
// document.addEventListener();
const button = document.getElementById(fetchData);

function bgColor() {
  const rndColor = `rgb(${random(255)},${random(255)},${random(255)})`;
  e.target.style.backgroundColor = rndColor;
  console.log("change bg color");
}
// button.addEventListener("click", bgColor(e));

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = () => {
  const rndCol = `rgb(${random(255)}, ${random(255)},
${random(255)})`;

  document.body.style.backgroundColor = rndCol;
};
