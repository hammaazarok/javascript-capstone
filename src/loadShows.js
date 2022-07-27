import addShow from './addShowToDom.js';
const loadShows = async () => {
  const showsContainer = document.getElementById('cards-container');
  showsContainer.innerHTML = '';
  let shows = [];
  const getShowsData = async () => {
    const request = await fetch('https://api.tvmaze.com/schedule?country=US');
    const data = await request.json();
    return data;
  };
  await getShowsData().then(
    (value) => {
      value.forEach((item) => {
        addShow(item.show.name.substring(0, 22), item.show.image.medium, `${item.show.summary.substring(0, 60).replace('<p>', '').replace('</p>', '').replace('<b>', '')
          .replace('</b>', '')} ...`, false, 0);
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