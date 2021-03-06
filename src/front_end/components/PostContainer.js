import React from "react";
import NewPostForm from "./PostContainer/NewPostForm";
import PostList from "./PostContainer/PostList";

const PostContainer = React.createClass({

  getInitialState: function() {
    return ({ posts: [] });
  },

  componentDidMount: function() {
    this.loadPosts();
    setInterval(this.loadPosts(), 2000);
  },

  loadPosts: function() {

    $.ajax({
      url: '/api/posts',
      method: "GET",
      dataType: "json",
      success: (posts) => {
        this.setState({ posts: posts });
      },
      error: function(xhr, status, err) {
        console.log("There was an error:", err);
      }
    });

  },

  submitPost: function(newPost) {
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: JSON.stringify(newPost),
      contentType: 'application/json',
      success: (data) => {
        console.log("Added post:", data);
        this.loadPosts();
      },
      error: () => {
        console.log("Oops, something happened");
      }
    });
  },

  render: function() {
    return (
      <div>
        <h1>Recent Posts</h1>
        <NewPostForm addPost={this.submitPost}/>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
});

module.exports = PostContainer;