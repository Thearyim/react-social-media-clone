import React from "react";
import PersonalPanel from "./PersonalPanel";
import About from "./About";
import AddPost from "./AddPost";
import PostList from "./PostList";
import Network from "./Network";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpg";

class BodyTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts : [
        {image: image1, title: "Weather", text: "It's sunny today!"}, {image: image2, title: "Workout", text: "I ran 10 miles today!"}
      ]
    };
  }



  render(){
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
          <PostList posts={this.state.posts}/>
        </div>
        <div>
          <Network/>
        </div>
      </div>
    );
  }
}

export default BodyTable;
