var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
  events: {
    'click a[href]': 'handleLinkClick'
  },
  template: templates.body,
  autoRender: true,
  handleLinkClick: function(e) {
    var target = e.target;
    var isLocal = target.host === window.location.host;
    if (isLocal && !e.altKey && !e.metaKey && !e.shiftKey && !e.ctrlKey) {
      e.preventDefault();
      app.router.history.navigate(target.pathname, {trigger: true });
    }
  },

});
