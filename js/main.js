//Функция возвращает случайное целое число из переданного диапазона включительно:

function returnsRandomNumber (min, max) {

  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  return ( (min >= 0 && min < max) && (!isNaN(min) && !isNaN(max) ) ) ? randomNumber : NaN;

}

console.log(returnsRandomNumber (10, 50) );

//Функция для проверки максимальной длины строки:

function checksLengthString (stringToTest, maximumLengthString) {

  return (stringToTest.length <= maximumLengthString);

}

console.log(checksLengthString('Это короткая строка', 20) );
console.log(checksLengthString('Эта строка длиннее первой', 20) );
