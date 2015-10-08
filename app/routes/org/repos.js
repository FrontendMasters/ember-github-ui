import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgId = Ember.get(this.modelFor('org'), 'login');
    return $.get(`https://api.github.com/orgs/${orgId}/repos?access_token=99d4a35f7c58ecf4bacf8a730206869a6c92c4cf`).then(rawRepos => {
      return rawRepos.map(rawRepo => {
        rawRepo.oldId = rawRepo.id;
        rawRepo.id = rawRepo.name;
        return rawRepo;
      });
    });

  }
});
