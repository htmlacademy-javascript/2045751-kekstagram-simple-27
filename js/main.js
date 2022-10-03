//Функция возвращает случайное целое число из переданного диапазона включительно:

function returnsRandomNumber (min, max) {

  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  if (min >= max) {
    return NaN;
  }

  if ( (typeof min === 'number' && typeof max === 'number') && (min >= 0 && max >= 0) ) {
    return randomNumber;
  }else {
    return NaN;
  }
}

console.log(returnsRandomNumber (60, 80) );

//Функция для проверки максимальной длины строки:

function checksLengthString (stringToTest, maximumLengthString) {

  return (stringToTest.length <= maximumLengthString);

}

console.log(checksLengthString('Это короткая строка', 20) );
console.log(checksLengthString('Эта строка длиннее первой', 20) );
