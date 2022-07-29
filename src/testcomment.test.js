import totalComments from './comment-count';

const comment = [
  {
    username: 'rotshidzwa',
    comment: 'i love that movie',
  },
  {
    username: 'hamma',
    comment: 'cant wait to watch that movie again',
  },
  {
    username: 'chester',
    comment: 'perfect one',
  },
];

describe('test comment count: ', () => {
  test('Return counts of comments', () => {
    expect(totalComments(comment)).toBe(3);
  });
});