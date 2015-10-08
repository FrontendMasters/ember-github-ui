import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

const AppRouter = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

AppRouter.map(function() {
  this.route('orgs', {});  //  /orgs
  this.route('org', { path: 'org/:id' }, function() { // org/emberjs
    this.route('repos', {});
    this.route('repo', { path: ':repoid' }, function() {
      this.route('contributors', {});
      this.route('issues', {});
    }); // org/jquery/jquery-ui
  });
  this.route('notfound', { path: '*path' });
});

export default AppRouter;
