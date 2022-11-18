const inputEl = document.querySelector("#validation-input");
// const length = document.querySelector('[data-length="6"]');

inputEl.addEventListener("blur", (event) => {
  const maxLength = Number(inputEl.dataset.length);

  if (event.currentTarget.value.length !== maxLength) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
});
