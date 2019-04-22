import React from "react";

function PersonalPanel() {
  var myStyle = {
    display: 'grid',
    gridTemplateRows: '100px 100px',
    border: '1px solid grey',
    margin: '5px'
  }
  var headerStyle={
    backgroundColor: 'lightblue'
  }
  var imgStyle={
    backgroundColor: 'lightblue',
    border: '2px solid white',
    borderRadius: '15px',
    width: '100px',
    marginTop: '50px',
    marginLeft: '10px',
    float: 'left'
  }
  var nameStyle={
    marginLeft: '150px'
  }
  return (
    <div style={myStyle}>
      <div style={headerStyle}>
        <img style={imgStyle} src='https://www.materialui.co/materialIcons/social/person_white_216x216.png'/>
      </div>
      <div>
        <p style={nameStyle}>Kellie A. Corrigan</p>
      </div>
    </div>
  );
}

export default PersonalPanel;
