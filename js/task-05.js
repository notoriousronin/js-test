const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (e) => {
  spanEl.textContent = e.currentTarget.value;
  if (inputEl.value === "") {
    spanEl.textContent = "Anonymous";
  }
});
