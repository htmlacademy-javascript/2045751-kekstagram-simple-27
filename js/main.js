const NUMBER_OBJECTS = 25;

const NUMBER_LIKES = {
  min: 15,
  max: 200
};

//Массив с описанием фотографии:

const PHOTO_DESCRIPTION = [
  'описание1',
  'описание2',
  'описание3',
  'описание4'
];

//Массив комментариев:

const NUMBER_COMMENTS = [
  'комментарий1',
  'комментарий2',
  'комментарий3',
  'комментарий4',
];

//Функция возвращает случайное целое число из переданного диапазона включительно:

function returnsRandomNumber (min, max) {

  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  return ( (min >= 0 && min < max) && (!isNaN(min) && !isNaN(max) ) ) ? randomNumber : NaN;

}

//Функция для проверки максимальной длины строки:

function checksLengthString (stringToTest, maximumLengthString) {

  return (stringToTest.length <= maximumLengthString);

}

//Функция вовращает случайный элемент массива:

function returnsRandomElementArray(element) {

  return element[returnsRandomNumber(0, element.length - 1) ];

}

//Создание объекта "описание фотографии пользователя":

function createUserPhoto() {

  return {
    id: '',
    likes: returnsRandomNumber(NUMBER_LIKES.min, NUMBER_LIKES.max),
    comments: returnsRandomElementArray(NUMBER_COMMENTS)
  };

};

//Создание массива объектов фотографий:

const createArrayUserPhoto = Array.from( {length: NUMBER_OBJECTS}, createUserPhoto);

console.log(createArrayUserPhoto);
