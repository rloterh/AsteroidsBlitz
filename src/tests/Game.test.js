import Phaser from 'phaser';
import Game from '../js/scenes/Game';

it('works', () => {
  expect(1).toEqual(1);
});

test('GameScene is a subclass of container', () => {
  expect(Game.prototype instanceof Phaser.Scene).toBe(true);
});

test('BaseScene is not a subclass of container', () => {
  expect(Game.prototype instanceof Phaser.GameObjects.Container).toBe(
    false,
  );
});
