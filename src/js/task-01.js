const listItems = document.querySelectorAll(`#categories li.item`);
const count = listItems.length;
console.log(`Number of categories: ${count}`);

listItems.forEach((item) => {
  console.log(`Category: ${item.querySelectorAll(`h2`)[0].textContent}`);
  console.log(`Elements: ${item.querySelectorAll(`li`).length}`);
});
