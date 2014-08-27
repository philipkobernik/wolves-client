var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var HowlsPage = require('./pages/howls');
var querystring = require('querystring');

module.exports = Router.extend({
  routes: {
    '' : 'home',
    'howls': 'howls',
    'login': 'login',
    'auth/callback': 'authCallback',
  },

  home: function() {
    this.trigger('page', new HomePage());
    console.log('home page');
  },
  howls: function() {
    this.trigger('page', new HowlsPage());
    console.log('howls');
  },
  login: function() {
    var redirectUri = encodeURIComponent('http://localhost:3000/auth/callback');
    window.location = 'http://wolves.technology/authorize?redirect_uri=' + redirectUri;
  },

  authCallback: function() {
    var hash = window.location.hash.slice(1)
    var tokenUri = querystring.parse(hash).access_token;
    app.me.token = tokenUri;
    this.redirectTo('/howls');
  },
});

