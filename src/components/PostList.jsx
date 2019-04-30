import React from "react";
import Post from "./Post";
import PropTypes from 'prop-types';

function PostList(props) {
  return(
    <div>
      {props.posts.map((post) =>
        <Post
          post={post}
          key={post.id}
          onNewLike={props.onNewLike}
        />
      )}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
  onNewLike: PropTypes.func
}

export default PostList;
