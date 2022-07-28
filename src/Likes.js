let Likes = [];
const loadLikes = async () => {
  const getLikesData = async () => {
    const request = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PaPkcuuefChRyB9FOnQ0/likes');
    const data = await request.json();
    return data;
  };

  await getLikesData().then(
    (value) => {
      const newLikes = [];
      value.forEach((element) => {
        newLikes.push({
          id: element.item_id,
          likes: element.likes,
        });
      });
      Likes = newLikes;
    },
    (error) => {
      throw error;
    },
  );
};

const countLikes = (showId) => {
  showId += '';
  const numberOfLikes = Likes.filter((a) => a.id === showId)[0];
  return numberOfLikes !== undefined ? numberOfLikes.likes : 0;
};

const likeUpdate = (showId, newValue) => {
  if (Likes.filter((a) => a.id === showId)[0] !== undefined) {
    Likes.filter((a) => a.id === showId)[0].likes = newValue;
  } else {
    Likes.push(
      {
        id: showId,
        likes: newValue,
      },
    );
  }
};

const addNewLike = (showId) => {
  const SentToApi = async () => {
    const request = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PaPkcuuefChRyB9FOnQ0/likes/', {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${showId}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await request.status;
    return data;
  };

  SentToApi().then(
    (value) => (value === '201'),
    (error) => {
      throw error;
    },
  );
};

export {
  addNewLike, countLikes, likeUpdate, loadLikes,
};