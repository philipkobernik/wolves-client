var View = require('ampersand-view');
var templates = require('../templates');
var HowlView = require('../views/howl');

module.exports = View.extend({
  template: templates.pages.howls,
  events: {
    'submit form': 'handleFormSubmit'
  },
  render: function() {
    this.renderWithTemplate();
    this.renderCollection(app.howls, HowlView, this.queryByHook('howls-container'));
  },
  handleFormSubmit: function(e) {
    e.preventDefault();

    var howlInput = this.queryByHook('howl-input')
    var inputValue = howlInput.value;
    if(howlInput.value) {
      howlModel = app.howls.create({ content: inputValue, }, {
        error: function() {
          howlInput.value = inputValue;
          app.howls.remove(howlModel);
        },
        success: function() {
          howlInput.value = '';
        }
      });

    } else {
    }
  },
});
