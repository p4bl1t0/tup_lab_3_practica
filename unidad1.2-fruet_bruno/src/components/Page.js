import React from "react";
import Main from "./Main";
import Header from "./Header";

const Page = ({ props }) => {
  return (
    <div>
      <Header title={props.pageTitle} />
      <Main body={props.pageBody} />
    </div>
  );
};

export default Page;
