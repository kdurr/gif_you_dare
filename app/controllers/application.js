import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggle: function(direction) {
      // $('.ham-menu.pink-menu').hide();
      $('.ui.sidebar').sidebar('toggle');
    }
  }
});
