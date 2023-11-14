const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const ErrorText = {
  INVALID_DUPLICATE: 'Хэш-тег не может быть использован дважды',
  INVALID_COUNT: 'Максимум &{MAX_HASHTAG_COUNT} хэш-тегов',
  INVALID_HESHTAG: 'Неправильный хэш-тег',
};

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const overlay = form.querySelector('.img-upload__overlay');
const cancelButton = form.querySelector('.img-upload__cancel');
const fieldField = form.querySelector('.img-upload__input');
const hashtahField = form.querySelector('.text__hashtags');
const commendField = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
}, false);

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () => {
  form.reset();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtahField ||
  document.activeElement === commendField;

const normalizeTags = (taqgString) => taqgString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));


const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));

const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLoserCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const isFormValid = (evt) => pristine.validate() ? pristine.reset() : evt.preventDefault();

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

pristine.addValidator(
  hashtahField,
  hasValidCount,
  ErrorText.INVALID_COUNT,
  3,
  true
);

pristine.addValidator(
  hashtahField,
  hasUniqueTags,
  ErrorText.INVALID_DUPLICATE,
  2,
  true
);

pristine.addValidator(
  hashtahField,
  hasValidTags,
  ErrorText.INVALID_HESHTAG,
  1,
  true
);

fieldField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);

export { pristine, isFormValid };
