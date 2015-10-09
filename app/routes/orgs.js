import Ember from 'ember';

export default Ember.Route.extend({

  favorites: Ember.inject.service(),
  actions: {
    favoriteClicked(org) {
      if (this.get('favorites.items').indexOf(org) < 0) {
        this.get('favorites').favoriteItem(org);
      } else {
        this.get('favorites').unfavoriteItem(org);
      }
    }
  },
  model() {
    return [{
      id: "emberjs"
    }, {
      id: "ember-cli"
    }, {
      id: "microsoft"
    }, {
      id: "yahoo"
    }, {
      id: "netflix"
    }, {
      id: "facebook"
    }];
  }
});
