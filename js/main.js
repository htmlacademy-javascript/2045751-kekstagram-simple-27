const NUMBER_OBJECTS = 25;

const NUMBER_LIKES = {
  min: 15,
  max: 200
};

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

//Создание объекта "описание фотографии":

const photoDescription = {
  id: '',
  url: '',
  description: '',
  likes: returnsRandomNumber(NUMBER_LIKES.min, NUMBER_LIKES.max),
  comments: NUMBER_COMMENTS[returnsRandomNumber(0, NUMBER_COMMENTS.length - 1) ]
};

// console.log(photoDescription.likes);
console.log(photoDescription.comments);


