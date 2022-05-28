import Header from "./Header";
import Main from "./Main";

const Page = ({ pageTitle, pageBody }) => {
  return (
    <div>
      <Header pageTitle={pageTitle}></Header>
      <Main pageBody={pageBody} />
    </div>
  );
};

export default Page;
