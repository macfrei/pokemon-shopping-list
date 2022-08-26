export default function ShoppingListItem({ name, onDelete }) {
  return (
    <li>
      <input type="checkbox" id={name} />
      <label htmlFor={name}>{name}</label>
      <button onClick={onDelete}>Delete Item</button>
    </li>
  );
}
