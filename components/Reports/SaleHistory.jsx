import React from 'react';
import { Text, View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const SaleHistory = ({orders}) => {
//   const fetchedOrders = useSelector(state => state.CustomerSlice.orders);

  const renderOrderItem = ({ item ,index}) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{index+1}</Text>

      <Text style={styles.cell}>{item.createdAt.slice(0, 10)}</Text>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.totalPrice}</Text>
      <Text style={styles.cell}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
        <View>
            <Text> Sale History</Text>
        </View>
      <View style={styles.header}>
      <Text style={styles.headerCell}>S.No</Text>

        <Text style={styles.headerCell}>Date</Text>
        <Text style={styles.headerCell}>Order ID</Text>
        <Text style={styles.headerCell}>Total Price</Text>
        <Text style={styles.headerCell}>Status</Text>
      </View>
      {orders?.length > 0 ? (
        <FlatList
          data={orders}
          renderItem={renderOrderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<ActivityIndicator size="large" color="#31572c" />}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      ) : (
        <ActivityIndicator size="large" color="#31572c" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
    width:'100%',
    height:'100%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerCell: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cell: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
});

export default SaleHistory;



// import React from 'react';
// import { Text, View, ScrollView, ActivityIndicator, FlatList, StyleSheet, Dimensions } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { useSelector } from 'react-redux';

// const windowWidth = Dimensions.get('window').width;

// const FetchOrders = () => {
//   const fetchedOrders = useSelector(state => state.CustomerSlice.orders);

//   const renderOrderItem = ({ item }) => (
//     <View style={styles.row}>
//       <Text style={styles.cell}>{item.createdAt.slice(0, 10)}</Text>
//       <Text style={styles.cell}>{item.id}</Text>
//       <Text style={styles.cell}>{item.totalPrice}</Text>
//       <Text style={styles.cell}>{item.status}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerCell}>Date</Text>
//         <Text style={styles.headerCell}>Order ID</Text>
//         <Text style={styles.headerCell}>Total Price</Text>
//         <Text style={styles.headerCell}>Status</Text>
//       </View>
//       {fetchedOrders.length > 0 ? (
//         <FlatList
//           data={fetchedOrders}
//           renderItem={renderOrderItem}
//           keyExtractor={(item) => item.id}
//           ListEmptyComponent={<ActivityIndicator size="large" color="#31572c" />}
//         />
//       ) : (
//         <ActivityIndicator size="large" color="#31572c" />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//     width:'100%',
//     height:'100%'
//   },
//   header: {
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#ffffff',
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//     backgroundColor: '#ffffff',
//     borderRadius: 5,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   cell: {
//     flex: 1,
//     fontSize: 16,
//     color: '#333333',
//   },
// });

// export default FetchOrders;
