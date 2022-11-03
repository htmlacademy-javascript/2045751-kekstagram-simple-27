import {createArrayUserPhotos} from './data.js';

//Получаем блок для отрисовки сгенерированных DOM-элементов:

const blockPictures = document.querySelector('.pictures');

//Получаем содержимое шаблона picture:

const templatePicture = document.querySelector('#picture').content;
const randomUserPicture = templatePicture.querySelector('.picture');

//Создаем фрагмент:

const fragmentPicture = document.createDocumentFragment();

//Проходим циклом по массиву с объектами:

const arrayUserPhotos = createArrayUserPhotos();

arrayUserPhotos.forEach( (userPicture) => {

  const randomUserPictureClone = randomUserPicture.cloneNode(true);

  const imgPicture = randomUserPictureClone.querySelector('.picture__img');
  imgPicture.src = userPicture.url;

  const commentsPicture = randomUserPictureClone.querySelector('.picture__comments');
  commentsPicture.textContent = userPicture.comments;

  const likesPicture = randomUserPictureClone.querySelector('.picture__likes');
  likesPicture.textContent = userPicture.likes;

  fragmentPicture.append(randomUserPictureClone);
  blockPictures.append(fragmentPicture);

});
