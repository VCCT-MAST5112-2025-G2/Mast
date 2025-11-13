import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";

import { MenuItem } from "./MenuItem";
import MenuItemCard from "./MenuItemCard";

interface GuestMenuProps {
  items: MenuItem[];
  onHomeClick: () => void;
  onManageClick: () => void;
}
// list to show only the the selected course's dishes
const GuestMenu: React.FC<GuestMenuProps> = ({ items, onHomeClick, onManageClick }) => {
  const [selectedCourse, setSelectedCourse] = useState<string>("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const filteredItems = selectedCourse === "All"
    ? items
    : items.filter(item => item.course === selectedCourse);

  const courses = ["All", ...Array.from(new Set(items.map(item => item.course)))];

  const handleCourseSelect = (course: string) => {
    setSelectedCourse(course);
    setIsDropdownOpen(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Guest Menu</Text>

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Filter by Course:</Text> 
        <View style={{ position: 'relative' }}>
          <Pressable style={styles.dropdownButton} onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
            <Text style={styles.dropdownButtonText}>{selectedCourse}</Text>
          </Pressable>

          {isDropdownOpen && (
            <View style={styles.dropdownOptionsContainer}>
              {courses.map((course) => (
                <Pressable
                  key={course}
                  style={styles.dropdownOption}
                  onPress={() => handleCourseSelect(course)}
                >
                  <Text style={styles.dropdownOptionText}>{course}</Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>

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
//styling for buttons and colors and containers 
const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#007bff',
  },
  filterContainer: {
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    marginBottom: 20,
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  dropdownButton: {
    backgroundColor: '#007bff', 
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ced4da',
    minWidth: 120,
    alignItems: 'center',
    marginTop: 5, 
  },
  dropdownButtonText: {
    fontSize: 16,
    color: 'white', 
  },
  dropdownOptionsContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 5,
  },
  dropdownOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  dropdownOptionText: {
    fontSize: 16,
    color: '#495057',
  },
  menuList: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    gap: 15,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  manageBtn: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  backBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GuestMenu;
