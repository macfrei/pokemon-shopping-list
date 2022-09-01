import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ShoppingListItem from "./components/ShoppingListItem";

const initialShoppingList = [
  { name: "Potion", id: "1" },
  { name: "Pokeball", id: "2" },
  { name: "Para Healer", id: "3" },
  { name: "Superball", id: "4" },
  { name: "Masterball", id: "5" },
];

function App() {
  const [shoppingList, setShoppingList] = useState(initialShoppingList);

  function addItem(newItem) {
    setShoppingList([newItem, ...shoppingList]);
  }

  function deleteItem(id) {
    const newShoppingList = shoppingList.filter((item) => item.id !== id);
    setShoppingList(newShoppingList);
  }

  function handleComplete(id) {
    const index = shoppingList.findIndex((item) => item.id === id);
    const item = shoppingList.find((item) => item.id === id);

    const updatedList = [
      ...shoppingList.slice(0, index),
      { ...item, isDone: !item.isDone },
      ...shoppingList.slice(index + 1),
    ];

    setShoppingList(updatedList);
  }

  return (
    <div className="App">
      <h1>Pokemon Shopping List</h1>
      <Form onAddItem={addItem} />
      <ul className="App__list">
        {shoppingList.map((item) => (
          <ShoppingListItem
            name={item.name}
            key={item.id}
            onDelete={() => deleteItem(item.id)}
            onComplete={() => handleComplete(item.id)}
            isDone={item.isDone}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
