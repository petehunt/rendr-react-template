/** @jsx React.DOM */
var React = require('../vendor/react/React');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Wecome to GitHub Browser!</h1>
        <p>This is a little app that demonstrates how to use Rendr by consuming GitHub's public Api.</p>
        <p>Check out <a href="/repos">Repos</a> or <a href="/users">Users</a>.</p>
      </div>
    );
  }
});

module.exports = Home;