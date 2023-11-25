const succesMessageElement = document.querySelector('#success').content.querySelector('.success');
const errorMessageElement = document.querySelector('#error').content.querySelector('.error');


function hideMessage() {
  const errorElemen = document.querySelector('.succes') || document.querySelector('.error');
  errorElemen.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.removeEventListener('click', onBodyClick);
}

function onCloseButtonClick() {
  hideMessage();
}

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideMessage();
  }
}
function onBodyClick(evt) {
  if (evt.target.closest('.succes__inner') || (evt.target.closest('.error__inner'))) {
    return;
  }
  hideMessage();
}

function showMessage(element, buttonClass) {
  document.body.append(element);
  document.body.addEventListener('click', onBodyClick);
  document.addEventListener('keydown', onDocumentKeydown);
  element.querySelector(buttonClass).addEvenListener('click', onCloseButtonClick());
}

function showSuccesMessage() {
  showMessage(succesMessageElement, '.success__button');
}

function showErrorMessage() {
  showMessage(errorMessageElement, '.error__button');
}

export { showSuccesMessage, showErrorMessage };
