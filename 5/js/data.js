import {returnsRandomElementArray, returnsRandomNumber} from './util.js';

const NUMBER_OBJECTS = 25;

const NUMBER_LIKES = {
  min: 15,
  max: 200
};

const NUMBER_COMMENTS = {
  min: 0,
  max: 200
};

//Массив с описанием фотографии:

const PHOTO_DESCRIPTION = [
  'описание1',
  'описание2',
  'описание3',
  'описание4'
];

//Создание объекта "описание фотографии пользователя":

function createUserPhoto(index) {

  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: returnsRandomElementArray(PHOTO_DESCRIPTION),
    likes: returnsRandomNumber(NUMBER_LIKES.min, NUMBER_LIKES.max),
    comments: returnsRandomNumber(NUMBER_COMMENTS.min, NUMBER_COMMENTS.max)
  };

}

//Создание массива объектов фотографий:

function createArrayUserPhotos() {

  return Array.from( {length: NUMBER_OBJECTS}, (_, indexPhoto) => createUserPhoto(indexPhoto + 1) );

}

export {createArrayUserPhotos};
