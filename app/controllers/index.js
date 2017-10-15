import Ember from 'ember';

export default Ember.Controller.extend({
  gifsList: function() {
    let model = this.get('model'),
        gifList = model.data.children;

    gifList.forEach(function(gif, index, selfArray) {
      if (/whale/.test(gif.data.title) || /whale/.test(gif.data.url) || /nsfw/.test(gif.data.thumbnail)) {
        selfArray.splice(index, 1);
      }

      if (/\.gifv$/.test(gif.data.url) && selfArray[index] !== undefined) {
        selfArray[index].data.url = gif.data.url.replace(new RegExp("\.gifv$", 'igm'), '.mp4');
      }

      if (/v\.redd\.it/.test(gif.data.url)) {
        selfArray[index].data.url = gif.data.media.reddit_video.fallback_url;
      }

    });

    this.set('model', gifList);
    return gifList;
  },
  index: 0,
  currentGif: function() {
    if (this.get('index') === 0) { this.gifsList(); }
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
      // Source: https://codepen.io/shaikmaqsood/pen/XmydxJ/
      var $temp = $('<input>');
      $('body').append($temp);
      $temp.val(url).select();
      document.execCommand('copy');
      $temp.remove();

      // Create and show popup
      var popupClass = 'gif-copy-popup';
      var popupSelector = `.${popupClass}`;
      if ($(popupSelector).length === 0) {
        var popup = $('<h2>Copied!</h2>');
        popup.addClass(popupClass);
        $(event.target).parent().append(popup);

        // Fade out and remove popup
        setTimeout(function() {
          $(popupSelector).fadeOut('slow', function() {
            $(this).remove();
          });
        }, 800);
      }
    }
  }
});
