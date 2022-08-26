import { useState } from "react";
import "./ShoppingListItem.css";

export default function ShoppingListItem({ name, onDelete }) {
  const [isDone, setIsDone] = useState(false);
  const className = isDone ? "ListItem__strike-through" : "";

  return (
    <li>
      <input onChange={() => setIsDone(!isDone)} type="checkbox" id={name} />
      <label htmlFor={name} className={className}>
        {name}
      </label>
      <button
        className="ListItem__button"
        onClick={onDelete}
        aria-label="Delete item"
      >
        X
      </button>
    </li>
  );
}
