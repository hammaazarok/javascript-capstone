import countShows from './showsCounter.js';

let shows = {};

describe('Testing Shows', () => {
  describe('Testing Shows Counter', () => {
    test('Shows are not defined', async () => {
      shows = undefined;
      const result = countShows(shows);
      expect(result).toBe('shows are not defined');
    });
    test('Shows are not empty', async () => {
      shows = [];
      const result = countShows(shows);
      expect(result).toBe('there is no show yet on this category');
    });
    test('Shows count is 2', async () => {
      shows = [
        {
          name: 'test1',
          id: 0,
        },
        {
          name: 'test2',
          id: 1,
        },
      ];
      const result = countShows(shows);
      expect(result).toBe(2);
    });
  });
});
