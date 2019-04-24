import React from "react";

function AddPost() {
  var postStyle={
    backgroundColor: 'lightblue',
    padding: '10px',
    border: '1px solid grey',
    margin: '5px',
    marginBottom: '0'
  }
  var formStyle={
    fontSize: '12pt',
    padding: '12px',
    border: '1px solid blue',
    color: 'blue',
    width: '80%',
    marginLeft: '5px'
  }

  return(
    <div style={postStyle}>
      <form>
        <button></button>
        <input style={formStyle} placeholder="What's happening?"></input>
      </form>
    </div>
  );
}

export default AddPost;
