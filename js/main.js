//Функция возвращает случайное целое число из переданного диапазона включительно:

function returnsRandomNumber (min, max) {

  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  if (min >= max) {
    const temp = min;
    min = max;
    max = temp;
  }
  if (min >= 0 && max >= 0) {
    return randomNumber;
  } else {
    return NaN;
  }
}

console.log(returnsRandomNumber (20, -10) );

//Функция для проверки максимальной длины строки:

function checksLengthString (stringToTest, maximumLengthString) {

  if (stringToTest.length <= maximumLengthString) {
    return true;
  } else {
    return false;
  }
}

console.log(checksLengthString('Это короткая строка', 20) );
console.log(checksLengthString('Эта строка длиннее первой', 20) );
