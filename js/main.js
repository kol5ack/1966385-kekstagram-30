import { NAMES, MESSAGES, DESCRIPTIONS } from './data.js';
import { generatedPosts } from './util.js';
import { renderGallery } from './gallery.js';
import { initUploadForm } from './upload-form.js';

renderGallery(generatedPosts(NAMES, MESSAGES, DESCRIPTIONS));
initUploadForm();
