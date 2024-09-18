import Validator from '../validator';

const validator = new Validator();

test('testing validateUsername function', () => {
  const username = 'valid_12user';
  const result = validator.validateUsername(username);
  expect(result).toBe(true);
});

test('more than three digits in a row', () => {
  const username = 'invalid_1111user';
  const result = validator.validateUsername(username);
  expect(result).toBe(false);
});
