import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";

const Page = ({ pageTitle, pageBody }) => {
  return (
    <div>
      <Header pageTitle={pageTitle}></Header>
      <Main
        linkOne="https://www.google.com/"
        linkTwo="https://www.youtube.com/"
        pageBody={pageBody}
      ></Main>
    </div>
  );
};

export default Page;
