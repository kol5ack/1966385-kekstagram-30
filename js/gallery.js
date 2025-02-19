import { renderThumbnails } from './thumbnail.js';
import { showPicture } from './picture.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    evt.preventDefault();
    const thumbnail = evt.target.closest('[data-thumbnail-id]');

    if (!thumbnail) {
      return;
    }

    const thumbnailId = +thumbnail.dataset.thumbnailId;
    const pictureData = pictures.find(({ userId }) => userId === thumbnailId);
    showPicture(pictureData);

  });

  renderThumbnails(pictures, container);
};

export { renderGallery };
