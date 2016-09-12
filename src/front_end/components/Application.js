import React from "react";
import PostContainer from "./PostContainer";

let Application = React.createClass({
  render: function() {
    return (
      <div>
        <PostContainer />
      </div>
    );
  }
});

module.exports = Application;
