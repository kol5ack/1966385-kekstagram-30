import { isEscapeKey } from './util.js';

const bigPictureElement = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const closePictureButtonElement = bigPictureElement.querySelector('.big-picture__cancel');

const hidePicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.add('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onCLosePictureButtonClick = () => {
  hidePicture();
};

function onDocumentKeydown(evt) {
  if (isEscapeKey) {
    evt.preventDefault();
    hidePicture();
  }
}

const renderPicture = ({ urlPhoto, description, likes }) => {
  bigPictureElement.querySelector('.big-picture__img img').src = urlPhoto;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const hideSocialComment = document.querySelector('.social__comment-count');

const showPicture = (pictureData) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  hideSocialComment.classList.add('hidden');

  renderPicture(pictureData);
};

closePictureButtonElement.addEventListener('click', onCLosePictureButtonClick);

export { showPicture };
