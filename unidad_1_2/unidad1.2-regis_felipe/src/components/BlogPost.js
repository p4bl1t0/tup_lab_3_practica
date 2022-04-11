import React from "react";
import Body from "./Body";
import Title from "./Title";

import './BlogPost.css'

const BlogPost = ({title, body}) => {
  return (
    <div className="blogPostDiv">
        <Title title={title} />
        <Body body={body} />
    </div>

  )
};

export default BlogPost;
