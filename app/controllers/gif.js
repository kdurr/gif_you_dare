import Ember from 'ember';

export default Ember.Controller.extend({
  // images: function() {
  //   let model = this.get('model');
  //   let gifList = model.data.children;
  //
  //   gifList.forEach(function(gif) {
  //     if (/whale/.test(gif.data.title) || /whale/.test(gif.data.url) || /nsfw/.test(gif.data.thumbnail)) {
  //       Ember.set(gif, 'data.url', '');
  //     }
  //
  //     if (/\.gifv$/.test(gif.data.url)) {
  //       Ember.set(gif, 'data.url', gif.data.url.replace(new RegExp("\.gifv$", 'igm'), '.mp4'));
  //     }
  //   });
  //   return gifList;
  // }.property('model.data.children.[]')
});
