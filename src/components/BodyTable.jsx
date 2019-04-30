import React from "react";
import PersonalPanel from "./PersonalPanel";
import About from "./About";
import AddPost from "./AddPost";
import PostList from "./PostList";
import Network from "./Network";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpg";
import { v4 } from 'uuid';

class BodyTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts : [
        {image: image1, title: "Weather", description: "It's sunny today!", likes: 5, id:v4()}, {image: image2, title: "Workout", description: "I ran 10 miles today!", likes: 3, id: v4()}
      ]
    };
    this.handleNewPost = this.handleNewPost.bind(this);
    this.handleNewLike = this.handleNewLike.bind(this);
    this.findPostIndex = this.findPostIndex.bind(this);
  }

  handleNewPost(newPost){
    const newPosts = this.state.posts.slice();
    newPosts.push(newPost);
    this.setState({posts : newPosts});
    console.log(this.state.posts);
  }

  findPostIndex(post) {
    for(let i=0; i < this.state.posts.length; i++){
      if(post.id == this.state.posts[i].id){
        return i;
      }
    }
  }

  handleNewLike(likedPost){
    var index = this.findPostIndex(likedPost);
    console.log(index);
    const newPost = {image: likedPost.image, title: likedPost.title, description: likedPost.description, likes: likedPost.likes+1, id: likedPost.id}
    const newPosts = this.state.posts.slice();
    newPosts.splice(index, 1, newPost);
    this.setState({posts : newPosts});
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
          <AddPost onNewPostCreation={this.handleNewPost}/>
          <PostList posts={this.state.posts} onNewLike={this.handleNewLike}/>
        </div>
        <div>
          <Network/>
        </div>
      </div>
    );
  }
}

export default BodyTable;
