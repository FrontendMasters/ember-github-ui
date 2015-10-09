import Ember from 'ember';
import isInArray from 'github-ui/utils/is-in-array';

export default Ember.Component.extend({
  tagName: 'li',
  favorites: Ember.inject.service(),
  classNames: ['github-org'],
  isFavorited: isInArray('org', 'favorites.items'),
  actions: {
    favoriteWasClicked() {
      this.sendAction('on-fav-clicked', this.get('org'));
    }
  }
});
