import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    let subredditPath = '';
    if (Object.keys(params).length === 0 && params.constructor === Object) {
      subredditPath = 'gifs';
    } else {
      subredditPath = params.subreddit;
    }

    let url = "https://www.reddit.com/r/" + subredditPath + "/top.json?sort=new&limit=100";
    return Ember.$.getJSON(url);
  },
  actions: {
    refreshGifs: function() {
      this.refresh();
    }
  }
});
