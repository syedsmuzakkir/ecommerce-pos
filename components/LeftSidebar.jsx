import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { FontAwesome5 } from '@expo/vector-icons';

const LeftSidebar = () => {
  return (
    <View style={styles.sidebar}>
      <View style={styles.sidebarItem [{display:'flex'}]}>
        {/* <FontAwesome5 name="shopping-basket" size={24} color="#333" /> */}
        <Text style={styles.sidebarItemText}>Customer</Text>
        <Text style={styles.sidebarItemText}>Customer</Text>
        <Text style={styles.sidebarItemText}>Customer</Text>
        <Text style={styles.sidebarItemText}>Customer</Text>

      </View>
      {/* Add more sidebar items here */}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: '#f0f0f0',
    paddingTop: 20,
    width: 200,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  sidebarItemText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default LeftSidebar;