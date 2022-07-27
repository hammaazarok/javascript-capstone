import './index.css';
import loadShows from './loadShows.js';
import {addNewLike,countLikes,likeUpdate} from './Likes.js'
 loadShows().then(
  ()=>{
    const likesButtons = document.querySelectorAll('.like');
  likesButtons.forEach((show)=>{
  show.addEventListener('click',(e)=>{
  const id = show.parentElement.parentElement.children[3].innerHTML;
  let likes = parseInt(countLikes(id))+1;
  show.parentElement.parentElement.children[2].children[1].innerHTML = likes + ' likes';
  addNewLike(show);
  likeUpdate(id,likes);
  })
  })
  }
  
);


