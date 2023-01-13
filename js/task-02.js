const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElem = document.getElementById("ingredients");
console.log(ulElem);

for ( const ingredient of ingredients) {
    const liElem = document.createElement("li");
    liElem.classList.add('item')
    liElem.textContent = ingredient;
    ulElem.appendChild(liElem);
}
