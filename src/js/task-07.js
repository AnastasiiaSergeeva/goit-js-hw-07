// Напиши скрипт, который реагирует на изменение значения `input#font-size-control`
// (событие input) и изменяет инлайн-стиль `span#text` обновляя свойство
// `font-size`. В результате при перетаскивании ползунка будет меняться размер
// текста.
const inputRef = document.querySelector(`#font-size-control`);
console.log(inputRef);
const textRef = document.querySelector(`#text`);
console.log(textRef);
inputRef.addEventListener('input', (evt) => {
    textRef.style.fontSize = inputRef.value + "px";
});

