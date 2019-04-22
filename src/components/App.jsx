import React from "react";
import Header from "./Header";
import BodyTable from "./BodyTable";

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
          <BodyTable/>
      </div>
    </div>
  );
}

export default App;
