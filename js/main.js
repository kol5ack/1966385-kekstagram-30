import { renderGallery } from './gallery.js';
import { initUploadForm } from './upload-form.js';
import { getData } from './api.js';
import { showErrorMessage } from './util.js';
import { onFormSubmit } from './upload-form.js';


const bootstrap = async () => {
  const pictures = await getData();
  renderGallery(pictures);
  onFormSubmit();
  initUploadForm();
};

bootstrap(showErrorMessage());
