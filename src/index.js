import './index.css';
import loadShows from './loadShows.js';
import commentspopup from './commentspopup.js';

loadShows().then((value) => {
  commentspopup(value, '812');
});
// (error) => { error; });