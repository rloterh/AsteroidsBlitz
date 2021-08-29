import Preload from '../js/scenes/Preload';

const preload = new Preload();

test('preload is of type an object', () => {
  expect(typeof preload).toBe('object');
});