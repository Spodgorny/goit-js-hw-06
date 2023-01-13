// const categories = document.getElementById("categories");

// const ulElem = document.createElement("ul");

// for ( const categori of categories) {
//     const liElem = document.createElement("li");
//     liElem.textContent = categori;
//     ulElem.appendChild(liElem);
// }

// categories.appendChild(ulElem);

const arrayOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${arrayOfCategories.length}`);

const categoriesArray = [...arrayOfCategories]
.map(
    categories => `Category: ${categories.children[0].textContent}
    Element: ${categories.children[1].children.length}`
)
.join('\n');
console.log(categoriesArray);