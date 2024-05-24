import React from 'react';
import { View, StyleSheet } from 'react-native';

import LeftSidebar from '../components/LeftSidebar';
import ProductsGrid from '../components/ProductGrid';
import CartSection from '../components/CartSection';
const MainScreen = () => {
  return (
    <View style={styles.mainContent}>
      <LeftSidebar />
      <View style={styles.rightContent}>
        <ProductsGrid />
        <CartSection />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    flexDirection: 'row',
  },
  rightContent: {
    flex: 1,
  },
});

export default MainScreen;