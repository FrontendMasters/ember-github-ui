import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',

  urlForQueryRecord(query, modelName) {
    switch(modelName) {
      case 'repo':
        return `https://api.github.com/repos/${query.orgId}/${query.repoId}?access_token=99d4a35f7c58ecf4bacf8a730206869a6c92c4cf`;
      default:
        return this._super(...arguments);
    }
  },

  urlForQuery (query, modelName) {
    switch(modelName) {
      case 'repo':
        return `${this.get('host')}/orgs/${query.orgId}/repos`;
      default:
        return this._super(...arguments);
    }
  }

});
