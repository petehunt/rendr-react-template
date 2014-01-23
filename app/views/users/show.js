var ReactView = require('../react_rendr');
var User = require('../../components_js/User');

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
