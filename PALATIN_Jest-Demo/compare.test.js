const { compareEnhanced, NO_TYPEMATCH } = require('./compareFunction');

// 1
test('undefined variable a', () => {
  expect(compareEnhanced()).toBe('no a');
});
test('undefined variable b', () => {
  expect(compareEnhanced(1)).toBe('no b');
});

// 2
test('Number (1), String ("1") to be NO_TYPEMATCH', () => {
  expect(compareEnhanced(1, '1')).toBe(NO_TYPEMATCH);
});
test('Number (1), Number (1) to be =', () => {
  expect(compareEnhanced(1, 1)).toBe('=');
});
test('Number (2), Number (1) to be >', () => {
  expect(compareEnhanced(2, 1)).toBe('>');
});
test('Number (1), Number (2) to be <', () => {
  expect(compareEnhanced(1, 2)).toBe('<');
});

// 3
test('String ("1"), Number (1) to be NO_TYPEMATCH', () => {
  expect(compareEnhanced('1', 1)).toBe(NO_TYPEMATCH);
});
test('String ("1"),  String ("1") to be =', () => {
  expect(compareEnhanced('1', '1')).toBe('=');
});
test('String ("1"), String ("2") to be <', () => {
  expect(compareEnhanced('1', '2')).toBe('<');
});
test('String ("2"), String ("1") to be >', () => {
  expect(compareEnhanced('2', '1')).toBe('>');
});

// 4
test('No typematch between a and b', () => {
  expect(compareEnhanced([1, 2, 3], 1)).toBe(NO_TYPEMATCH);
});
test('[1,2,3], [4,5,6] to be =', () => {
  expect(compareEnhanced([1, 2, 3], [4, 5, 6])).toBe('=');
});
test('[1,2,3,4], [4,5,6] to be >', () => {
  expect(compareEnhanced([1, 2, 3, 4], [5, 6, 7])).toBe('>');
});
test('[1,2], [4,5,6] to be <', () => {
  expect(compareEnhanced([1, 2], [3, 4, 5])).toBe('<');
});

// 5
test('Object ({value: "dominik"}), Number (2) to be NO_TYPEMATCH', () => {
  expect(compareEnhanced({ value: 'dominik' }, 2)).toBe(NO_TYPEMATCH);
});
test('Object({name: "dominik"}), Object({ name: "dominik" }) to be =', () => {
  expect(compareEnhanced({ value: 'dominik' }, { value: 'dominik' })).toBe('=');
});
test('Object({name: "abc"}), Object({ name: "def" }) to be <', () => {
  expect(compareEnhanced({ value: 'abc' }, { value: 'def' })).toBe('<'); // compared lexicographically
});
test('Object({name: "fed"}), Object({ name: "cba" }) to be >', () => {
  expect(compareEnhanced({ value: 'fed' }, { value: 'cba' })).toBe('>'); // compared lexicographically
});

// 6
test('Bool (true), Bool (true) to be =', () => {
  expect(compareEnhanced(true, true)).toBe('=');
});
test('Bool (true), String ("abcdefg") to be >', () => {
  expect(compareEnhanced(true, 'abcdefg')).toBe('>'); // compared lexicographically
});
test('Bool (true), String ("tuvwzxy") to be <', () => {
  expect(compareEnhanced(true, 'tuvwzxy')).toBe('<'); // compared lexicographically
});
