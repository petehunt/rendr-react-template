var ReactView = require('../react_rendr');
var Repos = require('../../components_js/Repos');

module.exports = ReactView.extend({
  className: 'repos_index_view',
  getComponent: function() {
    console.log('text')
    return Repos({repos: this.collection.toJSON()});
  }
});
module.exports.id = 'repos/index';
