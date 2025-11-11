import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { MenuItem } from "./MenuItem";
import MenuItemCard from "../screens/MenuItemCard";

interface HomeProps {
  items: MenuItem[];
  onAddClick: () => void;
  onGuestClick: () => void;
}

const Home: React.FC<HomeProps> = ({ items, onAddClick, onGuestClick }) => {
  const calculateAveragePrices = () => {
    const coursePrices: { [key: string]: { total: number; count: number } } = {};

    items.forEach((item) => {
      if (!coursePrices[item.course]) {
        coursePrices[item.course] = { total: 0, count: 0 };
      }
      coursePrices[item.course].total += item.price;
      coursePrices[item.course].count += 1;
    });

    return Object.keys(coursePrices).map((course) => ({
      course,
      average: coursePrices[course].total / coursePrices[course].count,
    }));
  };

  const averagePrices = calculateAveragePrices();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>Chef’s Menu</Text>
      <Text style={styles.total}>Total menu items: {items.length}</Text>

      {averagePrices.length > 0 && (
        <View style={styles.averagePricesContainer}>
          <Text style={styles.averagePricesTitle}>Average Prices by Course:</Text>
          {averagePrices.map((data) => (
            <Text key={data.course} style={styles.averagePriceText}>
              {data.course}: R{data.average.toFixed(2)}
            </Text>
          ))}
        </View>
      )}

      <View style={styles.buttonContainer}>
        <Pressable style={styles.manageBtn} onPress={onAddClick}>
          <Text style={styles.buttonText}>Manage Menu</Text>
        </Pressable>
        <Pressable style={styles.guestBtn} onPress={onGuestClick}>
          <Text style={styles.buttonText}>Guest Menu</Text>
        </Pressable>
      </View>

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
    backgroundColor: '#f8f9fa',
  },
  h1: {
    color: '#007bff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  total: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20,
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
  guestBtn: {
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
  empty: {
    color: '#777',
    marginTop: 25,
  },
  menuList: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    gap: 15,
  },
  averagePricesContainer: {
    marginTop: 10,
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#e6f2ff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  averagePricesTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#007bff',
  },
  averagePriceText: {
    fontSize: 14,
    color: '#6c757d',
  },
});

export default Home;
