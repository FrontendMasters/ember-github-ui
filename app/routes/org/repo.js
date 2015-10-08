import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let org = this.modelFor('org');
    return $.get(`https://api.github.com/repos/${org.id}/${params.repoid}?access_token=99d4a35f7c58ecf4bacf8a730206869a6c92c4cf`).then(rawRepo => {
      // backing up github's numeric ID
      rawRepo.oldId = rawRepo.id;
      // use the name of the repo as our ID
      rawRepo.id = rawRepo.name;
      return rawRepo;
    });
  }
});
