import React from "react";

export const BlogPost = (title, body) => {
  return (
    <>
      <div className="blog-post">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </>
  );
};
