import "./App.css";

const shoppingList = [
  { name: "Potion", id: "1" },
  { name: "Pokeball", id: "2" },
  { name: "Para Healer", id: "3" },
  { name: "Superball", id: "4" },
  { name: "Masterball", id: "5" },
];

function App() {
  return (
    <div className="App">
      <ul className="App__list">
        {shoppingList.map((item) => (
          <ShoppingListItem name={item.name} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
