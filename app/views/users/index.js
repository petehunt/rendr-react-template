var ReactView = require('../react_rendr');
var Users = require('../../components_js/Users');

module.exports = ReactView.extend({
  className: 'users_index_view',
  getComponent: function() {
    return Users({users: this.collection.toJSON()});
  }
});
module.exports.id = 'users/index';
