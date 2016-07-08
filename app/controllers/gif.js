import Ember from 'ember';

export default Ember.Controller.extend({
  images: function() {
    let model = this.get('model');
    // let gifList = model.data.children;
    // TINA NOTE: remove this later and include more than just imgur
    let gifList = model.data.children.filterBy('data.domain','i.imgur.com');

    gifList.forEach(function(gif) {
      if (/whale/.test(gif.data.title) || /whale/.test(gif.data.url) || /nsfw/.test(gif.data.thumbnail)) {
        Ember.set(gif, 'data.url', '');
      }

      if (/\.gifv$/.test(gif.data.url)) {
        Ember.set(gif, 'data.url', gif.data.url.replace(new RegExp("\.gifv$", 'igm'), '.gif'));
      }
    });
  return gifList;
  }.property('model.data.children.[]')
});
