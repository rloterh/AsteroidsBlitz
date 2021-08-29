import LeaderBoard from '../js/scenes/LeaderBoard';

const leaderBoard = new LeaderBoard();

test('leaderBoard is of type an object', () => {
  expect(typeof leaderBoard).toBe('object');
});