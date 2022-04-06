import React from "react";

const Page = ({ children}) => {
  console.log(children);
  return (
    <div className="page-class">
        {children}
        <p>esta es una frase de prueba :P</p>
    </div>
  );
};

export default Page;
