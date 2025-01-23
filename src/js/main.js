var boxChangeColor = document.querySelector(".box.change-color");

boxChangeColor.addEventListener("click", function () {
  boxChangeColor.classList.add("is-active");
});

var boxToggleColor = document.querySelector(".box.toggle-color");

boxToggleColor.addEventListener("click", function () {
  boxToggleColor.classList.toggle("is-active");
});

var boxTrigger = document.querySelector(".box.trigger");

boxTrigger.addEventListener("click", function () {
  boxTrigger.classList.remove("is-active");
});

var boxTarget = document.querySelector(".box.target");

// var onClick =

// boxChangeColor.addEventListener("click", Changestyle);
