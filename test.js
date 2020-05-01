const operations = require('./operations.js');
const assert = require('assert');

it('сообщает об ошибке при использовании строки вместо числа', () => {
  assert.equal(operations.validateNumbers('sammy', 5), false);
});

it('сообщает об ошибке при использовании двух строк вместо чисел', () => {
  assert.equal(operations.validateNumbers('sammy', 'sammy'), false);
});

it('успех при использовании двух чисел', () => {
  assert.equal(operations.validateNumbers(5, 5), true);
});