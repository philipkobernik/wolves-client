var MainView = require('./views/main');
var domready = require('domready');
var Router = require('./router');
var HowlCollection = require('./models/howl-collection');

window.app = {
  init: function() {
    var self = this;
    self.router = new Router();

    this.howls = new HowlCollection();

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
