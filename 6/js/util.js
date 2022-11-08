//Функция возвращает случайное целое число из переданного диапазона включительно:

function returnsRandomNumber (min, max) {

  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  return ( (min >= 0 && min < max) && (!isNaN(min) && !isNaN(max) ) ) ? randomNumber : NaN;

}

//Функция вовращает случайный элемент массива:

function returnsRandomElementArray(element) {

  return element[returnsRandomNumber(0, element.length - 1) ];

}


// function isEscapeKey(evt) {

//   return evt.key === 'Escape';

// }

export {returnsRandomElementArray, returnsRandomNumber};
