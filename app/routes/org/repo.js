import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgId = Ember.get(this.modelFor('org'), 'login');
    return this.store.queryRecord('repo', {
      orgId,
      repoId: params.repoid
    });
    // return $.get(`https://api.github.com/repos/${org.login}/${params.repoid}?access_token=99d4a35f7c58ecf4bacf8a730206869a6c92c4cf`).then(rawRepo => {
    //   // backing up github's numeric ID
    //   rawRepo.oldId = rawRepo.id;
    //   // use the name of the repo as our ID
    //   rawRepo.id = rawRepo.name;
    //   return rawRepo;
    // });
  }
});
