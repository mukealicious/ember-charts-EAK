var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.route('bar-chart', { path: '/bar-chart' });
  this.route('horizontal-bars', { path: '/horizontal-bars' });
  this.route('pie-chart', { path: '/pie-chart' });
  this.route('time-series', { path: '/time-series' });
});

export default Router;
