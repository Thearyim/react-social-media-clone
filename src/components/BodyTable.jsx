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
    console.log("post index", post);
    console.log(this.state.posts.indexOf(post));
    return this.state.posts.indexOf(post);
  }

  handleNewLike(likedPost){
    console.log(this.findPostIndex(likedPost));
    const newPost = {image: likedPost.image, title: likedPost.title, description: likedPost.description, likes: likedPost.likes++, id: likedPost.id}

    const newPosts = this.state.posts.map((post) => {
      console.log(post);
      console.log(this.newPost);
      if(post.id = this.likedPost.id){
        this.newPost;
      } else {post;}
    });
    console.log("newPosts");
    console.log(newPosts);
    // console.log(likedPost);
    // const newPost = {image: likedPost.image, title: likedPost.title, description: likedPost.description, likes: likedPost.likes++, id: likedPost.id}
    // console.log(newPost);
    // const newPosts = this.state.posts.splice(this.findPostIndex(likedPost), 1, newPost);
    // console.log(newPosts);
    this.setState({posts : newPosts});

    console.log(this.state.posts);
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
