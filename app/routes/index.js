var IndexRoute = Ember.Route.extend({
  model: function() {
    return [
        {
            "time": d3.time.format('%Y-%m-%d').parse("2013-05-01"),
            "value": 40
        },
        {
            "time": d3.time.format('%Y-%m-%d').parse("2013-05-02"),
            "value": 100
        },
        {
            "time": d3.time.format('%Y-%m-%d').parse("2013-05-03"),
            "value": 120
        }
    ];
  }
});

export default IndexRoute;
