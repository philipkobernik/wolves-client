var MainView = require('./views/main');
var domready = require('domready');
var Router = require('./router');
var HowlCollection = require('./models/howl-collection');
var Me = require('./models/me');

window.app = {
  init: function() {
    this.router = new Router();
    this.me = new Me();
    this.howls = new HowlCollection();

    var self = this;

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
