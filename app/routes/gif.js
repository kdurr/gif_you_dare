import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
      let url = "https://www.reddit.com/r/" + params.subreddit + "/top.json?sort=new&limit=100";
      return Ember.$.getJSON(url);
  },
  actions: {
    refreshGifs: function() {
      this.refresh();
    }
  }

});
