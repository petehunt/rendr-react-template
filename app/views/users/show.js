var ReactView = require('../react');
var User = require('../../components/User');

module.exports = ReactView.extend({
  className: 'users_show_view',

  getTemplateData: function() {
    var data = ReactView.prototype.getTemplateData.call(this);
    data.app = this.app;
    return data;
  },

  getComponent: function() {
    return User(this.getTemplateData());
  }
});
module.exports.id = 'users/show';
