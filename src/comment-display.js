const appId = 'PaPkcuuefChRyB9FOnQ0';
const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const endPoint = '/comments';
// get comment
const fetchComment = async (showId) => {
  const response = await fetch(`${commentUrl + appId + endPoint}?item_id=${showId}`);
  return response.json();
  
};

// Add comment
const addMovieComment = async (viewerInfo) => {
  const response = await fetch(`${commentUrl + appId + endPoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(viewerInfo),
  });
   console.log(viewerInfo);
  const commentData = await response.text();
  return commentData;
};

export { addMovieComment, fetchComment };