/** @jsx React.DOM */
var React = require('../vendor/react/React');

var UserRepos = React.createClass({
  render: function() {
    var items = this.props.repos.map(function(repo) {
      return (
        <tr>
          <td><a href={'/repos/' + repo.full_name}>{repo.name}</a></td>
          <td>{repo.watchers_count}</td>
          <td>{repo.forks_count}</td>
        </tr>
      );
    });
    return (
      <div>
        <h3>Repos</h3>
        <table class="repos-table table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Watchers</th>
              <th>Forks</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = UserRepos;