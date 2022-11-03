const form = document.querySelector('.img-upload__form');
const uploadFile = form.querySelector('.img-upload__input');
const uploadOverlay = form.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const buttonCancel = form.querySelector('.img-upload__cancel');

function showPopup() {

  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

}

function closePopup() {

  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

}

uploadFile.addEventListener('change', () => {

  showPopup();

});

buttonCancel.addEventListener('click', () => {

  closePopup();

});

const pristine = new Pristine(form, {
  classTo: 'text',
  errorTextParent: 'text',
  errorTextClass: 'text__errorText'
});
