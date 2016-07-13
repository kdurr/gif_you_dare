import Ember from 'ember';

export function isGif(params) {
  if (/\.gif$/.test(params[0])) {
    return Ember.String.htmlSafe(`<img class='gif' src=${params[0]}>`);
  } else {
    if (/gfycat/.test(params[0])) {
      // return Ember.String.htmlSafe(`<iframe class='imgur-embed' width='100%' height='325' frameborder='1' src=${params[0]}#embed></iframe>`);
      return Ember.String.htmlSafe(`<div style='position:relative;padding-bottom:calc(100% / 1.85)'><iframe src=${params[0]} frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>`);
    } else {
      return Ember.String.htmlSafe(`<video autoplay loop class="embeded-video"><source src=${params[0]} type="video/mp4"></video>`);
    }
  }
}


// <div style='position:relative;padding-bottom:calc(100% / 1.85)'>
//   <iframe src="{{gif.data.url}}" frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen>
//   </iframe>
// </div>


// <video autoplay loop poster="placeholder.jpg" id="backgroundgif"><source src=${params[0]} type="video/mp4"></video>

export default Ember.Helper.helper(isGif);
