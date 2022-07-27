import './index.css';
import loadShows from './loadShows.js';
import commentsPopUp from './commentsPopUp.js';

// import addShowToDom from './addShowToDom';
loadShows().then((value) => {
  // console.log(value);
  commentsPopUp(value, '812');
});
// (error) => { error; }););
