export default function ShoppingListItem({ name }) {
  return (
    <li>
      <input type="checkbox" id={name} />
      <label htmlFor={name}>{name}</label>
    </li>
  );
}
