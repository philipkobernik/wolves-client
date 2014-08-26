var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var HowlsPage = require('./pages/howls');

module.exports = Router.extend({
  routes: {
    '' : 'home',
    'howls': 'howls'
  },

  home: function() {
    this.trigger('page', new HomePage());
    console.log('home page');
  },
  howls: function() {
    this.trigger('page', new HowlsPage());
    console.log('howls');
  },
});

