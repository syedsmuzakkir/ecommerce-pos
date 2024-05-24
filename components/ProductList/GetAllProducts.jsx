// import React from 'react';

// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   Button,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// // import { fetchProducts } from "../fetchProducts";

// import { useState, useEffect } from 'react';
// // import { generateClient } from 'aws-amplify/api';
// import { generateClient } from 'aws-amplify/api';

// import { Amplify } from 'aws-amplify';

// import { useSelector, useDispatch } from 'react-redux';
// // import {AddProduct, removeItem} from '../redux/slice/Product';
// // import {addToCart, removeFromCart} from '../redux/slice/customerSlice';
// import { addToCart, removeFromCart } from '../../redux/slice/customerSlice';

// const GetAllProducts = () => {
//   const dispatch = useDispatch();

//   const client = generateClient();
//   const route = useRoute();
//   console.log(route.params.category);
//   console.log(route.params.catProducts);
//   const Pdata = route.params.catProducts;

//   console.log(Pdata);

//   //   const [cartItems, setCartItems] = useState([]);

//   const navigation = useNavigation();

//   const reduxData = useSelector(state => state.CustomerSlice);
//   // console.log(reduxData)
//   console.log('Redux data', reduxData);

//   // let mappredux = reduxData.cart.map(e => e.id);

//   // console.log({...mappredux});

//   const HandleIncrement = veg => {
//     const data = dispatch(addToCart(veg));
//     console.log(data.payload);

//     console.log(reduxData);
//   };

//   const handleDecrement = veg => {
//     dispatch(removeFromCart(veg.id));
//     console.log(veg.id);
//   };

//   const handleProduct = prod => {
//     console.log('navigate to product');
//     navigation.navigate('ProductPage', { value: prod });
//     console.log('navigate to product 2');
//   };

//   const handleCart = () => {
//     console.log('navigate to cart');
//     navigation.navigate('Checkout');
//     console.log('navigate to Checkout ');
//   };
//   /////   for calculating price /////
//   const calculateTotalPrice = reduxData => {
//     return reduxData.reduce((totalPrice, orderItem) => {
//       console.log('This is total price : ' + totalPrice);
//       const itemTotalPrice = orderItem.price * orderItem.quantity; // Calculate total per item
//       return totalPrice + itemTotalPrice; // Accumulate total price
//     }, 0); // Initial value for accumulator (0)
//   };

//   const [totalPrice, setTotalPrice] = useState(null);
//   useEffect(() => {
//     if (reduxData.cart) {
//       // Check if reduxData exists before calculating
//       const newTotalPrice = calculateTotalPrice(reduxData.cart);
//       setTotalPrice(newTotalPrice);
//       console.log(newTotalPrice);
//     }
//   }, [reduxData.cart]);

//   return (
//     <ScrollView>
//       <TouchableOpacity
//         onPress={handleCart}
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignContent: 'center',
//           justifyContent: 'center',
//         }}>
//         <View
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'space-between',

//             paddingHorizontal: 20,
//             paddingTop: 20,
//             paddingBottom: 20,
//           }}>
//           <View
//             style={{
//               fontWeight: '700',
//               display: 'flex',
//               flexDirection: 'column',
//               width: '50%',
//             }}>
//             <Text
//               style={{
//                 display: 'flex',
//                 flexDirection: 'row',
//                 height: 30,
//                 fontWeight: 700,
//                 alignSelf: 'flex-start',
//                 justifyContent: 'flex-start',
//                 alignItems: 'flex-start',

//                 width: '100%',
//               }}>
//               {
//                 totalPrice === null // Check for null to handle empty initial state
//                   ? 'Calculating total price...' // Display loading message or placeholder
//                   : `Total Price: ${totalPrice.toFixed(2)}

//                   `
//                 // Display calculated total price
//               }
//             </Text>

//             <Text style={{ width: '100%', fontWeight: 700 }}>
//               orders: {reduxData.cart?.length}
//             </Text>
//           </View>
//           <View>
//             <Text
//               style={{
//                 display: 'flex',
//                 // flexDirection: "row",
//                 // justifyContent: "center",
//                 // alignItems: "center",
//                 width: 100,
//                 height: 50,
//                 backgroundColor: 'lightgray',
//                 fontWeight: 700,
//                 paddingTop: 15,

//                 paddingLeft: 15,
//               }}>
//               Checkout
//             </Text>
//           </View>
//         </View>
//       </TouchableOpacity>

//       {Pdata.map(veg => {
//         return (
//           <TouchableOpacity
//             onPress={() => {
//               handleProduct(veg);
//             }}
//             key={veg.id}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 padding: 10,
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 borderWidth: 1,
//                 borderColor: 'lightgray',
//                 margin: 2,
//               }}>
//               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                 <Image
//                   source={{
//                     uri: `${veg.image}`,
//                   }}
//                   style={{ width: 70, height: 70, borderRadius: 10 }}
//                 />
//                 <View style={{ marginLeft: 20 }}>
//                   <Text
//                     numberOfLines={2}
//                     ellipsizeMode="tail"
//                     style={{ fontSize: 16, fontWeight: 'bold', width: 120 }}>
//                     {veg.name}!
//                   </Text>
//                   <Text>
//                     {/* Quantity: {veg.quantity || 1}, Total: $ */}
//                     {/* {calculateItemPrice(veg) } */}
//                   </Text>
//                   <Text style={{ fontSize: 12 }}>Price: ${veg.price}</Text>
//                 </View>
//               </View>
//               <View style={{ alignItems: 'center', gap: 10 }}>
//                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                   <View>
//                     <Text>Qty: {veg.unit}</Text>

//                     <Text>
//                       Qty: {reduxData.cart[0] && reduxData.cart[0].quantity}
//                       {reduxData.cart[
//                         reduxData.cart.findIndex(item => item.id == veg.id)
//                       ] &&
//                         reduxData.cart[
//                           reduxData.cart.findIndex(item => item.id == veg.id)
//                         ].quantity}
//                     </Text>
//                     <Text>
//                       Price:
//                       {reduxData.cart[
//                         reduxData.cart.findIndex(item => item.id == veg.id)
//                       ] &&
//                         reduxData.cart[
//                           reduxData.cart.findIndex(item => item.id == veg.id)
//                         ].totalPrice}
//                     </Text>
//                   </View>
//                   <View style={{ flexDirection: 'row', marginLeft: 10 }}>
//                     <TouchableOpacity
//                       style={{
//                         padding: 10,
//                         backgroundColor: 'lightgray',
//                         borderRadius: 5,
//                       }}
//                       onPress={() => {
//                         HandleIncrement(veg);
//                       }}>
//                       <Text
//                       // style={{
//                       //   textAlign: "center",
//                       //   fontSize: "16px",
//                       //   fontWeight: "700",
//                       // }}
//                       >
//                         +
//                       </Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                       style={{
//                         padding: 10,
//                         backgroundColor: 'lightgray',
//                         borderRadius: 5,
//                         marginLeft: 5,
//                       }}
//                       onPress={() => {
//                         handleDecrement(veg);
//                       }}>
//                       <Text
//                       // style={{
//                       //   textAlign: "center",
//                       //   fontSize: "16px",
//                       //   fontWeight: "700",
//                       // }}
//                       >
//                         -
//                       </Text>
//                     </TouchableOpacity>
//                   </View>
//                 </View>

