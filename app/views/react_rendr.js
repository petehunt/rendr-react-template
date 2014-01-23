var RendrView = require('rendr/shared/base/view');
var React = require('../vendor/react/React');

module.exports = RendrView.extend({
  getComponent: function() {
    throw new Error('You must override getComponent()');
  },
  getInnerHtml: function() {
    var html;
    React.renderComponentToString(this.getComponent(), function(_html) {
      html = _html;
    });
    return html;
  },
  postRender: function() {
    React.renderComponent(this.getComponent(), this.el);
  }
});