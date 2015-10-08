import Ember from 'ember';

export default Ember.Route.extend({

  authentication: Ember.inject.service(),

  setupController(controller) {
    this._super(...arguments);
    controller.set('records', this.get('authentication.records'));
  },

  actions: {
    addToRecords(value) {
      this.get('authentication.records').addObject({id: value});
    }
  }
});
