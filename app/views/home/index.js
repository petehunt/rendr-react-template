var ReactView = require('../react');
var _ = require('underscore');

var React = require('../../vendor/react/React');
var Hello = require('../../components/Hello');

module.exports = ReactView.extend({
  className: 'home_index_view',
  getComponent: function() {
    return Hello();
  }
});
module.exports.id = 'home/index';
