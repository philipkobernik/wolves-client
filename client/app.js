var MainView = require('./views/main');
var domready = require('domready');
var Router = require('./router');

window.app = {
  init: function() {
    var self = this;
    self.router = new Router();

    domready(function() {
      self.view = new MainView({
        el: document.body
      });

      self.router.history.start({
        pushState: true
      });
    });
  }
};

window.app.init();