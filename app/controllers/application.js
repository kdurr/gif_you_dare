import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggle: function() {
      $('.ui.sidebar')
        .sidebar('setting', 'transition', 'push')
        .sidebar('toggle');
    },
    closeSidebar: function() {
      $('.ui.sidebar')
        .sidebar('setting', 'transition', 'push')
        .sidebar('toggle');
      this.send('refreshGifs');
    }
  }
});
