var ReactView = require('../react');
var Repos = require('../../components/Repos');

module.exports = ReactView.extend({
  className: 'repos_index_view',
  getComponent: function() {
    return Repos({repos: this.collection.toJSON()});
  }
});
module.exports.id = 'repos/index';
