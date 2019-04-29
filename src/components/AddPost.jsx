import React from "react";

function AddPost() {
  var postStyle={
    backgroundColor: 'lightblue',
    padding: '10px',
    border: '1px solid grey',
    margin: '5px'
  }
  var formStyle={
    fontSize: '12pt',
    padding: '15px',
    border: '1px solid blue',
    color: 'blue',
    width: '75%',
    margin: '5px'
  }
  var buttonStyle = {
    backgroundColor: '#712242',
    width: '40px',
    height: '40px',
    fontSize: '12pt',
    color: 'lightgrey',
    margin: '5px'
  }
  var postButtonStyle = {
    width: '100px',
    height: '30px',
    paddingLeft: '5px'
  }

  return(
    <div style={postStyle}>
      <form>
        <button style={buttonStyle}></button>
        <input style={formStyle} placeholder="Post title"></input>
        <input style={formStyle} placeholder="What's happening?"></input>
        <button style={postButtonStyle} type="submit">Post it!</button>
      </form>
    </div>
  );
}

export default AddPost;
