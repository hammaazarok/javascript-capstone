import './index.css';
import loadShows from './loadShows.js';
import addShowToDom from './addShowToDom';
import commentsPopUp from './commentsPopUp.js';


loadShows().then((value)=>{console.log(value)
  commentsPopUp(value,"812");
},(error)=>{error});