//                 <Text style={{ fontWeight: '700' }}>
//                   {/* Total: ${calculateItemPrice(veg)} */}
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         );
//       })}
//     </ScrollView>
//   );
// };

// export default GetAllProducts;

// import React from "react";

// import { View, Text, Image, TouchableOpacity, ScrollView, Button } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
// // import { fetchProducts } from "../fetchProducts";

// import { useState, useEffect } from "react";
// // import { generateClient } from 'aws-amplify/api';
// import { generateClient } from "aws-amplify/api";

// import { Amplify } from "aws-amplify";

// import { useSelector, useDispatch } from "react-redux";
// import { AddProduct, removeItem } from "../redux/slice/Product";
// import { addToCart,removeFromCart } from "../redux/slice/customerSlice";

// const GetAllProducts = () => {
//   const dispatch = useDispatch();

//   const client = generateClient();
//   const route = useRoute();
//   console.log(route.params.category);
//   console.log(route.params.catProducts);
//   const Pdata = route.params.catProducts;

//   console.log(Pdata);

//   const [cartItems, setCartItems] = useState([]);

//   const navigation = useNavigation();

//   const reduxData = useSelector((state) => state.CustomerSlice);
//   // console.log(reduxData)
//   console.log(reduxData.cart);

//   let mappredux = reduxData.cart.map((e)=>e.id)
//   console.log({...mappredux})

//   const HandleIncrement = (veg)=>{
//     // const items = [];
//     // items.push(veg);
//     const data =  dispatch(addToCart(veg));
//     console.log(data.payload)

// // const reduxdata = useSelector((state)=>state.Product.Data)

// console.log(reduxData)
//     // const updatedReduxData = useSelector((state) => state.Product);
//     // console.log("Updated Redux Data:", updatedReduxData.Data);

//     // const MyreduxData = useSelector((state)=>state.Product.Data)
//     // if(reduxData){
//     // const mapProducts = reduxData.Data.map((e)=>e.quantity)
//     // console.log('got the data',reduxData.Data)
//     // console.log(mapProducts)
//     // }
//     // console.log(data);
//     // console.log(items);

//   //   useEffect(() => {
//   //   // Log the quantity for the specific product
//   //   const productQuantity = reduxData.Data.find((item) => item.id === veg.id)?.quantity;
//   //   console.log(Quantity for ${veg.name}:, productQuantity);

//   //   // You can perform other actions here based on the updated state
//   // }, [reduxData]);

//     const updatedCartItems = [...cartItems];
//     const existingItemIndex = updatedCartItems.findIndex(
//       (item) => item.id === veg.id
//     );

//     if (existingItemIndex !== -1) {
//       // Item already exists in the cart, update quantity
//       updatedCartItems[existingItemIndex].quantity += 1;
//     } else {
//       // Item doesn't exist in the cart, add it with quantity 1
//       const newItem = { ...veg, quantity: 1 };
//       updatedCartItems.push(newItem);
//     }

//     setCartItems(updatedCartItems);
//   };

//   const handleDecrement = (veg) => {
//     dispatch(removeFromCart(veg.id));
//     console.log(veg.id);

//     const updatedCartItems = [...cartItems];
//     const existingItemIndex = updatedCartItems.findIndex(
//       (item) => item.id === veg.id
//     );

//     if (existingItemIndex !== -1) {
//       // Item exists in the cart, update quantity
//       if (updatedCartItems[existingItemIndex].quantity > 1) {
//         updatedCartItems[existingItemIndex].quantity -= 1;
//       } else {
//         // Remove item from the cart if quantity is 1
//         updatedCartItems.splice(existingItemIndex, 1);
//       }

//       setCartItems(updatedCartItems);
//     }
//   };

//   const calculateItemPrice = (item) => {
//     return item.price && item.quantity ? item.price * item.quantity : 0;
//   };

//   const calculateTotalPrice = () => {
//     return cartItems.reduce(
//       (total, item) => total + calculateItemPrice(item),
//       0
//     );
//   };

//   // const getTotalPrice = (productId) => {
//   //   console.log(productId);
//   //   // return (quantity * PriceperItem).toFixed(2);
//   // };

//   const handleProduct = (prod) => {
//     console.log("navigate to product");
//     navigation.navigate("ProductPage", { value: prod });
//     console.log("navigate to product 2");
//   };

//   const handleCart = () => {
//     console.log("navigate to cart");
//     navigation.navigate("Checkout");
//     console.log("navigate to Checkout ");
//   };

//   return (
//     // <div>
//     // <div className="flex flex-col">

//     <ScrollView>
//       <TouchableOpacity onPress={handleCart} style={{ width:'100%', justifyContent:'space-between',}} >
//         <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-between',alignContent:'center', paddingVertical:10, paddingHorizontal:20}}>

//       <Text style={{ fontWeight: "700" }}>
//         Grand Total: ${calculateTotalPrice()}

//       </Text>
//       <Text style={{backgroundColor:'lightgray ', padding:'20px'}}  >Checkout</Text>
//       </View>

//       {/* <Button style={{backgroundColor:'white', color:'black'}} >Checkout</Button> */}
//       </TouchableOpacity>

//       {Pdata.map((veg) => {
//         return (
//           <TouchableOpacity
//             onPress={() => {
//               handleProduct(veg);
//             }}
//             key={veg.id}
//           >
//             <View
//               style={{
//                 flexDirection: "row",
//                 padding: 10,
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 borderWidth: 1,
//                 borderColor: "black",
//                 margin: 2,
//               }}
//             >
//               <View style={{ flexDirection: "row", alignItems: "center" }}>
//                 <Image
//                   source={{
//                     uri: ${veg.image},
//                   }}
//                   style={{ width: 70, height: 70, borderRadius: 10 }}
//                 />
//                 <View style={{ marginLeft: 20 }}>
//                   <Text
//                     numberOfLines={2}
//                     ellipsizeMode="tail"
//                     style={{ fontSize: 16, fontWeight: "bold", width: 120 }}
//                   >
//                     {veg.name}!
//                   </Text>
//                   <Text>
//                     {/* Quantity: {veg.quantity || 1}, Total: $ */}
//                     {/* {calculateItemPrice(veg) } */}
//                   </Text>
//                   <Text style={{ fontSize: 12 }}>Price: ${veg.price}</Text>
//                 </View>
//               </View>
//               <View style={{ alignItems: "center", gap: 10 }}>
//                 <View style={{ flexDirection: "row", alignItems: "center" }}>

//                    <View>

//                    <Text>Qty: {veg.unit}</Text>

