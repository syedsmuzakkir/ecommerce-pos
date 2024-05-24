

// import React, {useState, useEffect} from 'react';
// import {TouchableOpacity, Text, View, Pressable} from 'react-native';
// import styles from './styles';
// // import { fetchCategories } from "../../Api/FetchProducts";
// // import {
// //   FontAwesome5,
// // //   AntDesign,
// // //   Fontisto,
// // } from "@expo/vector-icons";
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Fontisto from 'react-native-vector-icons/Fontisto';


// import {useNavigation} from '@react-navigation/native';

// import { fetchCategories } from '../../api/fetchProducts';
// import {addOrders, addCustomer} from '../../redux/slice/customerSlice';

// import {AddAllProducts} from '../../redux/slice/getAllProductSlice';
// import {useDispatch} from 'react-redux';
// import { fetchingOrders } from '../../api/fetchOrders';
// import { fetchingCustomers } from '../../api/fetchCustomers';
// const Home = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();


//   const getProduct = async () => {
//     try {
//       const AllProducts = await fetchCategories();
//       console.log('products',AllProducts)
//       // const Products = AllProducts;
//       dispatch(AddAllProducts(AllProducts));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchOrders = async () => {
//     try {
//       console.log('calling fetching');
//       const data = await fetchingOrders();
//       console.log('after fetching');
//       // const data = response;
//       console.log('orders data', data);
//       data.map(value => {
//         console.log('order value', value);
//         dispatch(addOrders(value));
//       });
//     } catch (error) {
//       console.log('orders error', error);
//     }
//   };
//   const fetchCustomers = async () => {
//     try {
//       console.log('calling fetching');
//       const response = await fetchingCustomers();
//       console.log('after fetching');
//       const data = response;
//       console.log('customers data', data);
//       data.map(value => {
//         console.log('customer value', value);
//         dispatch(addCustomer(value));
//       });
//     } catch (error) {
//       console.log('orders error', error);
//     }
//   };

//   useEffect(() => {
//     getProduct();
//     fetchOrders();
//     fetchCustomers();
//   }, []);


//   const handleGoToCheckout = () => {
//     navigation.navigate('Checkout');
//   };
//   const handleGoToAdduser = () => {
//     navigation.navigate('Adduser');
//   };

//   return (
//     <View style={[styles.container]}>
//       <View style={[styles.header, styles.shadow]}>
//         <Text style={[styles.boldText, styles.dark]}>Synectiks Farms</Text>
//       </View>

//       <Pressable
//         style={[styles.box, styles.bgDark]}
//         onPress={handleGoToAdduser}>
//         <FontAwesome5 name="user-alt" size={18} color="#d8f3dc" />
//         <TouchableOpacity>
//           <Text style={[styles.light]}>Add Customer</Text>
//         </TouchableOpacity>
//       </Pressable>

//       <View style={[styles.box, styles.bgDark]}>
//         <AntDesign name="plus" size={18} color="#d8f3dc" />
//         <Text style={[{textAlign: 'center'}, styles.light]}>
//           Add custom sale
//         </Text>
//       </View>

//       <View style={[styles.box, styles.bgLight]}>
//         <FontAwesome5 name="percent" size={18} color="#31572c" />
//         <Text style={[{textAlign: 'center'}, styles.dark]}>Apply discount {' '}</Text>
//       </View>
//       <View style={[styles.box, styles.bgLight, ,]}>
//         <Fontisto name="shopping-basket" size={18} color="#31572c" />
//         <Text style={[styles.dark]}>Ship to customer</Text>
//       </View>
//       <TouchableOpacity
//         style={[styles.box, styles.active, {alignSelf: 'flex-start'}]}>
//         <AntDesign name="plus" size={20} color="#31572c" />
//         <Text style={[styles.dark]}>Add tile</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[styles.goToCartButton, styles.bgDark]}
//         onPress={handleGoToCheckout}>
//         <Text style={[styles.light, styles.boldText]}>Go to cart</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Home;



import React from 'react'
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { fetchCategories } from '../../api/fetchProducts';
// import { fetchCategories } from '../../api/fetchProducts';
import {addOrders, addCustomer} from '../../redux/slice/customerSlice';

import {AddAllProducts} from '../../redux/slice/getAllProductSlice';
import {useDispatch} from 'react-redux';
import { fetchingOrders } from '../../api/fetchOrders';
import { fetchingCustomers } from '../../api/fetchCustomers';

import GetAllProducts from '../ProductList/GetAllProducts';




const Home = () => {
  useEffect(() => {
    getProduct();
    fetchOrders();
    fetchCustomers();
  }, []);

const [Products, setProducts] = useState([])
  const getProduct = async () => {
    try {
      const AllProducts = await fetchCategories();
      console.log('products',AllProducts)
      console.log(AllProducts, 'this is allo p')
      // const Products = AllProducts;
      // dispatch(AddAllProducts(AllProducts));
      setProducts(AllProducts)
    } catch (error) {
      console.error(error);
    }
  };
  
  const fetchOrders = async () => {
    try {
      console.log('calling fetching');
      const data = await fetchingOrders();
      console.log('after fetching');
      // const data = response;
      console.log('orders data', data);
      data.map(value => {
        console.log('order value', value);
        // dispatch(addOrders(value));
      });
    } catch (error) {
      console.log('orders error', error);
    }
  };
  const fetchCustomers = async () => {
    try {
      console.log('calling fetching');
      const response = await fetchingCustomers();
      console.log('after fetching');
      const data = response;
      console.log('customers data', data);
      data.map(value => {
        console.log('customer value', value);
        // dispatch(addCustomer(value));
      });
    } catch (error) {
      console.log('orders error', error);
    }
  };
  
  // const dispatch = useDispatch()
  return (
   <View>
<Text>
This is 

<GetAllProducts products = {Products} />
</Text>
   </View>)
}

export default Home
