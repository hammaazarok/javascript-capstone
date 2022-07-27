const Likes = [{
    id:'44660',
    likes: 83
},
{
    id:'6048',
    likes: 2
}]
const countLikes = (showId)=>{
    const numberOfLikes = Likes.filter((a)=>{
        return a.id === showId})[0];
    return numberOfLikes !== undefined ? numberOfLikes.likes: 0;
}

const likeUpdate = (showId,newValue)=>{
    Likes.filter((a)=>{
        return a.id === showId})[0].likes = newValue;
}
const addNewLike = (showId)=>{


    const SentToApi = async () => {
        const request = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PaPkcuuefChRyB9FOnQ0/likes/',{
            method: 'POST',
            body: JSON.stringify({
              item_id: `${showId}`
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
        const data = await request.status;
        return data;
      };

      SentToApi().then(
        (value) => {
         value=="201"?true:false;
        },
        (error) => {
          throw error;
        },
      );
}

export {addNewLike,countLikes,likeUpdate};