// <Text >
//    Qty: {/* {reduxData.Data[0] && reduxData.Data[0].quantity} */}
//     {reduxData.cart[
//       reduxData.cart.findIndex((item) => item.id == veg.id)
//     ] &&
//       reduxData.cart[
//         reduxData.cart.findIndex((item) => item.id == veg.id)
//       ].quantity}
// </Text>
// <Text>
//     Price:
//     {reduxData.cart[
//       reduxData.cart.findIndex((item) => item.id == veg.id)
//     ] &&
//       reduxData.cart[
//         reduxData.cart.findIndex((item) => item.id == veg.id)
//       ].totalPrice}
//   </Text>
//                   </View>
//                   <View style={{ flexDirection: "row", marginLeft: 10 }}>
//                     <TouchableOpacity
//                       style={{
//                         padding: 10,
//                         backgroundColor: "lightgray",
//                         borderRadius: 5,
//                       }}
//                       onPress={() => {
//                         HandleIncrement(veg);
//                       }}
//                     >
//                       <Text
//                         style={{
//                           textAlign: "center",
//                           fontSize: "16px",
//                           fontWeight: "700",
//                         }}
//                       >
//                         +
//                       </Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                       style={{
//                         padding: 10,
//                         backgroundColor: "lightgray",
//                         borderRadius: 5,
//                         marginLeft: 5,
//                       }}
//                       onPress={() => {
//                         handleDecrement(veg);
//                       }}
//                     >
//                       <Text
//                         style={{
//                           textAlign: "center",
//                           fontSize: "16px",
//                           fontWeight: "700",
//                         }}
//                       >
//                         -
//                       </Text>
//                     </TouchableOpacity>

//                     </View>

//                 </View>

//                 <Text style={{ fontWeight: "700" }}>
//                   {/* Total: ${calculateItemPrice(veg)} */}
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         );
//       })}
//     </ScrollView>
//   );
// };

// export default GetAllProducts;

/////////////////second time

// import React from "react";
// import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCart, removeFromCart } from "../redux/slice/customerSlice";

// const GetAllProducts = () => {
//   const dispatch = useDispatch();
//   const route = useRoute();
//   const Pdata = route.params.catProducts;
//   const [cartItems, setCartItems] = useState([]);
//   const navigation = useNavigation();
//   const reduxData = useSelector((state) => state.CustomerSlice);

//   const HandleIncrement = (veg) => {
//     const data = dispatch(addToCart(veg));
// const updatedCartItems = [...cartItems];
//     const existingItemIndex = updatedCartItems.findIndex(
//       (item) => item.id === veg.id
//     );

//     if (existingItemIndex !== -1) {
//       // Item already exists in the cart, update quantity
//       updatedCartItems[existingItemIndex].quantity += 1;
//     } else {
//       // Item doesn't exist in the cart, add it with quantity 1
//       const newItem = { ...veg, quantity: 1 };
//       updatedCartItems.push(newItem);
//     }

//     setCartItems(updatedCartItems);
//   };

//   const handleDecrement = (veg) => {
//     dispatch(removeFromCart(veg.id));

// const updatedCartItems = [...cartItems];
// const existingItemIndex = updatedCartItems.findIndex(
//   (item) => item.id === veg.id
// );

// if (existingItemIndex !== -1) {
//   // Item exists in the cart, update quantity
//   if (updatedCartItems[existingItemIndex].quantity > 1) {
//     updatedCartItems[existingItemIndex].quantity -= 1;
//   } else {
//     // Remove item from the cart if quantity is 1
//     updatedCartItems.splice(existingItemIndex, 1);
//   }

//   setCartItems(updatedCartItems);}
//   };

//   const calculateItemPrice = (item) => {
//     return item.price && item.quantity ? item.price * item.quantity : 0;
//   };

//   const calculateTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + calculateItemPrice(item), 0);
//   };

//   const handleProduct = (prod) => {
//     navigation.navigate("ProductPage", { value: prod });
//   };

//   const handleCart = () => {
//     navigation.navigate("Checkout");
//   };

//   return (
//     <ScrollView>
//       <TouchableOpacity onPress={handleCart} style={{ width: '100%', justifyContent: 'space-between' }}>
//         <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', paddingVertical: 10, paddingHorizontal: 20 }}>
//           <Text style={{ fontWeight: "700" }}>
//             Grand Total: ${calculateTotalPrice()}
//           </Text>
//           <Text style={{ backgroundColor: 'lightgray', padding: 20 }}>Checkout</Text>
//         </View>
//       </TouchableOpacity>

//       {Pdata.map((veg) => {
//         return (
//           <TouchableOpacity onPress={() => handleProduct(veg)} key={veg.id}>
//             <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", borderWidth: 1, borderColor: "black", margin: 2 }}>
//               <View style={{ flexDirection: "row", alignItems: "center" }}>
//                 <Image source={{ uri: ${veg.image} }} style={{ width: 70, height: 70, borderRadius: 10 }} />
//                 <View style={{ marginLeft: 20 }}>
//                   <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 16, fontWeight: "bold", width: 120 }}>
//                     {veg.name}!
//                   </Text>
//                   <Text style={{ fontSize: 12 }}>Price: ${veg.price}</Text>
//                 </View>
//               </View>
//               <View style={{ alignItems: "center", gap: 10 }}>
//                 <View style={{ flexDirection: "row", alignItems: "center" }}>
//                   <Text>Qty: {veg.unit}</Text>
//                   <Text>Qty: {reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)] && reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)].quantity}</Text>
//                   <Text>Price: {reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)] && reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)].totalPrice}</Text>
//                 </View>
//                 <View style={{ flexDirection: "row", marginLeft: 10 }}>
//                   <TouchableOpacity style={{ padding: 10, backgroundColor: "lightgray", borderRadius: 5 }} onPress={() => HandleIncrement(veg)}>
//                     <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "700" }}>+</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity style={{ padding: 10, backgroundColor: "lightgray", borderRadius: 5, marginLeft: 5 }} onPress={() => handleDecrement(veg)}>
//                     <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "700" }}>-</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </TouchableOpacity>
//         );
//       })}
//     </ScrollView>
//   );
// };

// export default GetAllProducts;

// .....Third time

// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, ActivityIndicator } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart, removeFromCart } from '../../redux/slice/customerSlice';
// import styles from './style';

// const GetAllProducts = (props) => {
//   console.log(props.products, 'this is props');
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const reduxData = useSelector(state => state.CustomerSlice);

//   const filteredProducts = props.products.filter((veg) =>
//   veg.name.toLowerCase().includes(searchTerm.toLowerCase())
// );

//   const HandleIncrement = (veg) => {
//     dispatch(addToCart(veg));
//   };

//   const handleDecrement = (veg) => {
//     dispatch(removeFromCart(veg.id));
//   };

//   const calculateTotalPrice = (reduxData) => {
//     return reduxData.reduce((totalPrice, orderItem) => {
//       const itemTotalPrice = orderItem.price * orderItem.quantity;
//       return totalPrice + itemTotalPrice;
//     }, 0);
//   };

//   const [totalPrice, setTotalPrice] = useState(null);

//   useEffect(() => {
//     if (reduxData.cart) {
//       const newTotalPrice = calculateTotalPrice(reduxData.cart);
//       setTotalPrice(newTotalPrice);
//     }
//   }, [reduxData.cart]);

//   useEffect(() => {
//     if (props.products.length > 0) {
//       setLoading(false);
//     }
//   }, [props.products]);

