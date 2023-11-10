import { NAMES, MESSAGES, DESCRIPTIONS } from './data.js';


//Функция получения случайных значений
function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

//Функция без повторений
function createRandomNumber(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);

    if (previousValues.length >= (max - min + 1)) {
      return null;
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    previousValues.push(currentValue);

    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const generateIdComment = getRandomInteger(1, 25);
const generateRandomAvatar = getRandomInteger(1, 6);

function getImage() {
  const getRandomImage = Math.floor(Math.getRandomInteger(1, 25) * 2);
  return getRandomImage;
}

const createCommentsArray = () => ({
  commentsId: generateIdComment,
  avatar: `img/avatar-${generateRandomAvatar}.svg`,
  message: MESSAGES[Math.round(Math.random() * (MESSAGES.length - 1))],
  name: getRandomArrayElement(NAMES),
});

const generateRandomPictureId = createRandomNumber(1, 25);
const generateRandomIdUser = createRandomNumber(1, 25);

const createUserPhoto = () => ({
  userId: generateRandomIdUser(),
  urlPhoto: `photos/${generateRandomPictureId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(0, 30) }, createCommentsArray),
});

const generatedPosts = () => Array.from({ length: 25 }, createUserPhoto);

const isEscapeKey = (evt) => evt.key === 'Escape';

export { generatedPosts, getImage, isEscapeKey };

