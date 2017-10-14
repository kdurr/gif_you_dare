import Ember from 'ember';

export function isGif(params) {
  if (/\.gif$/.test(params[0])) {
    return Ember.String.htmlSafe(`<img class='gif' src=${params[0]}>`);
  } else if (/\.mp4$/.test(params[0])) {
    return Ember.String.htmlSafe(`<video autoplay loop class='embeded-video gif'><source src=${params[0]} type='video/mp4'></video>`);
  } else if (/gfycat/.test(params[0])) {
    let gfyRegexp = /(?:gfycat\.com\/)([a-zA-Z0-9]+)/,
        gfyCatKey = gfyRegexp.exec(params[0])[1];

    return Ember.String.htmlSafe(`
      <div>
        <div style='position:relative;padding-bottom:57%''>
          <iframe src='https://gfycat.com/ifr/${gfyCatKey}' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe>
          <a href='#' class='gif' style="position:absolute; top:0; left:0; display:inline-block; width:100%; height:100%; z-index:5;"></a>
        </div>
      </div>`);
  } else {
    return Ember.String.htmlSafe(`<div class='gif'><h1 class='no-gif'>Sorry, this one isn't supported yet!</h1></div>`);
  }
}

export default Ember.Helper.helper(isGif);
