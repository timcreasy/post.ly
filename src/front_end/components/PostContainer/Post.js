import React from "react";

const Post = React.createClass({
  render: function() {
    return (
      <li className="list-group-item">
        <strong>@{this.props.post.username} </strong>
        <span>{this.props.post.body}</span>
      </li>
    );
  }
});

module.exports = Post;