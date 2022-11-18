const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const newArr = [];

ingredients.forEach((item) => {
  const newEl = document.createElement("li");

  newEl.classList.add("item");

  newEl.textContent = item;

  newArr.push(newEl);
});

listEl.append(...newArr);
