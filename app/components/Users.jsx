/** @jsx React.DOM */
var React = require('../vendor/react/React');

var Users = React.createClass({
  render: function() {
    var items = this.props.users.map(function(user) {
      return <li><a href={'/users/' + user.login}>{user.login}</a></li>;
    });
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
});

module.exports = Users;