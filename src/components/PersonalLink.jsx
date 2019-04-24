import React from "react";

function PersonalLink(props) {
  var myStyle={
    fontSize: '10pt',
    textAlign: 'center',
    color: 'grey'
  }
  return(
    <div style={myStyle}>{(props.name).toUpperCase()}</div>
  );
}

export default PersonalLink;
