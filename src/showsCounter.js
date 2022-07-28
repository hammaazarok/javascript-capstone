const countShows = (shows) => {
  if (shows === undefined) {
    return 'shows are not defined';
  } if (shows.length < 1) {
    return 'there is no show yet on this category';
  }

  return shows.length;
};

export default countShows;