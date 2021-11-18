import canPlaceFlowers from './canPlaceFlowers';

describe('Can place flowers', () => {
  test('Should return whether the flowers can be placed', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
    expect(canPlaceFlowers([0, 0, 1, 0, 1], 1)).toBe(true);
    expect(canPlaceFlowers([0, 0, 1, 0, 0], 1)).toBe(true);

  });
});
