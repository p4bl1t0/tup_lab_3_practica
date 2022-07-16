import React from "react";

const List = ({ textArray }) => {
  const listItemNumber = (number, index) => {
    number = Math.round(number);
    return Number(number) % 2 === 0 ? (
      <li key={index}>{number} es par</li>
    ) : (
      <li key={index}>{number} es impar</li>
    );
  };

  const listItemText = (text, index) => {
    return <input type="text" defaultValue={text} key={index} />;
  };

  const listItems = textArray.map((text, index) => {
    if (Number(text)) {
      return listItemNumber(text, index);
    }
    return listItemText(text, index);
  });

  return <ul className="list">{listItems}</ul>;
};

export default List;
