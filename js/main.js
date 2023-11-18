import { NAMES, MESSAGES, DESCRIPTIONS } from './data.js';
import { generatedPosts } from './util.js';
import { renderGallery } from './gallery.js';
import { resetScale } from './scale.js';

renderGallery(generatedPosts(NAMES, MESSAGES, DESCRIPTIONS));
resetScale();
