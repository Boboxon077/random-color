const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const angle = document.getElementById("angle");
const h1 = document.querySelector("h1");

function setGradient() {
  const body = document.querySelector("body");
  body.style.background = `linear-gradient(${angle.value}deg, ${color1.value}, ${color2.value})`;
  h1.textContent = `${body.style.background};`;
}

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.style.border = "none";
  input.style.padding = "10px";
  input.style.borderRadius = "5px";
  input.style.backgroundColor = "#FFFFFF";
  input.addEventListener("input", setGradient);
});

