import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { MenuItem } from "./MenuItem";
import MenuItemCard from "../screens/MenuItemCard";

interface HomeProps {
  items: MenuItem[];
  onAddClick: () => void;
}

const Home: React.FC<HomeProps> = ({ items, onAddClick }) => {
  const courseAverages = items.reduce((acc, item) => {
    const course = acc.find((c) => c.course === item.course);
    if (course) {
      course.total += item.price;
      course.count++;
      course.average = course.total / course.count;
    } else {
      acc.push({
        course: item.course,
        total: item.price,
        count: 1,
        average: item.price,
      });
    }
    return acc;
  }, [] as { course: string; total: number; count: number; average: number }[]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>Chef’s Menu</Text>
      <Text style={styles.total}>Total menu items: {items.length}</Text>

      {courseAverages.map((course) => (
        <Text key={course.course} style={styles.total}>
          Average {course.course} price: ${course.average.toFixed(2)}
        </Text>
      ))}

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
    flex: 1,
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
