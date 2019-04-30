import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function AddPost(props) {
  var _title = null;
  var _description = null;

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

  function handleSubmitForm(event){
    event.preventDefault();
    console.log(_title.value);
    console.log(_description.value);
    props.onNewPostCreation({title: _title.value, description: _description.value, image: '', likes: 0, id: v4()});
    _title = '';
    _description = '';
  }

  return(
    <div style={postStyle}>
      <form onSubmit={handleSubmitForm}>
        <button style={buttonStyle}></button>
        <input style={formStyle} placeholder="Post title"
          ref={(input) => {_title=input;}}></input>
        <input style={formStyle} placeholder="What's happening?"
          ref={(input) => {_description=input;}}></input>
        <button style={postButtonStyle} type="submit">Post it!</button>
      </form>
    </div>
  );
}

AddPost.propTypes = {
  onNewPostCreation : PropTypes.func
}

export default AddPost;
