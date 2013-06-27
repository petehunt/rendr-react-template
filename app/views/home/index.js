var ReactView = require('../react');

var React = require('../../vendor/react/React');
var Home = require('../../components/Home');

module.exports = ReactView.extend({
  className: 'home_index_view',
  getComponent: function() {
    return Home();
  }
});
module.exports.id = 'home/index';
