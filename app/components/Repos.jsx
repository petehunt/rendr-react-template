/** @jsx React.DOM */
var React = require('../vendor/react/React');

var Repos = React.createClass({
  render: function() {
    var items = this.props.repos.map(function(repo) {
      var repoURL = '/repos/' + repo.owner.login + '/' + repo.name;
      var ownerURL = '/users/' + repo.owner.login;
      return (
        <li>
          <a href={repoURL}>{repo.name}</a>, by <a href={ownerURL}>{repo.owner.login}</a>
        </li>
      );
    });
    return (
      <div>
        <h1>Repos</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
});

module.exports = Repos;