import Ember from 'ember';

const { computed } = Ember;

export default function isInArray(itemKey, listKey /*favorites.items*/) {
  return computed(itemKey, `${listKey}.[]`, function() {
    // Do the computation;
    const item = this.get(itemKey);
    const list = this.get(listKey);
    return list.indexOf(item) >= 0;
  });
}
