import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, Alert } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { MenuItem } from "./MenuItem";

interface ManageMenuProps {
  items: MenuItem[];
  onAddItem: (item: MenuItem) => void;
  onRemoveItem: (id: number) => void;
  onHomeClick: () => void;
  onGuestClick: () => void;
}

const ManageMenu: React.FC<ManageMenuProps> = ({ items, onAddItem, onRemoveItem, onHomeClick, onGuestClick }) => {
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("Starters");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    if (!dishName || !description || !price) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    const newItem: MenuItem = {
      id: Date.now(),
      dishName,
      description,
      course,
      price: parseFloat(price),
    };
    onAddItem(newItem);
    setDishName("");
    setDescription("");
    setCourse("Starters");
    setPrice("");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Manage Menu Items</Text>

      <View style={styles.addItemForm}>
        <Text>Dish Name</Text>
        <TextInput
          style={styles.input}
          value={dishName}
          onChangeText={setDishName}
          placeholder="e.g. Grilled Chicken"
        />

        <Text>Description</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          value={description}
          onChangeText={setDescription}
          placeholder="Short description of the dish..."
          multiline
        />

        <Text>Course</Text>
        <Picker
          selectedValue={course}
          style={styles.input}
          onValueChange={(itemValue) => setCourse(itemValue)}>
          <Picker.Item label="Starters" value="Starters" />
          <Picker.Item label="Mains" value="Mains" />
          <Picker.Item label="Desserts" value="Desserts" />
        </Picker>

        <Text>Price (R)</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="e.g. 75.00"
          keyboardType="numeric"
        />

        <Pressable style={styles.saveBtn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Add Dish</Text>
        </Pressable>
      </View>

      <View style={styles.currentItemsContainer}>
        <Text style={styles.subtitle}>Current Menu Items</Text>
        {items.length === 0 ? (
          <Text style={styles.empty}>No dishes added yet.</Text>
        ) : (
          items.map((item) => (
            <View key={item.id} style={styles.menuItemRow}>
              <Text style={styles.menuItemText}>{item.dishName} (R{item.price.toFixed(2)})</Text>
              <Pressable style={styles.removeBtn} onPress={() => onRemoveItem(item.id)}>
                <Text style={styles.removeBtnText}>Remove</Text>
              </Pressable>
            </View>
          ))
        )}
      </View>

      <View style={styles.btnRow}>
        <Pressable style={styles.homeBtn} onPress={onHomeClick}>
          <Text style={styles.btnText}>Chef's Menu</Text>
        </Pressable>
        <Pressable style={styles.guestBtn} onPress={onGuestClick}>
          <Text style={styles.btnText}>Guest Menu</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2a7a3a',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
    color: '#2a7a3a',
  },
  addItemForm: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 30,
  },
  input: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    marginBottom: 15,
  },
  textarea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  saveBtn: {
    backgroundColor: '#2a7a3a',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  homeBtn: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  guestBtn: {
    backgroundColor: '#6c757d', // A neutral color for guest button
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  currentItemsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    fontSize: 16,
    flex: 1,
  },
  removeBtn: {
    backgroundColor: '#dc3545',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  removeBtnText: {
    color: 'white',
    fontSize: 14,
  },
  empty: {
    textAlign: 'center',
    color: '#777',
    marginTop: 10,
  },
});

export default ManageMenu;
