const rageEl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

rageEl.addEventListener("input", function (e) {
  spanText.style.fontSize = e.target.value + "px";
});
