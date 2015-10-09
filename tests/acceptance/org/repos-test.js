import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'github-ui/tests/helpers/start-app';
import Pretender from 'pretender';

let server;

function json(obj, status=200) {
  return [status, { 'Content-Type' : 'text/json'}, JSON.stringify(obj)];
}



// API request for all records of type "author"
this.store.findAll('author');
// API request for record of type "post" with id 37
this.store.findRecord('post', 37);

// look in cache for all records of type "author"
this.store.peekAll('author');
// look in cache for record of type "post" with id 37
this.store.peekRecord('post', 37);

module('Acceptance | org/repos', {
  beforeEach: function() {
    this.application = startApp();
    server = new Pretender(function(){

      this.get('https://api.github.com/orgs/:id',
          () => json({
            id: 99,
            login: 'emberjs',
            name: 'Ember.js'
          }));

      this.get('https://api.github.com/orgs/:id/:repoid',
          () => json([{
            id: 123,
            name: 'data'
          }]));

      this.get('https://api.github.com/repos/:id/:repoid',
          () => json({
            id: 123,
            name: 'data'
          }));

      this.get('https://api.github.com/repos/:id/:repoid/issues',
          () => json([
            {id: 1, title: 'Issue 1'},
            {id: 2, title: 'Issue 2'}
          ]));

      this.get('https://api.github.com/repos/:id/:repoid/contributors',
          () => json([
            {id: 1, login: 'contributor1'},
            {id: 2, login: 'contributor2'}
          ]));
    });


  },

  afterEach: function() {
    server.shutdown();
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /org/:id/repos', function(assert) {
  visit('/orgs');

  andThen(function() {
    assert.equal(currentURL(), '/orgs');
  });

  click('a[href*="org/emberjs"]');

  // Wait for everything to settle
  andThen(function() {
    // Make sure we're at the right URL
    assert.equal(currentURL(), '/org/emberjs/repos');
  });

  // Click a link (which starts a transition)
  click('a[href*="org/emberjs/data"]');

  // Wait for everything to settle
  andThen(function() {
    // Make sure we're at the right URL
    assert.equal(currentURL(), '/org/emberjs/data/issues');
  });

  click('a[href*="org/emberjs/data/contributors"]');

  // Wait for everything to settle
  andThen(function() {
    // Make sure we're at the right URL
    assert.equal(currentURL(), '/org/emberjs/data/contributors');
  });
});

