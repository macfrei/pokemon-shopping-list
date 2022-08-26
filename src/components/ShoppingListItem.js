import "./ShoppingListItem.css";

export default function ShoppingListItem({
  name,
  onDelete,
  onComplete,
  isDone,
}) {
  const className = isDone ? "ListItem__strike-through" : "";

  return (
    <li>
      <input onChange={onComplete} type="checkbox" id={name} checked={isDone} />
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
