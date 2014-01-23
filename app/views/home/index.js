var ReactView = require('../react_rendr');

var React = require('../vendor/react/React');
var Home = require('../../components_js/Home');

module.exports = ReactView.extend({
  className: 'home_index_view',
  getComponent: function() {
    return Home();
  }
});
module.exports.id = 'home/index';
