import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { MenuItem } from "./MenuItem";
import MenuItemCard from "./MenuItemCard";

interface GuestMenuProps {
  items: MenuItem[];
  onHomeClick: () => void;
  onManageClick: () => void;
}

const GuestMenu: React.FC<GuestMenuProps> = ({ items, onHomeClick, onManageClick }) => {
  const [selectedCourse, setSelectedCourse] = useState<string>("All");

  const filteredItems = selectedCourse === "All"
    ? items
    : items.filter(item => item.course === selectedCourse);

  const courses = ["All", ...Array.from(new Set(items.map(item => item.course)))];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Guest Menu</Text>

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Filter by Course:</Text>
        <Picker
          selectedValue={selectedCourse}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedCourse(itemValue as string)}
        >
          {courses.map((course) => (
            <Picker.Item key={course} label={course} value={course} />
          ))}
        </Picker>
      </View>

      {filteredItems.length === 0 ? (
        <Text style={styles.empty}>No dishes found for this course.</Text>
      ) : (
        <View style={styles.menuList}>
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </View>
      )}

      <View style={styles.buttonContainer}>
        <Pressable style={styles.homeBtn} onPress={onHomeClick}>
          <Text style={styles.buttonText}>Chef's Menu</Text>
        </Pressable>
        <Pressable style={styles.manageBtn} onPress={onManageClick}>
          <Text style={styles.buttonText}>Manage Menu</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2a7a3a',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Changed from 'center'
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  filterLabel: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  picker: {
    width: 150, // Set a fixed width
    height: 40,
  },
  menuList: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  empty: {
    textAlign: 'center',
    color: '#777',
    marginTop: 20,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20,
  },
  homeBtn: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  manageBtn: {
    backgroundColor: '#2a7a3a',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backBtn: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 30,
    alignSelf: 'center',
  },
  backBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GuestMenu;
