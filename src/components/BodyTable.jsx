import React from "react";
import PersonalPanel from "./PersonalPanel";

function BodyTable(){
  var myStyle = {

    display: 'grid',
    border: 'black',
    gridTemplateColumns: '33% 33% 33%'

  }
  return(
    <div style={myStyle}>
      <div><PersonalPanel/></div>
      <div>Two</div>
      <div>Three</div>
    </div>
  );
}

export default BodyTable;