//   if (loading) {
//     return (
//       <View style={{ flex: 1, backgroundColor: '#fff', flexWrap: 'wrap', justifyContent: 'center', color: 'black', overflow: 'scroll' }}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <View>
//       <ScrollView style={{ flex: 1, width: 760 }}>
//         <TextInput style={styles.searchInput} placeholder="Search Product" placeholderTextColor="black" onChangeText={setSearchTerm} />
//         <View style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
//           <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20 }}>
//             <View style={{ fontWeight: '700', display: 'flex', flexDirection: 'column', width: '50%' }}>
//               <Text style={{ display: 'flex', flexDirection: 'row', height: 30, fontWeight: 700, alignSelf: 'flex-start', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', color: 'black' }}>
//                 {totalPrice === null ? 'Calculating total price...' : `Total Price: ${totalPrice.toFixed(2)}`}
//               </Text>
//               <Text style={{ width: '100%', fontWeight: 700, color: 'black' }}>orders: {reduxData.cart?.length}</Text>
//             </View>
//             <Text style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 100, height: 50, paddingHorizontal: 16, paddingTop: 13, borderRadius: 10, backgroundColor: 'blue', fontWeight: 700, color: 'white', paddingHorizontal: 18, paddingTop: 14 }}>
//               Checkout
//             </Text>
//           </View>
//           <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 10 }}>
//             {filteredProducts.map((veg) => (
//               <TouchableOpacity key={veg.id} style={{ width: '48%', marginBottom: 10 }}>
//                 <View style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10 }}>
//                   <Image source={{ uri: `${veg.image}` }} style={{ width: '100%', height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
//                   <View style={{ padding: 10 }}>
//                     <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 5 }}>
//                       {veg.name}!
//                     </Text>
//                     <Text style={{ fontSize: 12, color: 'black', marginBottom: 5 }}>Price: ₹{veg.price}</Text>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                       <Text style={{ color: 'black' }}>Qty: {veg.unit}</Text>
//                       <Text style={{ color: 'black', marginLeft: 10 }}>
//                         Qty: {reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)] && reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)].quantity}
//                       </Text>
//                       <Text style={{ color: 'black', marginLeft: 10 }}>
//                         Price: {reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)] && reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)].totalPrice.toFixed(2)}
//                       </Text>
//                     </View>
//                   </View>
//                   <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
//                     <TouchableOpacity style={{ flex: 1, padding: 10, backgroundColor: 'blue', borderRadius: 5, marginRight: 5 }} onPress={() => HandleIncrement(veg)}>
//                       <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', color: 'white' }}>+</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={{ flex: 1, padding: 10, backgroundColor: 'blue', borderRadius: 5, marginLeft: 5 }} onPress={() => handleDecrement(veg)}>
//                       <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', color: 'white' }}>-</Text>
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );

// };

// export default GetAllProducts;

// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, ActivityIndicator } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart, removeFromCart } from '../../redux/slice/customerSlice';
// import Checkout from '../Checkout';
// import styles from './style';

// // Define a functional component to display item details
// const ItemDetails = ({ item }) => {
//   return (
//     <View>
//       <Text>{item.name}</Text>
//       <Text>Price: ₹{item.price}</Text>
//       {/* Add more details here as needed */}
//     </View>
//   );
// };

// const GetAllProducts = (props) => {
//   console.log(props.products, 'this is props');
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const reduxData = useSelector(state => state.CustomerSlice);
//   const [currentView, setCurrentView] = useState('GetAllProducts');

//   const filteredProducts = props.products.filter((veg) =>
//     veg.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const HandleIncrement = (veg) => {
//     dispatch(addToCart(veg));
//   };

//   const handleDecrement = (veg) => {
//     dispatch(removeFromCart(veg.id));
//   };

//   const calculateTotalPrice = (reduxData) => {
//     return reduxData.reduce((totalPrice, orderItem) => {
//       const itemTotalPrice = orderItem.price * orderItem.quantity;
//       return totalPrice + itemTotalPrice;
//     }, 0);
//   };

//   const [totalPrice, setTotalPrice] = useState(null);

//   useEffect(() => {
//     if (reduxData.cart) {
//       const newTotalPrice = calculateTotalPrice(reduxData.cart);
//       setTotalPrice(newTotalPrice);
//     }
//   }, [reduxData.cart]);

//   useEffect(() => {
//     if (props.products.length > 0) {
//       setLoading(false);
//     }
//   }, [props.products]);

//   const handleGoBack = () => {
//     setCurrentView('GetAllProducts');
//   };

//   const handleGoToCheckout = () => {
//     setCurrentView('Checkout');
//   };

//   if (loading) {
//     return (
//       <View style={{ flex: 1, backgroundColor: '#fff', flexWrap: 'wrap', justifyContent: 'center', color: 'black', overflow: 'scroll' }}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   // custom products

//   const [selectedItem, setSelectedItem] = useState(null); // State variable to store the selected item

//   // Function to handle TouchableOpacity click
//   const handleItemPress = (item) => {
//     setSelectedItem(item); // Set the selected item when TouchableOpacity is clicked
//   };

