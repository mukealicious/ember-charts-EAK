var HorizontalBarsRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        "label": "X-Men",
        "value": 4
      },
      {
        "label": "Batman",
        "value": 10
      },
      {
        "label": "Spider Man",
        "value": 8
      },
      {
        "label": "Thor",
        "value": 3
      }
    ];
  }
});

export default HorizontalBarsRoute;
