import React from "react";
import "./BlogPost.css";

const BlogPost = ({ title, body }) => {
  return (
    <div className="blog-post">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default BlogPost;
