import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // LIST OF ORGS
  this.route('orgs', {});  //  /orgs

  // INDIVIDUAL ORG
  this.route('org', {path: 'org/:id'}, function() {
    //org/emberjs

    // LIST OF REPOS
    this.route('repos', {});

    // INDIVIDUAL REPO
    // org/jquery/jquery-ui
    this.route('repo', {path: ':repoid'}, function() {
      this.route('contributors', {});
      this.route('issues', {});
    });
    this.route('notfound', {});
  });
  this.route('notfound', {path: '*path'});
});

export default Router;
