import React from "react";
import Post from "./Post";
import PropTypes from 'prop-types';

function PostList(props) {
  return(
    <div>
      {props.posts.map((post, index) =>
        <Post
          post={post}
          key={index}
        />
      )}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array
}

export default PostList;