//   return (
//     <View>
//       {currentView === 'GetAllProducts' ? (
//         <ScrollView style={{ flex: 1, width: 760 }}>
//           <TextInput style={styles.searchInput} placeholder="Search Product" placeholderTextColor="black" onChangeText={setSearchTerm} />
//           <View style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
//             <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20 }}>
//               <View style={{ fontWeight: '700', display: 'flex', flexDirection: 'column', width: '50%' }}>
//                 <Text style={{ display: 'flex', flexDirection: 'row', height: 30, fontWeight: 700, alignSelf: 'flex-start', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', color: 'black' }}>
//                   {totalPrice === null ? 'Calculating total price...' : `Total Price: ${totalPrice.toFixed(2)}`}
//                 </Text>
//                 <Text style={{ width: '100%', fontWeight: 700, color: 'black' }}>orders: {reduxData.cart?.length}</Text>
//               </View>
//               <TouchableOpacity onPress={handleGoToCheckout}>
//                 <Text style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 100, height: 50, paddingHorizontal: 16, paddingTop: 13, borderRadius: 10, backgroundColor: 'blue', fontWeight: 700, color: 'white', paddingHorizontal: 18, paddingTop: 14 }}>
//                   Checkout
//                 </Text>
//               </TouchableOpacity>
//             </View>
//             <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 10 }}>
//             {filteredProducts.map((veg) => (
//               <TouchableOpacity key={veg.id} style={{ width: '28%', marginBottom: 10 }} onPress={() => handleItemPress(veg)} >
//                 <View style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10 }}>
//                   <Image source={{ uri: `${veg.image}` }} style={{ width: '100%', height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
//                   <View style={{ padding: 10 }}>
//                     <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 5 }}>
//                       {veg.name}!
//                     </Text>
//                     <Text style={{ fontSize: 12, color: 'black', marginBottom: 5 }}>Price: ₹{veg.price}</Text>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                       <Text style={{ color: 'black' }}>Qty: {veg.unit}</Text>
//                       <Text style={{ color: 'black', marginLeft: 10 }}>
//                         Qty: {reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)] && reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)].quantity}
//                       </Text>
//                       <Text style={{ color: 'black', marginLeft: 10 }}>
//                         Price: {reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)] && reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)].totalPrice.toFixed(2)}
//                       </Text>
//                     </View>
//                   </View>
//                   <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
//                     <TouchableOpacity style={{ flex: 1, padding: 10, backgroundColor: 'blue', borderRadius: 5, marginRight: 5 }} onPress={() => HandleIncrement(veg)}>
//                       <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', color: 'white' }}>+</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={{ flex: 1, padding: 10, backgroundColor: 'blue', borderRadius: 5, marginLeft: 5 }} onPress={() => handleDecrement(veg)}>
//                       <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', color: 'white' }}>-</Text>
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {selectedItem && (
//         <View style={{ padding: 10 }}>
//           <ItemDetails item={selectedItem} />
//         </View>
//       )}
//           </View>
//         </ScrollView>
//       ) : (
//         <Checkout onGoBack={handleGoBack} />
//       )}
//     </View>
//   );
// };

// export default GetAllProducts;

// Define a functional component to display item details
// const ItemDetails = ({ item }) => {
//   return (
//     <View style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10 }}>
//     <Image source={{ uri: `${item.image}` }} style={{ width: '100%', height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
//     <View style={{ padding: 10 }}>
//       <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 5 }}>
//         {item.name}!
//       </Text>
//       <Text style={{ fontSize: 12, color: 'black', marginBottom: 5 }}>Price: ₹{item.price}</Text>
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <Text style={{ color: 'black' }}>Qty: {item.unit}</Text>
//         <Text style={{ color: 'black', marginLeft: 10 }}>
//           Qty: {reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)] && reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)].quantity}
//         </Text>
//         <Text style={{ color: 'black', marginLeft: 10 }}>
//           Price: {reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)] && reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)].totalPrice.toFixed(2)}
//         </Text>
//       </View>
//     </View>
//     <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
//       <TouchableOpacity style={{ flex: 1, padding: 10, backgroundColor: 'blue', borderRadius: 5, marginRight: 5 }} onPress={() => HandleIncrement(veg)}>
//         <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', color: 'white' }}>+</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={{ flex: 1, padding: 10, backgroundColor: 'blue', borderRadius: 5, marginLeft: 5 }} onPress={() => handleDecrement(veg)}>
//         <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', color: 'white' }}>-</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
//   )
// };

import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Dimensions,
  Modal,
  BackHandler,
  FlatList
} from 'react-native';
import {useSelector, useDispatch,shallowEqual} from 'react-redux';
import {addToCart, removeFromCart} from '../../redux/slice/customerSlice';
import Checkout from '../Checkout';
import styles from './style';
import ParticularItem from './ParticularItem';

import LottieView from 'lottie-react-native';


const {width, height} = Dimensions.get('window'); // Get screen dimensions

console.log(width, 'width', height, 'height')
// const headerHeight = Math.min(height * 0.1);
const avgDimension = (width + height) / 2;
// const headerHeight = avgDimension * 0.1;
const headerHeight = height*0.1
const containerHeight=height*0.92 
const containerwidth= width*0.9
const InnerContentHeader=containerHeight*0.8 
const InnerContentHeaderWidth=containerwidth*0.65
const InnerContentwidth =containerwidth*0.65
const InnerContentHeight = containerHeight*0.92

console.log(headerHeight, 'header height from ',height)


 {/* <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingTop: 20,
                paddingBottom: 20,
              }}>
              <View
                style={{
                  fontWeight: '700',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '50%',
                }}>
                <Text
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: 30,
                    fontWeight: 700,
                    alignSelf: 'flex-start',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    width: '100%',
                    color: 'black',
                  }}>
                  {totalPrice === null
                    ? 'Calculating total price...'
                    : `Total Price: ${totalPrice.toFixed(2)}`}
                </Text>
                <Text style={{width: '100%', fontWeight: 700, color: 'black'}}>
                  orders: {reduxData.cart?.length}
                </Text>
              </View>
              <TouchableOpacity onPress={handleGoToCheckout}>
                <Text
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 100,
                    height: 50,
                    paddingHorizontal: 16,
                    paddingTop: 13,
                    borderRadius: 10,
                    backgroundColor: 'blue',
                    fontWeight: 700,
                    color: 'white',
                    paddingHorizontal: 18,
                    paddingTop: 14,
                  }}>
                  Checkout
                </Text>
              </TouchableOpacity>
            </View> */}

// const GetAllProducts = props => {
//   // console.log(props.products, 'this is props');
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const reduxData = useSelector(state => state.CustomerSlice,shallowEqual);
//   const [currentView, setCurrentView] = useState('GetAllProducts');

//   const filteredProducts = props.products.filter(veg =>
//     veg.name.toLowerCase().includes(searchTerm.toLowerCase()),
//   );



//   const HandleIncrement = veg => {
//     dispatch(addToCart(veg));
//   };

//   const handleDecrement = veg => {
//     dispatch(removeFromCart(veg.id));
//   };

//   const calculateTotalPrice = reduxData => {
//     // return reduxData.reduce((totalPrice, orderItem) => {
//     //   const itemTotalPrice = orderItem.price * orderItem.quantity;
//     //   return totalPrice + itemTotalPrice;
//     // }, 0);
//     // const checkout = useSelector(state => state.CustomerSlice.cart);

//   const subtotal = reduxData
//     .filter(item => item && typeof item.price === 'number')
//     .reduce(
//       (acc, curr) =>
//         acc + (curr.perPrice ? curr.perPrice : curr.price) * curr.quantity,
//       0,
//     );
//     return subtotal
//   };

//   const [totalPrice, setTotalPrice] = useState(null);

//   useEffect(() => {
//     if (reduxData.cart) {
//       const newTotalPrice = calculateTotalPrice(reduxData.cart);
//       setTotalPrice(newTotalPrice);
//     }
//   }, [reduxData.cart]);

//   useEffect(() => {
//     if (props.products.length > 0) {
//       setLoading(false);
//     }
//   }, [props.products]);

//   // const handleGoBack = () => {
//   //   setCurrentView('GetAllProducts');
//   // };
//   useEffect(() => {
//     // Other useEffect code...

//     const handleBackButton = () => {
//       if (currentView === 'ItemDetails') {
//         handleGoBack();
//         return true; // Prevent default back button behavior
//       }
//       return false; // Allow default back button behavior
//     };

//     BackHandler.addEventListener('hardwareBackPress', handleBackButton);

//     return () => {
//       BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
//     };
//   }, [currentView]);

//   const handleGoBack = useCallback(() => {
//     setCurrentView('GetAllProducts');
//   }, []);


//   const handleGoToCheckout = () => {
//     setCurrentView('Checkout');
//   };

//   const GotToParticular = item => {
//     setSelectedItem(item); // Set the selected item when TouchableOpacity is clicked

//     setCurrentView('ItemDetails');
//   };
//   const [selectedItem, setSelectedItem] = useState(null);
//   const handleItemPress = item => {
//     setSelectedItem(item); // Set the selected item when TouchableOpacity is clicked
//   };

//   if (loading) {
//     return (
//       <View
//         style={{
//           flex: 1,
//           width: width,
//           height: 560,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <LottieView
//         style={{ width: 200, height: 200 }}
//         source={require('../../animation.json')}
//         autoPlay={true}
//         loop={true}
//       />
    

//       </View>
//     );
//   }

//   const ItemDetails = ({item, Back}) => {
//     return (
//       <ParticularItem item = {item} Back = {Back} />
//       // <Modal
//       // visible={isVisible}
//       // animationType="slide"
//       // transparent={true}
//       // onRequestClose={onClose}>
//       // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
//       //   <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
//       //     <ParticularItem item = {item} Back = {Back}/>
//       //     {/* <Button title="Close" onPress={onClose} /> */}
//       //   </View>
//       // </View>
//     // </Modal>

//       );
//     };


   

//   return (

//     <ScrollView style = {{flex:1}}>
//       {currentView === 'GetAllProducts' ? (
//         <ScrollView
//           // style={{flex: 1, width: width-width*9, height:100, overflow: 'scroll' }}
//           >
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search Product"
//             placeholderTextColor="black"
//             onChangeText={setSearchTerm}
//           />
//           <View
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignContent: 'center',
//               justifyContent: 'center',
//             }}>
           
//             <View
//               style={{
//                 flexDirection: 'row',
//                 flexWrap: 'wrap',
//                 justifyContent: 'space-around',
//               }}>
//               {filteredProducts.map(veg => (
//                 <TouchableOpacity
//                   key={veg.id}
//                   style={{width: '30%', marginBottom: 10}}
//                   onPress={() => GotToParticular(veg)}>
//                   <View
//                     style={{
//                       borderWidth: 1,
//                       borderColor: 'lightgray',
//                       borderRadius: 10,
//                     }}>
//                     <Image
//                       source={{uri: `${veg.image}`}}
//                       style={{
//                         width: '100%',
//                         height: 150,
//                         borderTopLeftRadius: 10,
//                         borderTopRightRadius: 10,
//                       }}
//                     />
//                     <View style={{padding: 10}}>
//                       <Text
//                         numberOfLines={2}
//                         ellipsizeMode="tail"
//                         style={{
//                           fontSize: 16,
//                           fontWeight: 'bold',
//                           color: 'black',
//                           marginBottom: 5,
//                         }}>
//                         {veg.name}!
//                       </Text>
//                       <Text
//                         style={{fontSize: 12, color: 'black', marginBottom: 5}}>
//                         Price: ₹{veg.price}
//                       </Text>
//                       <View
//                         style={{flexDirection: 'row', alignItems: 'center'}}>
//                         <Text style={{color: 'black'}}>Qty: {veg.unit}</Text>
//                         <Text style={{color: 'black', marginLeft: 10}}>
//                           Qty:{' '}
//                           {reduxData.cart[
//                             reduxData.cart.findIndex(item => item.id == veg.id)
//                           ] &&
//                             reduxData.cart[
//                               reduxData.cart.findIndex(
//                                 item => item.id == veg.id,
//                               )
//                             ].quantity}
//                         </Text>
//                         {/* <Text style={{color: 'black', marginLeft: 10}}>
//                           Price:{' '}
//                           {reduxData.cart[
//                             reduxData.cart.findIndex(item => item.id == veg.id)
//                           ] &&
//                             reduxData.cart[
//                               reduxData.cart.findIndex(
//                                 item => item.id == veg.id,
//                               )
//                             ].totalPrice.toFixed(2)}
//                         </Text> */}
                       
//                       </View>
//                       <View  style={{flexDirection: 'row', alignItems: 'center',justifyContent:'space-between'}}>
//                           <Text style={{color: 'black', width:'70%'}}>
//                           Price:{' '}
//                           {reduxData.cart[
//                             reduxData.cart.findIndex(item => item.id == veg.id)
//                           ] &&
//                             reduxData.cart[
//                               reduxData.cart.findIndex(
//                                 item => item.id == veg.id,
//                               )
//                             ].totalPrice.toFixed(2)}
//                         </Text>
//                         <TouchableOpacity
//                           style={{
//                             flex: 1,
//                             // padding: 10,
//                             borderRadius: 50,
//                             backgroundColor: 'white',
//                             borderWidth: 1,
//                             borderColor: '#FC8019',
//                             marginRight: 5,
//                             justifyContent: 'center',
//                             alignItems: 'center',
                           
//                           }}
//                           onPress={() => HandleIncrement(veg)}>
//                           <Text
//                             style={{
//                               textAlign: 'center',
//                               fontSize: 20,
//                               fontWeight: '700',
//                               color: '#FC8019',
//                             }}>
//                             +
//                           </Text>
//                           {/* <Image source= {plusIcon} /> */}
//                         </TouchableOpacity>
//                         </View>
//                     </View>
//                     <View
//                       style={{
//                         flexDirection: 'row',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         padding: 10,
//                       }}>
                     
//                     </View>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </View>

       
//           </View>
//         </ScrollView>
//       ) : (
//         // <Checkout onGoBack={handleGoBack} />
//         <ItemDetails item={selectedItem} Back={handleGoBack} />
//       )}
//     </ScrollView>
//   );
// };









const GetAllProducts = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const reduxData = useSelector((state) => state.CustomerSlice, shallowEqual);
  const [currentView, setCurrentView] = useState('GetAllProducts');
  const [selectedItem, setSelectedItem] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  const filteredProducts = useMemo(
    () =>
      props.products.filter((veg) =>
        veg.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [props.products, searchTerm]
  );

  const handleIncrement = useCallback(
    (veg) => {
      dispatch(addToCart(veg));
    },
    [dispatch]
  );

  const handleDecrement = useCallback(
    (veg) => {
      dispatch(removeFromCart(veg.id));
    },
    [dispatch]
  );

  const calculateTotalPrice = useCallback(
    (reduxData) => {
      const subtotal = reduxData
        .filter((item) => item && typeof item.price === 'number')
        .reduce(
          (acc, curr) =>
            acc + (curr.perPrice ? curr.perPrice : curr.price) * curr.quantity,
          0
        );
      return subtotal;
    },
    []
  );

  useEffect(() => {
    if (reduxData.cart) {
      const newTotalPrice = calculateTotalPrice(reduxData.cart);
      setTotalPrice(newTotalPrice);
    }
  }, [reduxData.cart, calculateTotalPrice]);

  useEffect(() => {
    if (props.products.length > 0) {
      setLoading(false);
    }
  }, [props.products]);

  useEffect(() => {
    const handleBackButton = () => {
      if (currentView === 'ItemDetails') {
        handleGoBack();
        return true;
      }
      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [currentView]);

  const handleGoBack = useCallback(() => {
    setCurrentView('GetAllProducts');
  }, []);

  const handleGoToCheckout = () => {
    setCurrentView('Checkout');
  };

  const goToParticular = useCallback((item) => {
    setSelectedItem(item);
    setCurrentView('ItemDetails');
  }, []);

  const renderProductItem = useCallback(
    ({ item }) => (
      <TouchableOpacity
        key={item.id}
        style={{ width: '30%', marginBottom: 10 }}
        onPress={() => goToParticular(item)}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightgray',
            borderRadius: 10,
          }}
        >
          <Image
            source={{ uri: `${item.image}` }}
            style={{
              width: '100%',
              height: 150,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
          <View style={{ padding: 10 }}>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
                marginBottom: 5,
              }}
            >
              {item.name}!
            </Text>
            <Text style={{ fontSize: 12, color: 'black', marginBottom: 5 }}>
              Price: ₹{item.price}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: 'black' }}>Qty: {item.unit}</Text>
              <Text style={{ color: 'black', marginLeft: 10 }}>
                Qty:{' '}
                {reduxData.cart[
                  reduxData.cart.findIndex((cartItem) => cartItem.id == item.id)
                ] &&
                  reduxData.cart[
                    reduxData.cart.findIndex((cartItem) => cartItem.id == item.id)
                  ].quantity}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ color: 'black', width: '70%' }}>
                Price:{' '}
                {reduxData.cart[
                  reduxData.cart.findIndex((cartItem) => cartItem.id == item.id)
                ] &&
                  reduxData.cart[
                    reduxData.cart.findIndex((cartItem) => cartItem.id == item.id)
                  ].totalPrice.toFixed(2)}
              </Text>
              <TouchableOpacity
                style={{
                  flex: 1,
                  borderRadius: 50,
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderColor: '#FC8019',
                  marginRight: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => handleIncrement(item)}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: '700',
                    color: '#FC8019',
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ),
    [goToParticular, handleIncrement, reduxData.cart]
  );

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          width: width,
          height: 560,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LottieView
          style={{ width: 200, height: 200 }}
          source={require('../../animation.json')}
          autoPlay={true}
          loop={true}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {currentView === 'GetAllProducts' ? (
        <FlatList
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={keyExtractor}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
          contentContainerStyle={{
            paddingHorizontal: 10,
          }}
          ListHeaderComponent={
            <TextInput
              style={styles.searchInput}
              placeholder="Search Product"
              placeholderTextColor="black"
              onChangeText={setSearchTerm}
            />
          }
          ListEmptyComponent={<Text>No products found</Text>}
        />
      ) : (
        <ParticularItem item={selectedItem} Back={handleGoBack} />
      )}
    </View>
  );
};









