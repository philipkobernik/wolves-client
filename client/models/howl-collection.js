var Collection = require('ampersand-rest-collection');
var Howl = require('./howl');

module.exports = Collection.extend({

  initialize: function() {
    var self = this;
    this.fetch();

    this.fetchRealtime();

  },
  model: Howl,
  url: 'http://wolves.technology/howls',
  comparator: function(model) {
    return -model.createdAt.valueOf();
  },
  fetchRealtime: function() {
    var self = this;
    var connection = new WebSocket('ws://wolves.technology');
    connection.onmessage = function(event) {
      var message = JSON.parse(event.data);
      if(message.channel === self.url && message.action === 'update'){
        self.fetchById(message.id);
      }
    }
  }
});
