import "./ShoppingListItem.css";

export default function ShoppingListItem({ name, onDelete }) {
  return (
    <li>
      <input type="checkbox" id={name} />
      <label htmlFor={name}>{name}</label>
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
