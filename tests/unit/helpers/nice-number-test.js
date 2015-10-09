import { niceNumber } from '../../../helpers/nice-number';
import { module, test } from 'qunit';

module('Unit | Helper | nice number');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.equal(niceNumber(), '', 'Empty');
  assert.equal(niceNumber([42]), '42', 'A number < 1000');
  assert.equal(niceNumber([4199]), '4.2K', 'A number > 1000');
});
