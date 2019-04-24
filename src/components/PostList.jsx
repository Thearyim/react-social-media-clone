import React from "react";
import Post from "./Post";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpg";

const Posts =[
  {image: image1, title: "Weather", text: "It's sunny today!"}, {image: image2, title: "Workout", text: "I ran 10 miles today!"}
];

function PostList() {
  return(
    <div>
      {Posts.map((post, index) =>
        <Post
          image={post.image}
          title={post.title}
          text={post.text}
          key={index}
        />
      )}
    </div>
  );
}

export default PostList;
