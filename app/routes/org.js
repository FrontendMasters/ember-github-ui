import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return $.get(`https://api.github.com/orgs/${params.id}?access_token=99d4a35f7c58ecf4bacf8a730206869a6c92c4cf`).then(rawOrg => {
      // backing up github's numeric ID
      rawOrg.oldId = rawOrg.id;
      // use the name of the repo as our ID
      rawOrg.id = rawOrg.name;
      return rawOrg;
    });
  }
});
