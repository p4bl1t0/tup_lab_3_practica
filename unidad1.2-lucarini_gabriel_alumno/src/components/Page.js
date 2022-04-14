import Header from "./Header.js";
import Main from "./Main.js";

const Page = ({ title, body}) => {
  return (
    <div>
      <Header title={title}></Header>
      <Main
        li1="https://www.google.com.ar"
        li2="https://www.infobae.com"
        body={body}
      />
    </div>
  );
};

export default Page;