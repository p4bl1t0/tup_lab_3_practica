import Title from "./components/Title.js";
import "./components/Header.css";

const Header = () => {
    const site = {
        pageTitle: "Unidad 1.2 - Práctica",
        pageBody: "Implementación de árbol de componentes y propiedades en React.",
      };
  return (
    <div>
      <div className="navBar-container">
        <ul>
          <li>
            <a href="default.asp">Home</a>
          </li>
          <li>
            <a href="news.asp">News</a>
          </li>
        </ul>
      </div>
      <hr></hr>
      <div className="Title-container">
        <Title pageHeader={site.pageTitle} />
      </div>
    </div>
  );
};

export default Header;
