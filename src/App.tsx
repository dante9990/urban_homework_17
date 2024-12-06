import { useEffect } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";
import { fetchItems } from "./state/effects";

function App() {
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="container">
      <h1>Список Предметов</h1>
      <AddItem />
      <ListItem />
    </div>
  );
}

export default App;
