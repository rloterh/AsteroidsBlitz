import GameOver from '../js/scenes/GameOver';

const gameOver = new GameOver();

test('gameOver is of type an object', () => {
  expect(typeof gameOver).toBe('object');
});
