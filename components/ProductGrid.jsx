import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const productsData = [
  {
    id: 1,
    name: 'Radish',
    category: 'Vegetables',
    qty: 1450,
    unit: 'kgs',
    mrp: 140,
    sale: 140,
    // image: require('../assets/radish.png'),
    image: 'https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  // Add more products here
];

const ProductItem = ({ item }) => {
  return (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productQty}>
        Qty: {item.qty} {item.unit}
      </Text>
      <Text style={styles.productMrp}>MRP: ₹{item.mrp}</Text>
      <Text style={styles.productSale}>Sale: ₹{item.sale} (per {item.unit})</Text>
    </View>
  );
};

const ProductsGrid = () => {
  const renderItem = ({ item }) => <ProductItem item={item} />;

  return (
    <View style={styles.productsGrid}>
      <FlatList
        data={productsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productsGrid: {
    flex: 1,
    padding: 10,
  },
  productItem: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  productName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  productQty: {
    fontSize: 12,
  },
  productMrp: {
    fontSize: 12,
  },
  productSale: {
    fontSize: 12,
  },
});

export default ProductsGrid;