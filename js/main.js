const NAMES = [
  'БРАНОСТАЛЬФ',
  'ФРЕДИД',
  'ТУБРАНО',
  'АКМО',
  'ЭРГАР',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !',
];

const DESCRIPTION = [
  'Изображение красного ретро-автомобиля',
  'Вид на горы',
  'Заход солнца на берегу океана',
  'Звездное небо с большой медведицей',
  'Звездное небо с созведием стрельца',
];

function getRandomInteger(min, max) {
  const IntMin = Math.ceil(min);
  const IntMax = Math.floor(max);
  return Math.floor(Math.random() * (IntMax - IntMin + 1)) + IntMin;
}

const generateIdComment = getRandomInteger(1, 25);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const generateIdForUser = getRandomInteger(1, 25);
const generatePhoto = getRandomInteger(1, 25);

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

console.log(generatedPosts);

