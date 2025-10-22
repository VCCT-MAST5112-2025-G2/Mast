import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { MenuItem } from "./MenuItem";
import MenuItemCard from "../screens/MenuItemCard";

interface HomeProps {
  items: MenuItem[];
  onAddClick: () => void;
}

const Home: React.FC<HomeProps> = ({ items, onAddClick }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>Chef’s Menu</Text>
      <Text style={styles.total}>Total menu items: {items.length}</Text>

      <Pressable style={styles.addBtn} onPress={onAddClick}>
        <Text style={styles.addBtnText}>+ Add Menu Item</Text>
      </Pressable>

      {items.length === 0 ? (
        <Text style={styles.empty}>No dishes yet. Add your first dish below.</Text>
      ) : (
        <View style={styles.menuList}>
          {items.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
    minHeight: '100vh',
  },
  h1: {
    color: '#2a7a3a',
    fontSize: 24,
    fontWeight: 'bold',
  },
  total: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  addBtn: {
    backgroundColor: '#2a7a3a',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  addBtnText: {
    color: 'white',
  },
  empty: {
    color: '#777',
    marginTop: 25,
  },
  menuList: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
});

export default Home;
