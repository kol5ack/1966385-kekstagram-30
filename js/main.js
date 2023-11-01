import './data.js';
import { generatedPosts } from './util.js';
import { renderThumbnails } from './thumbnail.js';

const pictures = generatedPosts();
renderThumbnails(pictures);
