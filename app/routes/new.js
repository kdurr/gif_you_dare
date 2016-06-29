import Ember from 'ember';

let gifs = [{
  id: 1,
  title: 'Panda cuties',
  image: 'http://i.imgur.com/QbNmpiY.gif'
}];

export default Ember.Route.extend({
  model() {
    return gifs;
  }
});
