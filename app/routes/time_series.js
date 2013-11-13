var TimeSeriesRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        "time": d3.time.format('%Y-%m-%d').parse("2013-05-01"),
        "value": 0
      },
      {
        "time": d3.time.format('%Y-%m-%d').parse("2013-05-02"),
        "value": 50
      },
      {
        "time": d3.time.format('%Y-%m-%d').parse("2013-05-03"),
        "value": 100
      }
    ];
  }
});

export default TimeSeriesRoute;
