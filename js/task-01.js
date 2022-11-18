const liEl = document.querySelectorAll(".item");
const list = document.querySelector("#categories");
const allItems = list.children.length;

console.log(`Number of categories: ${allItems}`);

liEl.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);

  const elements = item.querySelectorAll("ul > li");
  console.log("Elements:", elements.length);
});
