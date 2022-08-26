import { nanoid } from "nanoid";

export default function Form({ onAddItem }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = event.target.name;
    const newItem = {
      name: input.value,
      id: nanoid(),
    };

    onAddItem(newItem);
    form.reset();
    input.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="itemName">Shopping list item</label>
      <input type="text" id="itemName" name="name" />
      <button type="submit">Add item</button>
    </form>
  );
}
