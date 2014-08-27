var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
  template: templates.includes.howls,
  bindings: {
    'model.timeAgo': {
      type: 'text',
      hook: 'time-ago'
    },
    'model.content': {
      type: 'text',
      hook: 'content'
    }

  },
  events: {
  },
});
