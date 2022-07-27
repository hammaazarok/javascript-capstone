import './index.css';
import loadShows from './loadShows.js';
import commentsPopUp from './commentsPopUp.js';

loadShows().then((value) => {
  commentsPopUp(value, '812');
});
// (error) => { error; });