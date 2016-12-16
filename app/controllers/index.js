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

    this.set('model', gifList);
    return gifList;
  },
  index: 0,
  currentGif: function() {
    if (this.get('index') === 0) { this.gifsList() };
    return this.get('model.').objectAt(this.get('index'));
  }.property('index'),

  actions: {
    nextGif: function(gif) {
      let gifs = this.get('model'),
          index = gifs.indexOf(gif) + 1;

      if (index >= 0 && index <= gifs.get('length') - 1) {
        this.incrementProperty('index');
      }
    },
    copyUrl: function(url) {
      // TINA NOTE: copy url: https://www.sitepoint.com/javascript-copy-to-clipboard/
      // debugger;
    }
  }
});
