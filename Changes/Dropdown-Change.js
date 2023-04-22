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