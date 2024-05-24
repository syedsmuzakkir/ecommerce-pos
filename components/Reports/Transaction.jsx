import React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  Button, Platform ,
} from 'react-native';
import {useSelector} from 'react-redux';

import DateTimePicker from '@react-native-community/datetimepicker';

const Transaction = ({orders}) => {
//   const fetchedOrders = useSelector(state => state.CustomerSlice.orders);

  const renderOrderItem = ({item, index}) => (
    <View style={styles.row}>

        
     
        <Text style={styles.cell}>{index + 1}</Text>

        <Text style={styles.cell}>{item.createdAt.slice(0, 10)}</Text>
        <Text style={styles.cell}>{item.id}</Text>
        <Text style={styles.cell}>{item.totalPrice}</Text>
        <Text style={styles.cell}>{item.status}</Text>
      
    </View>
  );

  // Date Picker 

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [date1, setDate1] = useState(new Date());
  const [show1, setShow1] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);

    }
  };



  const showDatePicker = () => {
    setShow(true);
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };


  ///

  const onChange1 = (event, selectedDate) => {
    setShow1(Platform.OS === 'ios');
    if (selectedDate) {
      setDate1(selectedDate);

    }
  };
  const showDatePicker1 = () => {
    setShow1(true);
  };

  const formatDate1 = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <View style={styles.container}>
        <View style = {{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
      <View style={{width:'20%'}}>
        <Text> Transaction History</Text>
      </View>
      <View style = {{ flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    // paddingVertical: 10,
    paddingHorizontal: 5,
    // backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000',
    width:'30%', borderCurve:'circular'}}>
            
            <TextInput style= {{borderWidth:1, width:'100%', borderRadius:20
                    }}
                    placeholder='Enter Name Or Order Id'>

            </TextInput>
        </View>
{/* /// Date Picker */}
        <View>
        <Button onPress={showDatePicker} title={formatDate(date)} /> 
        {/* // Display selected date in button title */}

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Text>{`Selected Date: ${date.toDateString()}`}</Text>
    </View>

    <View>
        <Button onPress={showDatePicker1} title={formatDate1(date1)} /> 
        {/* // Display selected date in button title */}

      {show1 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date1}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange1}
        />
      )}
      <Text>{`Selected Date: ${date1.toDateString()}`}</Text>
    </View>

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
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <ActivityIndicator size="large" color="#31572c" />
          }
          contentContainerStyle={{flexGrow: 1}}
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
    width: '100%',
    height: '100%',
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

export default Transaction;

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