export default GetAllProducts;



// const GetAllProducts = props => {
// const dispatch = useDispatch()

//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const reduxData = useSelector(state => state.CustomerSlice, shallowEqual);
//   const [currentView, setCurrentView] = useState('GetAllProducts');

//   const filteredProducts = props.products.filter(veg =>
//     veg.name.toLowerCase().includes(searchTerm.toLowerCase()),
//   );

//     const HandleIncrement = veg => {
//     dispatch(addToCart(veg)
    

//     );
//   };


//     const handleDecrement = veg => {
//     dispatch(removeFromCart(veg.id));
//   };

//   const calculateTotalPrice = reduxData => {
//     // return reduxData.reduce((totalPrice, orderItem) => {
//     //   const itemTotalPrice = orderItem.price * orderItem.quantity;
//     //   return totalPrice + itemTotalPrice;
//     // }, 0);
//     // const checkout = useSelector(state => state.CustomerSlice.cart);

//   const subtotal = reduxData
//     .filter(item => item && typeof item.price === 'number')
//     .reduce(
//       (acc, curr) =>
//         acc + (curr.perPrice ? curr.perPrice : curr.price) * curr.quantity,
//       0,
//     );
//     return subtotal
//   };

//   const [totalPrice, setTotalPrice] = useState(null);

