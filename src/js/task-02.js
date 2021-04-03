// Напиши скрипт, который для каждого элемента массива `ingredients` создаст
// отдельный `li`, после чего вставит все `li` за одну операцию в список
// `ul.ingredients`. Для создания DOM-узлов используй `document.createElement()`.


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// 1вариант
// const productRef = document.querySelector("#ingredients");
// const productList = ingredients.map(ingredient => {
//     const productItem = document.createElement(`li`);
//     productItem.textContent = ingredient;
//     return productItem;
// })
// productRef.append(...productList);
// console.log(productRef);

// 2 вариант

const productRef = document.querySelector("#ingredients");

const makeProdList = (ingredient) => {
     const productItem = document.createElement(`li`);
     productItem.textContent = ingredient;
     return productItem;
}
const elements = ingredients.map(makeProdList);
productRef.append(...elements);
console.log(elements);
console.log(productRef);