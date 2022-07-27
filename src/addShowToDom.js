const addShow = (name, imageUrl, description, liked, numberOfLikes) => {
  const ShowsContainer = document.getElementById('cards-container');
  const showHTML = document.createElement('li');
  showHTML.classList.add('card');
  showHTML.innerHTML = `
    <img src="${imageUrl}" alt="${name}">
    <div class="sub">
        <p class="title"><b>${name}</b></p>
        <i class="material-icons white">favorite</i>
    </div>
    <div class="sub">
        <span class="desc">${description}</span>
        <p>${numberOfLikes} likes</p>
    </div>
    <button type="button" id="${showHTML}" class="comment-btn"  onclick"commentsPopUp(${showHTML})" role="button">Comments</button>
              `;
  ShowsContainer.appendChild(showHTML);
};

export default addShow;