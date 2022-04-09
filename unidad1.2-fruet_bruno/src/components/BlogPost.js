import React from "react";
import Title from "./Title";
import Body from "./Body";
import "./BlogPost.css";

const BlogPost = ({ newsTitle, newsBody }) => {
  return (
    <div className="blogPostMain">
      <Title title={newsTitle} />
      <div className="body">
        <Body body={newsBody} />
      </div>
    </div>
  );
};

export default BlogPost;
