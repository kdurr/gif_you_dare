import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggle: function(direction) {
      $('.ui.sidebar').sidebar('toggle');
    },
    closeSidebar: function() {
      $('.list-item').on('click', function() {
        $('.ui.sidebar').sidebar('toggle');
      });
    }
  }
});
