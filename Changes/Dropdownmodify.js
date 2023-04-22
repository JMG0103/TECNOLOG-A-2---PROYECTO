function show2(value) {
    document.querySelector(".text-box2").value = value;
  }
  let dropdown2 = document.querySelector(".dropdown2");
  dropdown2.onclick = function () {
    dropdown2.classList.toggle("active");
  };