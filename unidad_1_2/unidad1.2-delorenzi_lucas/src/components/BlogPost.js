import React from "react";
import Title from "./Title";
import Body from "./Body";
import './BlogPost.css';

const BlogPost = ({ title, body }) => {
  return (
    <div>
      <Title title={title} />
      <Body className="blog-post-body" body={body} />
    </div>
  );
};

export default BlogPost;
