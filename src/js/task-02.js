const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsRed = document.querySelector('#ingredients');

const itemsRed = ingredients.map((ingredient) => {
  const itemLi = document.createElement('li');
  itemLi.textContent = ingredient;
  itemLi.classList.add('item');
  return itemLi;
});

ingredientsRed.append(...itemsRed);

