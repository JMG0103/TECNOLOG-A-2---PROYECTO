const cardContent = document.getElementById("card");
const btnRigth = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");

// Slider - Container
btnRigth.addEventListener("click", () => {
  cardContent.style.transform = "translate(-50%)";
});

btnLeft.addEventListener("click", () => {
  cardContent.style.transform = "translate(0%)";
});

//Header - Scroll
window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var line = document.getElementsByClassName("select-item");
  header.classList.toggle("active", window.scrollY > 0);
});


//DropDown - Option
function show(value) {
  document.querySelector(".text-box").value = value;
}

let dropdown = document.querySelector(".dropdown");
dropdown.onclick = function () {
  dropdown.classList.toggle("active");
};

function show2(value) {
  document.querySelector(".text-box2").value = value;
}
let dropdown2 = document.querySelector(".dropdown2");
dropdown2.onclick = function () {
  dropdown2.classList.toggle("active");
};

function show3(value) {
  document.querySelector(".text-box3").value = value;
}
let dropdown3 = document.querySelector(".dropdown3");
dropdown3.onclick = function () {
  dropdown3.classList.toggle("active");
};