//   useEffect(() => {
//     if (reduxData.cart) {
//       const newTotalPrice = calculateTotalPrice(reduxData.cart);
//       setTotalPrice(newTotalPrice);
//     }
//   }, [reduxData.cart]);

// //   useEffect(() => {
// //     if (props.products.length > 0) {
// //       setLoading(false);
// //     }
// //   }, [props.products]);

//   useEffect(() => {
//     if (props.products.length > 0) {
//       setLoading(false);
//     }
//   }, [props.products]);

//   const handleGoBack = useCallback(() => {
//     setCurrentView('GetAllProducts');
//   }, []);

//   //   const GotToParticular = item => {
// //     setSelectedItem(item); // Set the selected item when TouchableOpacity is clicked

// //     setCurrentView('ItemDetails');
// //   };
//   const [selectedItem, setSelectedItem] = useState(null);
// //   const handleItemPress = item => {
// //     setSelectedItem(item); // Set the selected item when TouchableOpacity is clicked
// //   };

//   const GotToParticular = item => {
//     setSelectedItem(item); // Set the selected item when TouchableOpacity is clicked
//     setCurrentView('ItemDetails');
//   };


//   const ItemDetails = ({item, Back}) => {
//     return (
//       <ParticularItem item = {item} Back = {Back} />
//       // <Modal
//       // visible={isVisible}
//       // animationType="slide"
//       // transparent={true}
//       // onRequestClose={onClose}>
//       // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
//       //   <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
//       //     <ParticularItem item = {item} Back = {Back}/>
//       //     {/* <Button title="Close" onPress={onClose} /> */}
//       //   </View>
//       // </View>
//     // </Modal>

//       );
//     };
//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={{ width: '30%', marginBottom: 10 }}
//       onPress={() => GotToParticular(item)}>
//       <View style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10 }}>
//         <Image
//           source={{ uri: `${item.image}` }}
//           style={{ width: '100%', height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
//         />
//         <View style={{ padding: 10 }}>
//           <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 5 }}>
//             {item.name}!
//           </Text>
//           <Text style={{ fontSize: 12, color: 'black', marginBottom: 5 }}>
//             Price: ₹{item.price}
//           </Text>
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <Text style={{ color: 'black' }}>Qty: {item.unit}</Text>
//             <Text style={{ color: 'black', marginLeft: 10 }}>
//               Qty:{' '}
//               {reduxData.cart[reduxData.cart.findIndex(cartItem => cartItem.id === item.id)]?.quantity || 0}
//             </Text>
//           </View>
//           <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
//             <Text style={{ color: 'black', width: '70%' }}>
//               Price: {' '}
//               {(reduxData.cart[reduxData.cart.findIndex(cartItem => cartItem.id === item.id)]?.totalPrice || 0).toFixed(2)}
//             </Text>
//             <TouchableOpacity
//               style={{ flex: 1, borderRadius: 50, backgroundColor: 'white', borderWidth: 1, borderColor: '#FC8019', marginRight: 5, justifyContent: 'center', alignItems: 'center' }}
//               onPress={() => HandleIncrement(item)}>
//               <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '700', color: '#FC8019' }}>+</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   if (loading) {
//     return (
//       <View
//       style={{
//         flex: 1,
//         width: width,
//         height: 560,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <LottieView
//       style={{ width: 200, height: 200 }}
//       source={require('../../animation.json')}
//       autoPlay={true}
//       loop={true}
//     />
  

//     </View>
//     );
//   }

//   return (
//     // <ScrollView style={{ flex: 1 }}>
//     <>
//       {currentView === 'GetAllProducts' ? (
//         // <ScrollView>
//         <>
//           <TextInput
//             style={{ /* Your styles for the search input */ }}
//             placeholder="Search Product"
//             placeholderTextColor="black"
//             onChangeText={setSearchTerm}
//           />
//           <FlatList
//             data={filteredProducts}
//             renderItem={renderItem}
//             keyExtractor={item => item.id.toString()}
//             numColumns={3} // Display 3 items per row
//             contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
//           />
//         {/* </ScrollView> */}
//         </>
//       ) : (
//         // Render ItemDetails component here
//         <ItemDetails item={selectedItem} Back={handleGoBack} />
        
