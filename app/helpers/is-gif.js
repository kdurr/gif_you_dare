import Ember from 'ember';

export function isGif(params) {
  if (/\.gif$/.test(params[0])) {
    return Ember.String.htmlSafe(`<img class='gif' src=${params[0]}>`);
  } else if (/\.mp4$/.test(params[0])) {
    return Ember.String.htmlSafe(`<video autoplay loop class='embeded-video gif'><source src=${params[0]} type='video/mp4'></video>`);
  } else if (/gfycat/.test(params[0])) {
    let gfyRegexp = /(?:gfycat\.com\/)([a-zA-Z0-9]+)/,
        gfyCatKey = gfyRegexp.exec(params[0])[1],
        gfyCatUrl = 'http://giant.gfycat.com/' + gfyCatKey + '.gif'

    return Ember.String.htmlSafe(`<img class='gif' src=${gfyCatUrl}>`);
  } else {
    return Ember.String.htmlSafe(`<div class='gif'><h1>Sorry, nothing found :(</h1></div>`)
  }
}

export default Ember.Helper.helper(isGif);
