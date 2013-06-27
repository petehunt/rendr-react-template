/** @jsx React.DOM */
var React = require('../vendor/react/React');
var UserRepos = require('./UserRepos');

var LazyUserRepos = React.createClass({
  getInitialState: function() {
    return {repos: null, error: false};
  },
  componentDidMount: function() {
    var spec = {
      repos: {collection: 'Repos', params: {user: this.props.login}}
    };
    this.props.app.fetch(spec, function(err, result) {
      if (err) {
        this.setState({error: true});
      } else {
        this.setState({repos: result.repos.toJSON()});
      }
    }.bind(this));
  },
  render: function() {
    if (this.state.error) {
      return <p>There was an error fetching the repo list.</p>;
    }
    if (!this.state.repos) {
      return <p>Loading repo list...</p>;
    }
    return <UserRepos repos={this.state.repos} />;
  }
});

module.exports = LazyUserRepos;