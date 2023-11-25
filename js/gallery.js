import { createThumbnail } from './thumbnail.js';
import { showPicture } from './big-picture.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {

    const thumbnail = evt.target.closest('[data-thumbnail-id]');

    if (!thumbnail) {
      return;
    }
    evt.preventDefault();

    const thumbnailId = +thumbnail.dataset.thumbnailId;
    const pictureData = pictures.find(({ userId }) => userId === thumbnailId);
    showPicture(pictureData);

  });

  createThumbnail(pictures, container);
};

export { renderGallery };
