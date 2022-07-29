import addShow from './addShowToDom.js';
import { loadLikes, countLikes } from './Likes.js';

const loadShows = async () => {
  const showsContainer = document.getElementById('cards-container');
  showsContainer.innerHTML = '';
  let shows = [];
  const getShowsData = async () => {
    const request = await fetch('https://api.tvmaze.com/schedule?country=US');
    const data = await request.json();
    return data;
  };

  await loadLikes();
  await getShowsData().then(
    (value) => {
      value.forEach((item) => {
        const reg = /(<([^>]+)>)/ig
        addShow(
          item.show.name.substring(0, 22),
          item.show.image.medium,
          `${item.show.summary
            .substring(0, 60)
            .replaceAll(reg, '').replace('<b', '')} ...`,
          false,
          countLikes(item.show.id),
          item.show.id,
        );
      });
      shows = value;
    },
    (error) => {
      throw error;
    },
  );
  return shows;
};
export default loadShows;
