import Ember from 'ember';

export function niceNumber(params/*, hash*/) {
  if (!params) {
    return '';
  }
  const [num] = params;
  if (parseInt(num, 10) > 1000) {
    return `${Math.round(num * 0.01) * 0.1}K`;
  } else {
    return `${num}`;
  }
}

export default Ember.Helper.helper(niceNumber);
