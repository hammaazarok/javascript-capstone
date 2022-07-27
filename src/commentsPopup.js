import loadShows from './loadShows.js';
const showModal = document.querySelector('#modal-section');
const popModal = document.createElement('div');
popModal.setAttribute('class', 'modal');
const commentsPopUp = async (data,id) => {
  document.body.addEventListener('click', (event) => {
    if (event.target.className === 'comment-btn') {
      const commentId = id;
      data.forEach((show) => {
        show = show.show;
        const showId = show.id;
        console.log(showId,commentId)
        if (showId.toString() === commentId.toString()) {
          popModal.innerHTML = `<div class="modal-content">
  <span class="d-flex jc-flex-end"><i class="fas fa-window-close" aria-hidden="true"></i></span>
  <div class="d-flex flex-d-c">
      <img src=${(show.image.medium)} alt="show image" class="popup-img show mb-3">
      <h2 class="d-flex center">${show.name}</h2>
      <div class="d-flex flex-d-c">
      <h3 class="d-flex">Premiered On: ${show.premiered}</h3>
      <p class="d-flex show-desc">${show.summary}</p>
      <h4 class="d-flex mt-1">Language: ${show.language}</h4>
      </div>
      <h3 class="d-flex center"><i class="fa fa-fw fa-comment mb-5"></i>  Comments(0)</h3>
      <div class="flex-d-c mb-5 ">
      <ul class="d-flex s-around comment-list-header font-w-bold">
      <li>Date</li> <li>By</li> <li> Comment</li>
      </ul>
      <ul class="comments-list-body d-flex s-around">
        <li>2020</li>
        <li>rotshidzwa</li>
        <li>hello guys</li>
      </ul>
      </div>
      <form class="card bg-light mb-5" id="comment-form" method="POST">
       <div class=" d-flex flex-d-c  card-body">
       <h3 class="center">Add comment</h3><br>
       <input type="text" id="comment" class="form-control" placeholder="Enter your name" required><br>
       <textarea id="viewer-comment" class="form-control"  rows="4" cols="40" placeholder="Enter Comment"  required></textarea><br>
       <button type="submit" id="commentBtn" class="btn btn-success btn-md">Comment</button>
       </div>
      </form>
  </div>
</div>`;
        }
      });
      showModal.appendChild(popModal);
      showModal.style.display = ('block');
      const closeBtn = document.querySelector('.fa-window-close');
      document.addEventListener('click', (event) => {
        if (event.target === closeBtn) {
          showModal.style.display = 'none';
          window.location.reload();
        }
      });
    }
  });
  await loadShows();
};
export default commentsPopUp;