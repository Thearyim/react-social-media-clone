import React from "react";

function Post(props) {
  var postGridStyle={
    display: 'grid',
    gridTemplateColumns: '110px 1fr',
    border: '1px solid grey',
    marginLeft: '5px',
    marginRight: '5px',
  }
  var imgStyle = {
    width: '90px',
    padding: '10px'
  }
  return(
    <div style={postGridStyle}>
      <div>
        <img style={imgStyle} src={props.post.image}></img>
      </div>
      <div>
        <h4>{props.post.title}</h4>
        <p>{props.post.description}</p>
      </div>
    </div>
  );
}

export default Post;
