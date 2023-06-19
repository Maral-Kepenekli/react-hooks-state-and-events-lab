import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdd, setIsAdd] = useState(true);

  function buttonClick(event) {
    setIsAdd((currentIsAdd) => !currentIsAdd)
  }

  const buttonClass = isAdd ? "add" : "remove";
  const liClass = isAdd ? null : "in-cart";
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={buttonClick}>{isAdd ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
