import React from "react";
import Title from "./Title";
import Body from "./Body";
import "./BlogPost.css";

const BlogPost = ({ title, body }) => {
  return (
    <div className="blog-post">
      <Title title={title} />
      <Body body={body} />
    </div>
  );
};

export default BlogPost;
