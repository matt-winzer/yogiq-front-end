import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('yogis');
  this.route('yogi', {path: '/yogis/:id'}, function() {
    this.route('profile', {path: '/'});
  });
  this.route('asanas');
});

export default Router;
