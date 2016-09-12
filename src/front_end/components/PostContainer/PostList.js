import React from "react";
import Post from "./Post";

const PostList = React.createClass({
  render: function() {

    let posts = this.props.posts.map((post) => {
      return (
        <Post key={post._id} post={post} />
      );
    });

    return (
      <ul className="list-group">
        {posts}
      </ul>
    );

  }
});

module.exports = PostList;