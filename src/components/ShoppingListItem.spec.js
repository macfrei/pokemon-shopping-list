import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingListItem from "./ShoppingListItem";

describe("ShoppingListItem", () => {
  it("renders an input with a label and a button", () => {
    render(<ShoppingListItem name="Pokeball" />);

    // console.log für alle nodes die gerendert werden
    // screen.debug();

    const input = screen.getByLabelText("Pokeball");
    const button = screen.getByRole("button", { name: "Delete item" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('adds a class "ListItem__strike-through" to the label if "isDone" is true', () => {
    render(<ShoppingListItem name="Pokeball" isDone={true} />);

    const label = screen.getByText("Pokeball");

    expect(label).toHaveClass("ListItem__strike-through");
  });

  it('calls a callback function "onDelete" if the button is clicked', async () => {
    const callbackFunction = jest.fn();
    const user = userEvent.setup();
    render(<ShoppingListItem name="Pokeball" onDelete={callbackFunction} />);

    const button = screen.getByRole("button", { name: "Delete item" });

    await user.click(button);

    expect(callbackFunction).toHaveBeenCalled();
  });
});
