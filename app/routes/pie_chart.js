var PieChartRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        "label": "The Future: Coming Soon",
        "value": 5
      },
      {
        "label": "Who Let the Dogs Out?",
        "value": 31
      },
      {
        "label": "How Cutting Out Food and Sleep Made Me More Productive",
        "value": 20
      }
    ];
  }
});

export default PieChartRoute;
