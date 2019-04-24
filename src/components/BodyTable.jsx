import React from "react";
import PersonalPanel from "./PersonalPanel";
import About from "./About";
import AddPost from "./AddPost";
import PostList from "./PostList";
import Network from "./Network";

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
      <div>
        <AddPost/>
        <PostList/>
      </div>
      <div>
        <Network/>
      </div>
    </div>
  );
}

export default BodyTable;
