import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

const CartSection = () => {
  return (
    <View style={styles.cartSection}>
      <View style={styles.cartSectionHeader}>
        <Text style={styles.cartSectionTitle}>Sale Details</Text>
        <Text style={styles.clearAllButton}>Clear All</Text>
      </View>
      <View style={styles.cartSectionContent}>
        {/* <MaterialIcons name="shopping-cart" size={100} color="#ccc" /> */}
        <Text style={styles.cartSectionText}>No Items added</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartSection: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
  },
  cartSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cartSectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  clearAllButton: {
    color: '#666',
  },
  cartSectionContent: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cartSectionText: {
    marginTop: 10,
    color: '#666',
  },
});

export default CartSection;