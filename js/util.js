import { NAMES, MESSAGE, DESCRIPTION } from 'data.js';

function getRandomInteger(min, max) {
  const IntMin = Math.ceil(min);
  const IntMax = Math.floor(max);
  return Math.floor(Math.random() * (IntMax - IntMin + 1)) + IntMin;
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const generateIdComment = getRandomInteger(1, 25);
const generateIdForUser = getRandomInteger(1, 25);
const generatePhoto = getRandomInteger(1, 25);

export { getRandomArrayElement, getRandomInteger, generateIdComment, generateIdForUser, generatePhoto };

const createCommentsArray = () => ({
  commentsId: generateIdComment,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGE[Math.round(Math.random() * (MESSAGE.length - 1))],
  name: getRandomArrayElement(NAMES),
});

const createUserPhoto = () => ({
  userId: generateIdForUser,
  urlPhoto: `photos/${generatePhoto}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(0, 30) }, createCommentsArray),
});

const generatedPosts = Array.from({ length: 30 }, createUserPhoto);

export { generatedPosts };
