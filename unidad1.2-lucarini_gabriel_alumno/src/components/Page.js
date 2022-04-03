import Header from "./Header.js";
import Main from "./Main.js";

const Page = ({ pageTitle, pageBody }) => {
  return (
    <div>
      <Header pageTitle={pageTitle}></Header>
      <Main
        li1="https://www.google.com.ar"
        li2="https://www.infobae.com"
        pageBody={pageBody}
      />
    </div>
  );
};

export default Page;