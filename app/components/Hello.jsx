/** @jsx React.DOM */
var React = require('../vendor/react/React');

var Hello = React.createClass({
  handleClick: React.autoBind(function() {
    alert('clicked');
  }),
  render: function() {
    return <p onClick={this.handleClick}>Hello world! Click me</p>;
  }
});

module.exports = Hello;