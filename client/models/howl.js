var Model = require('ampersand-model');

module.exports = Model.extend({
  props: {
    id: 'string', // special property!
    content: 'string',
    createdAt: 'date',
    user: 'object',
  }

});
