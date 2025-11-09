import React, { useState } from "react";
import { View, Text } from "react-native";
import Home from "../screens/Home";
import ManageMenu from "../screens/ManageMenu";
import GuestMenu from "../screens/GuestMenu";
import { MenuItem } from "../screens/MenuItem";

type Page = 'Home' | 'ManageMenu' | 'GuestMenu';

const App: React.FC = () => {
    const [items, setItems] = useState<MenuItem[]>([
    { id: 1, dishName: 'Bruschetta', description: 'Toasted bread with tomatoes, garlic, and basil.', course: 'Starters', price: 85 },
    { id: 2, dishName: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil.', course: 'Starters', price: 95 },
    { id: 3, dishName: 'Spaghetti Carbonara', description: 'Pasta with eggs, cheese, pancetta, and pepper.', course: 'Main Course', price: 150 },
    { id: 4, dishName: 'Margherita Pizza', description: 'Pizza with tomatoes, mozzarella, and basil.', course: 'Main Course', price: 130 },
    { id: 5, dishName: 'Tiramisu', description: 'Coffee-flavoured Italian dessert.', course: 'Desserts', price: 75 },
    { id: 6, dishName: 'Panna Cotta', description: 'Sweetened cream thickened with gelatin.', course: 'Desserts', price: 70 },
  ]);
    const [currentPage, setCurrentPage] = useState<Page>('GuestMenu');

  const handleAddItem = (item: MenuItem) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return (
          <Home
            items={items}
            onAddClick={() => setCurrentPage('ManageMenu')}
            onGuestClick={() => setCurrentPage('GuestMenu')} // Placeholder for GuestMenu
          />
        );
      case 'ManageMenu':
        return (
          <ManageMenu
            items={items}
            onAddItem={handleAddItem}
            onRemoveItem={handleRemoveItem}
            onHomeClick={() => setCurrentPage('Home')}
            onGuestClick={() => setCurrentPage('GuestMenu')}
          />
        );
      case 'GuestMenu':
        return (
          <GuestMenu
            items={items}
            onHomeClick={() => setCurrentPage('Home')}
            onManageClick={() => setCurrentPage('ManageMenu')}
          />
        );
      default:
        return <Home items={items} onAddClick={() => setCurrentPage('ManageMenu')} onGuestClick={() => setCurrentPage('GuestMenu')} />;
    }
  };

  return <View style={{ flex: 1 }}>{renderPage()}</View>;
};

export default App;