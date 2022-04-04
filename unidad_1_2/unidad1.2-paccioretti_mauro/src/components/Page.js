import Header from "./Header";
import Main from "./Main";

const Page = ({ site }) => {
  return (
    <div>
      <Header pageTitle={site.pageTitle} />
      <Main
        pageBody={site.pageBody}
        enlace1={"https://www.google.com"}
        enlace2={"https://github.com/mauropaccioretti"}
      >
        Frase enviada como children desde page a main
      </Main>
    </div>
  );
};

export default Page;
