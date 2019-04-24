import React from "react";

function NetworkConnection(props) {
  var postGridStyle={
    display: 'grid',
    gridTemplateColumns: '110px 1fr',
    border: '1px solid grey',
    marginLeft: '5px',
    marginRight: '5px',
  }
  var imgStyle = {
    width: '90px',
    padding: '10px',
    height: '80px'
  }
  var buttonStyle = {
    backgroundColor: '#1A73CD',
    width: '90px',
    height: '30px',
    fontSize: '12pt',
    color: 'lightgrey',
    marginBottom: '10px'
  }
  return(
    <div style={postGridStyle}>
      <div>
        <img style={imgStyle} src={props.image}></img>
      </div>
      <div>
        <h4>{props.name}</h4>
        <button style={buttonStyle}>Add</button>
      </div>
    </div>
  );
}

export default NetworkConnection;
