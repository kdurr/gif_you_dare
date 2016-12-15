import Ember from 'ember';

export default Ember.Controller.extend({
  gifsList: function() {
    let model = this.get('model'),
        gifList = model.data.children;

    gifList.forEach(function(gif, index, selfArray) {
      if (/whale/.test(gif.data.title) || /whale/.test(gif.data.url) || /nsfw/.test(gif.data.thumbnail)) {
        selfArray[index].data.url = '';
      }

      if (/\.gifv$/.test(gif.data.url)) {
        selfArray[index].data.url = gif.data.url.replace(new RegExp("\.gifv$", 'igm'), '.gif');
      }
    });

    return gifList;
  },
  images: function() {
    return this.gifsList();
  }.property('model.data.children.[]'),

  actions: {
    nextGif: function(gif) {
      let gifs = this.gifsList(),
          index = gifs.indexOf(gif) + 1;
      // debugger;
      if (index >= 0 && index <= gifs.get('length') - 1) {
        // return this.transitionToRoute('gif', gifs.objectAt(index))
        return gifs.objectAt(index);
      }
    },
    copyUrl: function(url) {
      // TINA NOTE: copy url: https://www.sitepoint.com/javascript-copy-to-clipboard/
      // debugger;
    }
  }
});
