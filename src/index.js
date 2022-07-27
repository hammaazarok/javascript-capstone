import './index.css';
import loadShows from './loadShows.js';
import addShowToDom from './addShowToDom';
import commentsPopUp from './commentsPopUp.js';

window.addEventListener('DOMContentLoaded', () => {
  addShowToDom();
  const showPopUp = async () => {
    const data = await loadShows();
    commentsPopUp(data);
  };
  showPopUp();
});
