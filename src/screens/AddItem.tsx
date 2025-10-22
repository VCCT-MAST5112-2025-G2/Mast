import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { MenuItem } from "../screens/MenuItem";

interface AddItemProps {
  onAdd: (item: MenuItem) => void;
  onCancel: () => void;
}

const AddItem: React.FC<AddItemProps> = ({ onAdd, onCancel }) => {
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("Starters");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    if (!dishName || !description || !price) {
      alert("Please fill in all fields.");
      return;
    }
    const newItem: MenuItem = {
      id: Date.now(),
      dishName,
      description,
      course,
      price: parseFloat(price),
    };
    onAdd(newItem);
  };

  return (
    <ScrollView style={styles.addItemPage}>
      <Text style={styles.h2}>Add Menu Item</Text>
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

        <View style={styles.btnRow}>
          <Pressable style={styles.saveBtn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Add Dish</Text>
          </Pressable>
          <Pressable style={styles.cancelBtn} onPress={onCancel}>
            <Text style={styles.btnText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addItemPage: {
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    padding: 40,
  },
  h2: {
    color: '#2a7a3a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  addItemForm: {
    gap: 12,
    maxWidth: 400,
    marginHorizontal: 'auto',
    marginTop: 20,
  },
  input: {
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 14,
  },
  textarea: {
    minHeight: 70,
    textAlignVertical: 'top',
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  saveBtn: {
    backgroundColor: '#2a7a3a',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cancelBtn: {
    backgroundColor: '#aaa',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    color: 'white',
  },
});

export default AddItem;
