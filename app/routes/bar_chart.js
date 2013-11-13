var BarChartRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        "label": "Second Place",
        "value": 1,
        "group": "The Future: Coming Soon"
      },
      {
        "label": "First Place",
        "value": 3,
        "group": "The Future: Coming Soon"
      },
      {
        "label": "Second Place",
        "value": 12,
        "group": "Who Let the Dogs Out?"
      },
      {
        "label": "First Place",
        "value": 7,
        "group": "Who Let the Dogs Out?"
      },
      {
        "label": "Second Place",
        "value": 6,
        "group": "How Cutting Out Food and Sleep Made Me More Productive"
      },
      {
        "label": "First Place",
        "value": 8,
        "group": "How Cutting Out Food and Sleep Made Me More Productive"
      }
    ];
  }
});

export default BarChartRoute;