//       )}
//     {/* // </ScrollView> */}
//     </>
//   );
// };

// export default GetAllProducts;




///


//



// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, ActivityIndicator, Dimensions } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart, removeFromCart } from '../../redux/slice/customerSlice';
// import Checkout from '../Checkout';
// import styles from './style';

// const { width, height } = Dimensions.get('window'); // Get screen dimensions

// const GetAllProducts = (props) => {
//   console.log(props.products, 'this is props');
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const reduxData = useSelector(state => state.CustomerSlice);
//   const [currentView, setCurrentView] = useState('GetAllProducts');

//   const filteredProducts = props.products.filter((veg) =>
//     veg.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const HandleIncrement = (veg) => {
//     dispatch(addToCart(veg));
//   };

//   const handleDecrement = (veg) => {
//     dispatch(removeFromCart(veg.id));
//   };

//   const calculateTotalPrice = (reduxData) => {
//     return reduxData.reduce((totalPrice, orderItem) => {
//       const itemTotalPrice = orderItem.price * orderItem.quantity;
//       return totalPrice + itemTotalPrice;
//     }, 0);
//   };

//   const [totalPrice, setTotalPrice] = useState(null);

//   useEffect(() => {
//     if (reduxData.cart) {
//       const newTotalPrice = calculateTotalPrice(reduxData.cart);
//       setTotalPrice(newTotalPrice);
//     }
//   }, [reduxData.cart]);

//   useEffect(() => {
//     if (props.products.length > 0) {
//       setLoading(false);
//     }
//   }, [props.products]);

//   const handleGoBack = () => {
//     setCurrentView('GetAllProducts');
//   };

//   const handleGoToCheckout = () => {
//     setCurrentView('Checkout');
//   };

//   const GotToParticular = (item) => {
//     setSelectedItem(item);
//     setCurrentView('ItemDetails');
//   };

//   const [selectedItem, setSelectedItem] = useState(null);

//   if (loading) {
//     return (
//       <View style={{ flex: 1, width: width, height: height, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   const ItemDetails = ({ item , onGoBack }) => {
//     return (
//       <TouchableOpacity style = {{width:100}} >
//       <View style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10 }}>
//       <Image source={{ uri: `${item.image}` }} style={{ width: '100%', height:150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
//       <View style={{ padding: 10 }}>
//         <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 5 }}>
//           {item.name}!
//         </Text>
//         <Text style={{ fontSize: 12, color: 'black', marginBottom: 5 }}>Price: ₹{item.price}</Text>
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <Text style={{ color: 'black' }}>Qty: {item.unit}</Text>
//           <Text style={{ color: 'black', marginLeft: 10 }}>
//             Qty: {reduxData.cart[reduxData.cart.findIndex((items) => items.id == item.id)] && reduxData.cart[reduxData.cart.findIndex((items) => items.id == item.id)].quantity}
//           </Text>
//           <Text style={{ color: 'black', marginLeft: 10 }}>
//             Price: {reduxData.cart[reduxData.cart.findIndex((items) => items.id == item.id)] && reduxData.cart[reduxData.cart.findIndex((items) => items.id == item.id)].totalPrice.toFixed(2)}
//           </Text>
//         </View>
//       </View>
//       <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
//         <TouchableOpacity style={{ flex: 1, padding: 10, backgroundColor: 'blue', borderRadius: 5, marginRight: 5 }} onPress={() => HandleIncrement(item)}>
//           <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', color: 'white' }}>+</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={{ flex: 1, padding: 10, backgroundColor: 'blue', borderRadius: 5, marginLeft: 5 }} onPress={() => handleDecrement(item)}>
//           <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', color: 'white' }}>-</Text>

//         </TouchableOpacity>
//         <Text style={{ flex: 1, padding: 10, backgroundColor: 'blue', borderRadius: 5, marginLeft: 5, color:'white'}} onPress={onGoBack} >Go Back</Text>

//       </View>
//     </View>
//     </TouchableOpacity>
//     )
//   };

//   return (
//     <View>
//       {currentView === 'GetAllProducts' ? (
//         <ScrollView style={{ flex: 1, width: width }}>
//         <TextInput style={styles.searchInput} placeholder="Search Product" placeholderTextColor="black" onChangeText={setSearchTerm} />
//           <View style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
//             <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20 }}>
//               <View style={{ fontWeight: '700', display: 'flex', flexDirection: 'column', width: '50%' }}>
//                 <Text style={{ display: 'flex', flexDirection: 'row', height: 30, fontWeight: 700, alignSelf: 'flex-start', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', color: 'black' }}>
//                   {totalPrice === null ? 'Calculating total price...' : `Total Price: ${totalPrice.toFixed(2)}`}
//                 </Text>
//                 <Text style={{ width: '100%', fontWeight: 700, color: 'black' }}>orders: {reduxData.cart?.length}</Text>
//               </View>
//               <TouchableOpacity onPress={handleGoToCheckout}>
//                 <Text style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 100, height: 50, paddingHorizontal: 16, paddingTop: 13, borderRadius: 10, backgroundColor: 'blue', fontWeight: 700, color: 'white', paddingHorizontal: 18, paddingTop: 14 }}>
//                   Checkout
//                 </Text>
//               </TouchableOpacity>
//             </View>
//             <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 10 }}>
//               {filteredProducts.map((veg) => (
//                 <TouchableOpacity key={veg.id} style={{ width: '30%', marginBottom: 10 }} onPress={() => GotToParticular(veg)} >
//                   <View style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10 }}>
//                     <Image source={{ uri: `${veg.image}` }} style={{ width: '100%', height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
//                     <View style={{ padding: 10 }}>
//                       <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 5 }}>
//                         {veg.name}!
//                       </Text>
//                       <Text style={{ fontSize: 12, color: 'black', marginBottom: 5 }}>Price: ₹{veg.price}</Text>
//                       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <Text style={{ color: 'black' }}>Qty: {veg.unit}</Text>
//                         <Text style={{ color: 'black', marginLeft: 10 }}>
//                           Qty: {reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)] && reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)].quantity}
//                         </Text>
//                         <Text style={{ color: 'black', marginLeft: 10 }}>
//                           Price: {reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)] && reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)].totalPrice.toFixed(2)}
//                         </Text>
//                       </View>
//                     </View>
//                     <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
//                       <TouchableOpacity style={{ flex: 1, padding: 10, backgroundColor: 'blue', borderRadius: 5, marginRight: 5 }} onPress={() => HandleIncrement(veg)}>
//                         <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', color: 'white' }}>+</Text>
//                       </TouchableOpacity>
//                       <TouchableOpacity style={{ flex: 1, padding: 10, backgroundColor: 'blue', borderRadius: 5, marginLeft: 5 }} onPress={() => handleDecrement(veg)}>
//                         <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', color: 'white' }}>-</Text>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </View>

//             {/* {selectedItem && (
//               <View style={{ padding: 10 }}>
//                 <ItemDetails item={selectedItem} />
//               </View>
//             )} */}
//           </View>
//         </ScrollView>
//       ) : (
//         // <Checkout onGoBack={handleGoBack} />
//         <ItemDetails item ={selectedItem} onGoBack={handleGoBack} />
//       )}
//     </View>
//   );
// };

// export default GetAllProducts;
