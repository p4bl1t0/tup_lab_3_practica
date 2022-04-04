import React from "react";
import Header from "./Header.js";
import Main from "./Main";

const Page = ({pageTitle, pageBody}) => {
  return (
    <div>
      <Header pageTitle={pageTitle} />
      <Main
        pageBody={pageBody}
        link1="https://www.facebook.com/"
        link2="https://www.amazon.com"
      />
    </div>
  );
};

export default Page;
