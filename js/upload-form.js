import { init as initEffect } from './effect.js';
import { resetScale } from './scale.js';

const MAX_HASHTAG_COUNT = 5;
const MAX_COMMENT_LENGTH = 140;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const ErrorText = {
  INVALID_DUPLICATE: 'Хэш-тег не может быть использован дважды',
  INVALID_COUNT: 'Максимум &{MAX_HASHTAG_COUNT} хэш-тегов',
  INVALID_HESHTAG: 'Неправильный хэш-тег',
  MAX_LENGTH: `Длина комментария превышает ${MAX_COMMENT_LENGTH} символов`,
};

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const overlay = form.querySelector('.img-upload__overlay');
const cancelButton = form.querySelector('.img-upload__cancel');
const fileField = form.querySelector('.img-upload__input');
const hashtahField = form.querySelector('.text__hashtags');
const commendField = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'text__description',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
};

const hideModal = () => {
  form.reset();
  resetScale();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtahField ||
  document.activeElement === commendField;

const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));


const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));

const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLoserCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const isFormValid = (evt) => (pristine.validate() ? pristine.reset() : evt.preventDefault());
function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const onFileInputChange = () => {
  showModal();
};

const onCancelButtonClick = () => {
  hideModal();
};

const onFormSubmit = (evt) => {
  isFormValid(evt);
};

const firstVerification = 1;
const secondVerification = 2;
const thirdVerification = 3;

pristine.addValidator(
  hashtahField,
  hasValidCount,
  ErrorText.INVALID_COUNT,
  thirdVerification,
  true
);

pristine.addValidator(
  hashtahField,
  hasUniqueTags,
  ErrorText.INVALID_DUPLICATE,
  secondVerification,
  true
);

pristine.addValidator(
  hashtahField,
  hasValidTags,
  ErrorText.INVALID_HESHTAG,
  firstVerification,
  true
);

const initUploadForm = () => {
  fileField.addEventListener('change', onFileInputChange);
  cancelButton.addEventListener('click', onCancelButtonClick);
  form.addEventListener('submit', onFormSubmit);
  initEffect();
};

export { initUploadForm };
