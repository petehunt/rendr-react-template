/** @jsx React.DOM */
var React = require('../vendor/react/React');
var LazyUserRepos = require('./LazyUserRepos');

var User = React.createClass({
  render: function() {
    return (
      <div>
        <img src={this.props.avatar_url} width="80" height="80" /> {this.props.login} ({this.props.public_repos} public repos)

        <br />

        <div class="row-fluid">
          <div class="span6">
            <LazyUserRepos app={this.props.app} login={this.props.login} />
          </div>

          <div class="span6">
            <h3>Info</h3>
            <br />
            <table class="info-table table">
              <tbody>
                <tr>
                  <th>Location</th>
                  <td>{this.props.location}</td>
                </tr>
                <tr>
                  <th>Blog</th>
                  <td>{this.props.blog}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = User;