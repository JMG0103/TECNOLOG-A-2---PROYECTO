//SliderChange Web design 1.1

const cardContent = document.getElementById("card");
const btnRigth = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");

// Slider - Container
btnRigth.addEventListener("click", () => {
  cardContent.style.transform = "translate(-50%)";
});

btnLeft.addEventListener("click", () => {
  cardContent.style.transform = "translate(0%)";
})