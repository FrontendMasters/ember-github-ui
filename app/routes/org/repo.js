import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let org = this.modelFor('org');
    return this.store.queryRecord('repo', {
      repoId: params.repoid,
      orgId: org.get('id')
    });
  }
});
