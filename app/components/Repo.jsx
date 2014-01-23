/** @jsx React.DOM */
var React = require('../vendor/react/React');

var Repo = React.createClass({
  render: function() {
    var lastBuildIndicator = null;
    if (this.props.build.last_build_id) {
      var travisURL = 'https://travis-ci.org/' + this.props.owner.login +
        '/' + this.props.name + '/builds/' + this.props.build.last_build_id;
      lastBuildIndicator = (
        <div>
          <br />
          <p><a href={travisURL}>Latest TravisCI build</a></p>
        </div>
      );
    }
    return (
      <div>
        {lastBuildIndicator}
        <a href={'/users/' + this.props.owner.login}>{this.props.owner.login}</a> / {this.props.name}<br />
        <h3>Stats</h3>
        <div className="row-fluid">
          <div className="span6">
            <table className="table">
              <tbody>
                <tr>
                  <th>Description</th>
                  <td>{this.props.description}</td>
                </tr>
                <tr>
                  <th>Language</th>
                  <td>{this.props.language}</td>
                </tr>
                <tr>
                  <th>Watchers</th>
                  <td>{this.props.watchers_count}</td>
                </tr>
                <tr>
                  <th>Forks</th>
                  <td>{this.props.forks_count}</td>
                </tr>
                <tr>
                  <th>Open Issues</th>
                  <td>{this.props.open_issues_count}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Repo;