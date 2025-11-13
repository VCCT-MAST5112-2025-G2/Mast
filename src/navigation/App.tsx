import React, { useState } from "react";
import { View, Text } from "react-native";
import Home from "../screens/Home";
import ManageMenu from "../screens/ManageMenu";
import GuestMenu from "../screens/GuestMenu";
import { MenuItem } from "../screens/MenuItem";

type Page = 'Home' | 'ManageMenu' | 'GuestMenu';

const App: React.FC = () => {
    const [items, setItems] = useState<MenuItem[]>([]);
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