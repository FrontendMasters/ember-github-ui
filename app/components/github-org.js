import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  actions: {
    favoriteWasClicked() {
      this.sendAction('on-fav-clicked', this.get('org'));
    }
  }
});
