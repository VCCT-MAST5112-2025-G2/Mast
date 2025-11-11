import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MenuItem } from "../screens/MenuItem";

interface CardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<CardProps> = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.h3}>{item.dishName}</Text>
      <Text style={styles.p}>{item.description}</Text>
      <Text style={styles.p}><Text style={{fontWeight: 'bold'}}>Course:</Text> {item.course}</Text>
      <Text style={styles.p}><Text style={{fontWeight: 'bold'}}>Price:</Text> R{item.price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    borderWidth: 1,
    borderColor: '#ced4da',
    backgroundColor: '#e6f2ff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1, // for Android
  },
  h3: {
    marginTop: 0,
    color: '#007bff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  p: {
    marginVertical: 5,
    color: '#6c757d',
    fontSize: 14,
  },
});

export default MenuItemCard;
