const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");
valueEl.value = 0;

let counterValue = valueEl;

decrement.addEventListener("click", () => {
  counterValue.value -= 1;
  counterValue.textContent = counterValue.value;
});

increment.addEventListener("click", () => {
  counterValue.value += 1;
  counterValue.textContent = counterValue.value;
});

// const valueMinus = function () {
//   counterValue.value -= 1;
//   counterValue.textContent = counterValue.value;
// };

// const valuePlus = function () {
//   counterValue.value += 1;
//   counterValue.textContent = counterValue.value;
// };
