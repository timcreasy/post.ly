import React from "react";

const NewPostForm = React.createClass({

  getInitialState: function() {
    return ({ body: "" });
  },

  handlePostInput: function(e) {
    this.setState({ body: e.target.value });
  },

  submitPost: function(e) {
    e.preventDefault();
    this.props.addPost({ body: this.state.body });
  },

  render: function() {
    return (
      <form>
        <div className="form-group">
          <div className="input-group">
            <input className="form-control" placeholder="Enter a post" onChange={this.handlePostInput}/>
            <span className="input-group-btn">
              <button className="btn btn-default" onClick={this.submitPost}>Add Post</button>
            </span>
          </div>
        </div>
      </form>
    );
  }
});

module.exports = NewPostForm;