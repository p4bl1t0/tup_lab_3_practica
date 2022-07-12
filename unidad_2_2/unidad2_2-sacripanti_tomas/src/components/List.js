import React from "react";
import Element from "./Element";

const List = ({ textArray, editElement, deleteElement }) => {

  const listItems = textArray.map((text, index) => {
    return <Element text={text} index={index} editElement={editElement} deleteElement={deleteElement} />
  });

  return <ul className="list">{listItems}</ul>;
};

export default List;
