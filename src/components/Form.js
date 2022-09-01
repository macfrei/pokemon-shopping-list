import { nanoid } from "nanoid";
import "./Form.css";

export default function Form({ onAddItem }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.elements.name;
    const newItem = {
      name: input.value,
      id: nanoid(),
    };

    onAddItem(newItem);
    form.reset();
    input.focus();
  }

  return (
    <form className="Form" onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="itemName">Shopping list item</label>
      <input type="text" id="itemName" name="name" />
      <button className="Form__button" type="submit">
        Add item
      </button>
    </form>
  );
}
