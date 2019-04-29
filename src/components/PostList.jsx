import React from "react";
import Post from "./Post";
import PropTypes from 'prop-types';

function PostList(props) {
  return(
    <div>
      {props.posts.map((post, index) =>
        <Post
          image={post.image}
          title={post.title}
          text={post.text}
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
