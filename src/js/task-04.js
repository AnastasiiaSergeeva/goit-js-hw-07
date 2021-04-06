// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на `1`.

// - Создай переменную `counterValue` в которой будет хранится текущее значение
//   счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
//   счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
const counterValRef = document.querySelector(`#value`);
console.log(counterValRef);
const btnDecrement = document.querySelector(`[data-action="decrement"]`);
const btnIncrement = document.querySelector(`[data-action="increment"]`);
let counterValue = 0;

function increment(){
    console.log(counterValRef.textContent = counterValue += 1);
}
function decrement(){
    console.log(counterValRef.textContent = counterValue -= 1);
}

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);
console.log(btnIncrement);