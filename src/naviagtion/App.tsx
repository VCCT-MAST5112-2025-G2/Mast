import React, { useState } from "react";
import Home from "../screens//Home";
import AddItem from "../screens/AddItem";
import { MenuItem } from "../screens/MenuItem";
import "./App.css";

const App: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [showAddPage, setShowAddPage] = useState(false);

  const handleAddItem = (item: MenuItem) => {
    setItems([...items, item]);
    setShowAddPage(false);
  };

  return showAddPage ? (
    <AddItem onAdd={handleAddItem} onCancel={() => setShowAddPage(false)} />
  ) : (
    <Home items={items} onAddClick={() => setShowAddPage(true)} />
  );
};

export default App;
