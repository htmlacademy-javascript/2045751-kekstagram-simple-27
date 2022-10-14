const NUMBER_OBJECTS = 25;
const NUMBER_LIKES = {
  min: 15,
  max: 200
}

//Функция возвращает случайное целое число из переданного диапазона включительно:

function returnsRandomNumber (min, max) {

  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  return ( (min >= 0 && min < max) && (!isNaN(min) && !isNaN(max) ) ) ? randomNumber : NaN;

}

//Функция для проверки максимальной длины строки:

function checksLengthString (stringToTest, maximumLengthString) {

  return (stringToTest.length <= maximumLengthString);

}


//Создание объекта описание фотографии:

const photoDescription = {
  id: '',
  url: '',
  description: '',
  likes: returnsRandomNumber(NUMBER_LIKES.min, NUMBER_LIKES.max),
  comments: ''
}

console.log(photoDescription.likes);

