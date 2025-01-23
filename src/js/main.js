var boxChangeColor = document.querySelector(".box.change-color");

boxChangeColor.addEventListener("click", function () {
  boxChangeColor.classList.add("is-active");
});

var boxToggleColor = document.querySelector(".box.toggle-color");

boxToggleColor.addEventListener("click", function () {
  boxToggleColor.classList.toggle("is-active");
});

var boxClick = document.querySelector(".box.trigger");
var boxNone = document.querySelector(".box.target");

function ToggleChange() {
  boxNone.classList.toggle("is-active");
}
boxClick.addEventListener("click", ToggleChange);

var boxTriggerAll = document.querySelector(".box.trigget-all");

function ToggleChange() {
  boxNone.classList.toggle("is-active");
}
boxTriggerAll.classList.toggle("click", ToggleChange);
// boxTrigger.addEventListener("click", function () {
//   boxTrigger.classList.remove("is-active");
// });
// boxTarget.addEventListener("click", function () {
//   boxTrigger.classList.remove("is-active");
//   boxTarget.classList.add("is-active");
// });

// var onClick =

// boxChangeColor.addEventListener("click", Changestyle);
