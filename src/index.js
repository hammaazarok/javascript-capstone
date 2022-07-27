import './index.css';
import loadShows from './loadShows.js';
import commentspopup from './commentspopup.js';
// import addShowToDom from './addShowToDom';

loadShows().then((value) => {
  // console.log(value);
  commentspopup(value, '812');
});
// (error) => { error; });