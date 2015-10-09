import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  name:   attr('string'),
  forks_count: attr('number'),
  watchers_count: attr('number')
});
