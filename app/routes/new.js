import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
      let url = "https://www.reddit.com/r/gifs/top.json?sort=new&limit=100";
      var redditId = params.subreddit_id;
      return Ember.$.getJSON(url).then(function(res) {
        return res.data.children;
      });
  }

});
//
// export default Ember.Route.extend({
//
//   model: function() {
//     let url = "https://www.reddit.com/r/gifs/top.json?sort=new&limit=100",
//         gifsPromise = Ember.$.getJSON(url);
//
//     gifsPromise.then(function(obj) {
//       let objList = obj.data.children,
//           Gif = Ember.Object.extend({
//             title: this.title,
//             image: this.url
//           });
//
//       return objList.map(function(d) {
//         return Gif.create(d.data);
//       });
//     });
//   }

// });
