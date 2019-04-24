import React from "react";
import PersonalPanel from "./PersonalPanel";
import About from "./About";

function BodyTable(){
  var myStyle = {

    display: 'grid',
    border: 'black',
    gridTemplateColumns: '33% 33% 33%'

  }
  return(
    <div style={myStyle}>
      <div>
        <PersonalPanel/>
        <About/>
      </div>
      <div>Two</div>
      <div>Three</div>
    </div>
  );
}

export default BodyTable;
