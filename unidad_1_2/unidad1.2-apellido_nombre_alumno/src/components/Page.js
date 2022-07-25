import Header from "./Header";
import Main from "./Main";

const links = {
  //Envio de props a Main
  Searcher: "www.google.com",
  Videos: "www.youtube.com",
};

const Page = ({ pageTitle, pageBody }) => {
  return (
    <div>
      <Header pageTitle={pageTitle} />
      <Main pageBody={pageBody} link1={links.Searcher} link2={links.Videos} />
    </div>
  );
};
export default Page;
