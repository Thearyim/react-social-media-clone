import React from "react";
import likes from '../assets/images/likes.png';
import PropTypes from 'prop-types';

function Post(props) {
  var postGridStyle={
    display: 'grid',
    gridTemplateColumns: '110px 1fr',
    marginLeft: '5px',
    marginRight: '5px',
  }
  var imgStyle = {
    width: '90px',
    padding: '10px'
  }
  var likesLine ={
    paddingLeft: '35px'
  }
  var likeImgStyle = {
    width: '20px',
    paddingLeft: '10px'
  }
  var postStyle={
    border: '1px solid grey'
  }

//  function handleNewLike

  return(
    <div style={postStyle}>
      <div style={postGridStyle}>
        <div>
          <img style={imgStyle} src={props.post.image}></img>
          <p style={likesLine}><span id="likes">{props.post.likes}<img onClick={() => {
            props.onNewLike(props.post);}} style={likeImgStyle} src={likes}></img></span></p>
        </div>
        <div>
          <h4>{props.post.title}</h4>
          <p>{props.post.description}</p>
        </div>
      </div>

    </div>
  );
}

Post.propTypes = {
  onNewLike: PropTypes.func
}

export default Post;
