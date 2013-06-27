var ReactView = require('../react');
var Users = require('../../components/Users');

module.exports = ReactView.extend({
  className: 'users_index_view',
  getComponent: function() {
    return Users({users: this.collection.toJSON()});
  }
});
module.exports.id = 'users/index';
