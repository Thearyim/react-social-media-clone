import React from "react";
import Header from "./Header";

function App(){
  var myStyle={
    paddingTop: '50px'
  }
  return(
    <div>
      <Header/>
      <div style={myStyle}>
        <br/>
        <hr/>
      </div>
    </div>
  );
}

export default App;
