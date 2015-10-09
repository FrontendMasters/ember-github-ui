import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let org = this.modelFor('org');
    return this.store.query('repo', {
      orgId: org.get('id')
    });
  }
});
