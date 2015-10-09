import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-repo', 'Integration | Component | github repo', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  const repo = Ember.Object.create({
    forks_count: 32,
    watchers_count: 99,
    name: 'repoooo'
  });
  this.set('repo', repo);

  this.render(hbs`{{github-repo repo=repo}}`);

  assert.equal(this.$().text().trim(), `repoooo


(
Forks: 32
Watchers: 99
)`);

  // Template block usage:
  this.render(hbs`
    {{#github-repo repo=repo}}
      ABC
    {{/github-repo}}
  `);

  assert.equal(this.$().text().trim(), `ABC



(
Forks: 32
Watchers: 99
)`);
});
