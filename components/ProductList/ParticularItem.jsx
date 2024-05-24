// import React, {useEffect, useState} from 'react';
// import {
//   Text,
//   View,
//   Image,
//   TextInput,
//   StyleSheet,
//   Pressable,
//   ToastAndroid,
// } from 'react-native';
// // import { Entypo } from "@expo/vector-icons";
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {useRoute, useNavigation} from '@react-navigation/native';

// import {useSelector, useDispatch} from 'react-redux';
// import {Picker} from '@react-native-picker/picker';

// // import { AddProduct, removeItem } from "../../redux/slice/Product";
// import { addToCart } from '../../redux/slice/customerSlice';
// // import DropDownPicker from "react-native-dropdown-picker";

// const ParticularItem = () => {
//   // const [cart, setCart] = useState([]);
//   const [product, setProduct] = useState([]);
//   const route = useRoute();
//   useEffect(() => {
//     setProduct(route.params.value);
//   }, []);
//   const [piece, setPiece] = useState(1);
//   const [quantity, setQuantity] = useState('1');
//   const [selectedType, setSelectedType] = useState(route.params.value.unit);
//   // console.log('unit :: ', product);
//   const navigation = useNavigation();
//   console.log(route.params.value);
//   const reduxData = useSelector(state => state.CustomerSlice);

//   const dispatch = useDispatch();
//   // const reduxData = useSelector((state) => state.CustomerSlice.cart);

//   const typePrice = {
//     // kgs: { price: 50 },

//     KG: {price: product.price},
//     gms: {price: product.price / 1000},
//     // gms: { price: 0.3 },
//     PIECE: {price: product.price},
//   };

//   const quantityTypes =
//     product.unit === 'KG'
//       ? [
//           {label: 'KG', value: 'KG'},
//           {label: 'Grams', value: 'gms'},
//         ]
//       : [{label: product.unit, value: product.unit}];

//   const handleChangeQuantity = text => {
//     console.log('Quantity:', text);
//     setQuantity(text);
//   };

//   const handleSelectType = type => {
//     console.log('Selected Type:', type);
//     setSelectedType(type);
//   };

//   const priceOne =
//     Math.ceil(quantity * typePrice[selectedType].price * 1000) / 1000;

//     const [selectedRole, setSelectedRole] = useState('---select Role----'); // Initial selected role

//     const handleRoleChange = (role) => {
//       setSelectedRole(role);
//     };
//   return (
//     <View
//       style={{
//         flexDirection: 'column',
//         // gap: "10px",
//         marginVertical: 10,
//         padding: '15px',
//         position: 'relative',
//         height: '100%',
//       }}> 
//         <View>
//       <Picker
//         selectedValue={selectedRole}
//         onValueChange={(itemValue) => handleRoleChange(itemValue)}
//       >
//         <Picker.Item label="---Select any Role ----" value="
//         " style={{color:"black"}} />
//         <Picker.Item label="Admin" value="admin" style={{color:"black"}} />
//         <Picker.Item label="POS User" value="posUser" style={{color:"black"}} />
//       </Picker>
//     </View>
        
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           marginLeft: 10,
//           // gap: "20px",
//           marginVertical: 20,
//         }}>
//         {product.image ? (
//           <Image
//             source={{
//               uri: product.image,
//             }}
//             style={{width: 70, height: 70, borderRadius: 10}}
//           />
//         ) : (
//           // Render a default image or nothing if product.image is not available
//           <View
//             style={{
//               width: 70,
//               height: 70,
//               borderRadius: 10,
//               backgroundColor: '#ccc',
//             }}
//           />
//         )}

//         {/* <View style={{ marginLeft: 20 }}> */}
//         <Text
//           style={{
//             fontSize: 16,
//             fontWeight: 'bold',
//             marginLeft: 10,
//             color: 'black',
//           }}>
//           {product.name} 1 {product.unit} {'\n'}
//           Price : ₹ {product.price}
//         </Text>
        
//         {/* </View> */}
//       </View>
//       {  selectedRole === 'admin' && (
//       <Text onPress={() => navigation.navigate('UpdateProducts',{product: product})} style={{backgroundColor:"black",color:"white",width:45,textAlign:"center",position:"absolute",right:30,top:30,padding:5}}>Edit</Text>
//       )}
//       <View style={{marginTop: 15, marginLeft: 3}}>
//         <Text
//           style={{
//             fontSize: 14,
//             fontWeight: 500,
//             color: 'grey',
//             marginBottom: 7,
//           }}>
//           More details
//         </Text>
//         <View
//           style={{
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//             borderColor: '#dddddd',
//             width: '100%',
//             height: '20vh',
//             borderWidth: 2,
//             borderRadius: 10,
//             padding: 15,
//           }}>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               //   backgroundColor: "#dddddd",
//               paddingTop: 15,
//               paddingBottom: 6,
//             }}>
//             <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
//               Price
//             </Text>
//             <Text style={{color: 'black', fontSize: 16, fontWeight: 600}}>
//               {quantity != '' && (
//                 <Text>
//                   {quantity} x {selectedType} : Rs.
//                   {Math.ceil(quantity * typePrice[selectedType].price * 1000) /
//                     1000}
//                 </Text>
//               )}
//             </Text>
//           </View>
//           <View
//             style={{
//               height: 1,
//               width: '100%',
//               backgroundColor: '#dddddd',
//             }}
//           />
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               flexWrap: 'wrap',
//               //   backgroundColor: "#dddddd",
//               paddingBottom: 10,
//             }}>
//             <Text style={{color: 'black', fontWeight: 500, marginTop: 20}}>
//               Enter Custom Quantity
//             </Text>
//             <View style={styles.container}>
//               <TextInput
//                 value={quantity}
//                 onChangeText={handleChangeQuantity}
//                 placeholder="Enter Quantity"
//                 keyboardType="numeric"
//                 style={styles.textInput}
//               />
//               <Picker
//                 selectedValue={selectedType}
//                 placeholder="units"
//                 onValueChange={itemValue => handleSelectType(itemValue)}
//                 style={{
//                   height: 40,
//                   width: 130,
//                   color: 'white',
//                   backgroundColor: '#31572c',
//                   // borderRadius:"10px"
//                 }}>
//                 {quantityTypes.map((type, index) => (
//                   <Picker.Item
//                     key={index}
//                     label={type.label}
//                     value={type.value}
//                   />
//                 ))}
//               </Picker>
//             </View>
//             {/* {quantity != "" && (
//               <Text>
//                 {quantity} x {selectedType} :{" "}
//                 {quantity * typePrice[selectedType].price} Rs.
//               </Text>
//             )} */}
//           </View>
//         </View>
//       </View>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           position: 'absolute',
//           bottom: 10,
//           // paddingRight:,
//           marginLeft: 10,
//           marginBottom: 10,
//           width: '95%',
//           // justifySelf: "end",
//           justifySelf: 'flex-end',
//           marginTop: 15,
//         }}>
//         <Pressable
//           style={{
//             backgroundColor: '#31572c',
//             width: 50,
//             height: 50,
//             justifyContent: 'center',
//             alignItems: 'center',
//             borderRadius: 7,
//           }}
//           onPress={() => {
//             // setPiece(piece + 1);
//             // console.log(cart);
//             // cart.push({
//             //   name: product.name,
//             //   quantityType: selectedType,
//             //   quantity: quantity,
//             //   price:
//             //     Math.ceil(quantity * typePrice[selectedType].price * 1000) /
//             //     1000,
//             // });
//             // console.log(cart);
//             product.price = 999;
//             const data = dispatch(
//               addToCart({
//                 ...product,
//                 // price: typePrice[selectedType].price,
//                 perPrice:
//                   selectedType == 'gms' ? typePrice[selectedType].price : '',
//                 totalPrice: priceOne,
//                 unit: selectedType,
//                 quantity: parseInt(quantity),
//               }),
//             );
//             setQuantity('1')
//             console.log(data.payload);
//             if (Platform.OS === 'android') {
//               ToastAndroid.show('Added to Cart', ToastAndroid.SHORT);
//               // quantity = ''
//             } else {
//               Alert.alert('Success', 'Added to Cart');
//               // quantity = ''
//             }
//             // console.log('oooooooooooooooooooooooooooooooooooooooooooo', {
//             //   ...product,
//             //   price: 999,
//             // });
//             // console.log(data.payload)
//           }}>
//           <FontAwesome name="plus" size={20} color="white" />
//           {/* <Entypo name="plus" size={24} color="white" /> */}
//         </Pressable>
//         <Pressable
//           style={{
//             backgroundColor: '#d8f3dc',
//             width: '82%',
//             height: 50,
//             justifyContent: 'center',
//             alignItems: 'center',
//             borderRadius: 7,
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//           onPress={() => navigation.navigate('Checkout')}>
//           <Text
//             style={{color: '#31572c', fontWeight: 700}}
//             // onPress={() => {
//             //   navigation.navigate('Checkout');
//             // }}
//           >
//             Go to cart
//           </Text>
//           <Text style={{color: 'grey'}}>{reduxData.cart?.length} items</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// /* 

// iske each individual price and total sub price of a product with respect to units must be seperated for same product

// if(action.payload.id  in state){ agr item exist hai array mai
//   if(action.payload.unit != state[exitstingitemindex].unit){ aur uska unit dusra hai to ek new object banake push karro
//     state.push(action.payload);
//   }
//   else{ aur agr unit same hai to uski quantity and price incoming product se add kardo
//     state[existsitemindex].quantity += action.payload.quantity
//     state[existsitemindex].price += action.payload.price
//   }
// }
// else if(state[exitstingitemindex] == -1){ agr item exists nahi raha to action.payload ke sath karna push
//   if(action.payload has property of totalprice and quantity){
//     state.push(action.payload);
//   }
//   else{ agr action.payload me total price and quantity set nahi hai to 
//     state.push({...action.payload,quantity:1,totalprice:quantity*action.payload.price})

//   }

// }

// */

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   textInput: {
//     flex: 1,
//     marginRight: 10,
//     padding: 8,
//     fontSize: 16,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     color:"black"
//   },
//   picker: {
//     width: 110,
//     height: 40,
//     padding: 8,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
// });

// export default ParticularItem;








// import React, { useEffect, useState } from 'react';
// import { Text, View, Image, TextInput, StyleSheet, Pressable, ToastAndroid, Platform, Dimensions } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { useSelector, useDispatch } from 'react-redux';
// import { Picker } from '@react-native-picker/picker';
// import Svg, { Path } from "react-native-svg";
// import { addToCart } from '../../redux/slice/customerSlice';
// const {width, height} = Dimensions.get('window')

// const GoBackSvg = (props) => (
//   <Svg
//     width={29}
//     height={24}
//     viewBox="0 0 29 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     {...props}
//   >
//     <Path
//       d="M2 12H27M2 12L12.4167 2M2 12L12.4167 22"
//       stroke="#FC8019"
//       strokeWidth={3}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </Svg>
// );

// const ParticularItem = (props) => {
  

//   const [product, setProduct] = useState([]);
//   useEffect(() => {
//     setProduct(props.item);
//   }, [props.item]);

//   const [piece, setPiece] = useState(1);
//   const [quantity, setQuantity] = useState('1');
//   const [selectedType, setSelectedType] = useState(props.item.unit);
//   const reduxData = useSelector(state => state.CustomerSlice);
//   const dispatch = useDispatch();

//   const typePrice = {
//     KG: { price: product.price },
//     gms: { price: product.price / 1000 },
//     PIECE: { price: product.price },
//   };
  
//   const quantityInBaseUnit = selectedType === 'KG' ? quantity : quantity / 1000;
  
//   const priceOne = Math.ceil(quantityInBaseUnit * typePrice[selectedType].price * 100) / 100;
  
  

//   const quantityTypes = product.unit === 'KG' ? [{ label: 'KG', value: 'KG' }, { label: 'Grams', value: 'gms' }] : [{ label: product.unit, value: product.unit }];

//   const handleChangeQuantity = text => {
//     setQuantity(text);
//   };

//   const handleSelectType = type => {
//     setSelectedType(type);
//   };

//   // const priceOne = Math.ceil(quantity * typePrice[selectedType].price * 1000) / 1000;

//   const [selectedRole, setSelectedRole] = useState('---select Role----');

//   const handleRoleChange = (role) => {
//     setSelectedRole(role);
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//         <Text onPress={() => { props.Back() }}>
//           <GoBackSvg />
//         </Text>
//         <Picker
//           selectedValue={selectedRole}
//           onValueChange={(itemValue) => handleRoleChange(itemValue)}
//           style={styles.picker}
//         >
//           <Picker.Item label="---Select any Role ----" value="" style={styles.pickerItem} />
//           <Picker.Item label="Admin" value="admin" style={styles.pickerItem} />
//           <Picker.Item label="POS User" value="posUser" style={styles.pickerItem} />
//         </Picker>
//       </View>

//       <View style={styles.productDetails}>
//         {product.image ? (
//           <Image
//             source={{ uri: product.image }}
//             style={styles.productImage}
//           />
//         ) : (
//             <View style={styles.productImagePlaceholder} />
//           )}
//         <Text style={styles.productName}>
//           {product.name} 1 {product.unit} {'\n'}
//           Price : ₹ {product.price}
//         </Text>
//       </View>

//       <View style={styles.moreDetails}>
//         <Text style={styles.moreDetailsTitle}>More details</Text>
//         <View style={styles.detailsContainer}>
//           <View style={styles.priceRow}>
//             <Text style={styles.priceLabel}>Price</Text>
//             <Text style={styles.priceValue}>
//               {quantity != '' && (
//                 <Text>
//                   {quantity} x {selectedType} : Rs. {Math.ceil(quantity * typePrice[selectedType].price * 1000) / 1000}
//                 </Text>
//               )}
//             </Text>
//           </View>
//           <View style={styles.separator} />
//           <View style={styles.quantityRow}>
//             <Text style={styles.quantityLabel}>Enter Custom Quantity</Text>
//             <View style={styles.quantityInputContainer}>
//               <TextInput
//                 value={quantity}
//                 onChangeText={handleChangeQuantity}
//                 placeholder="Enter Quantity"
//                 keyboardType="numeric"
//                 style={styles.quantityInput}
//               />
//               <Picker
//                 selectedValue={selectedType}
//                 placeholder="units"
//                 onValueChange={itemValue => handleSelectType(itemValue)}
//                 style={styles.quantityPicker}
//               >
//                 {quantityTypes.map((type, index) => (
//                   <Picker.Item key={index} label={type.label} value={type.value} />
//                 ))}
//               </Picker>
//             </View>
//           </View>
//         </View>
//       </View>

//       <View style={styles.buttonsContainer}>
//         <Pressable
//           style={styles.addButton}
//           onPress={() => {
//             product.price = 999;
//             const data = dispatch(addToCart({ ...product, perPrice: selectedType == 'gms' ? typePrice[selectedType].price : '', totalPrice: priceOne, unit: selectedType, quantity: parseInt(quantity) }));
//             setQuantity('1');
//             console.log(data.payload);
//             if (Platform.OS === 'android') {
//               ToastAndroid.show('Added to Cart', ToastAndroid.SHORT);
//             }
//           }}
//         >
//           <FontAwesome name="plus" size={20} color="white" />
//         </Pressable>
//         <Pressable
//           style={styles.cartButton}
//         >
//           <Text style={styles.cartButtonText}>Go to cart</Text>
//           <Text style={styles.cartItemCount}>{reduxData.cart?.length} items</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   picker: {
//     width: '80%',
//     marginBottom: 20,
//     color: 'black',
//     backgroundColor: '#f2f2f2',
//     borderRadius: 5,
//   },
//   pickerItem: {
//     color: 'black',
//   },
//   productDetails: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 10,
//     marginVertical: 20,
//   },
//   productImage: {
//     width: 0.2 * width,
//     height: 0.2 * width,
//     borderRadius: 10,
//   },
//   productImagePlaceholder: {
//     width: 0.2 * width,
//     height: 0.2 * width,
//     borderRadius: 10,
//     backgroundColor: '#ccc',
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginLeft: 10,
//     color: 'black',
//   },
//   moreDetails: {
//     // marginTop: 15,
//     // marginLeft: 3,
//     flex: 1,
//   },
//   moreDetailsTitle: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: 'grey',
//     marginBottom: 7,
//   },
//   detailsContainer: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     borderColor: '#dddddd',
//     width: '100%',
//     height: '20vh',
//     borderWidth: 2,
//     borderRadius: 10,
//     padding: 15,
//   },
//   priceRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: 15,
//     paddingBottom: 6,
//   },
//   priceLabel: {
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   priceValue: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   separator: {
//     height: 1,
//     width: '100%',
//     backgroundColor: '#dddddd',
//   },
//   quantityRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//     paddingBottom: 10,
//   },
//   quantityLabel: {
//     color: 'black',
//     fontWeight: '500',
//     marginTop: 20,
//   },
//   quantityInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   quantityInput: {
//     flex: 1,
//     marginRight: 10,
//     padding: 8,
//     fontSize: 16,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     color: 'black',
//   },
//   quantityPicker: {
//     height: 40,
//     width: 130,
//     color: 'white',
//     backgroundColor: '#31572c',
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     position: 'absolute',
//     bottom: 10,
//     width: '95%',
//     marginLeft: 10,
//     marginBottom: 10,
//   },
//   addButton: {
//     backgroundColor: '#31572c',
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 7,
//   },
//   cartButton: {
//     backgroundColor: '#d8f3dc',
//     width: '82%',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 7,
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   cartButtonText: {
//     color: '#31572c',
//     fontWeight: '700',
//   },
//   cartItemCount: {
//     color: 'grey',
//   },
// });

// export default ParticularItem;




import React, { useEffect, useState } from 'react';
import { Text, View, Image, TextInput, StyleSheet, Pressable, ToastAndroid, Platform, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import { addToCart } from '../../redux/slice/customerSlice';
import Svg, { Path } from "react-native-svg";

const GoBackSvg = (props) => (
  <Svg
    width={29}
    height={24}
    viewBox="0 0 29 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2 12H27M2 12L12.4167 2M2 12L12.4167 22"
      stroke="#FC8019"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const { width, height } = Dimensions.get('screen');

const ParticularItem = (props) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(props.item);
  }, [props.item]);

  const [piece, setPiece] = useState(1);
  const [quantity, setQuantity] = useState('1');
  const [selectedType, setSelectedType] = useState(props.item.unit);
  const reduxData = useSelector(state => state.CustomerSlice);
  const dispatch = useDispatch();

  const typePrice = {
    KG: { price: product.price },
    gms: { price: product.price / 1000 },
    PIECE: { price: product.price },
  };

  const quantityTypes = product.unit === 'KG' ? [{ label: 'KG', value: 'KG' }, { label: 'Grams', value: 'gms' }] : [{ label: product.unit, value: product.unit }];

  const handleChangeQuantity = text => {
    setQuantity(text);
  };

  const handleSelectType = type => {
    setSelectedType(type);
  };

  const priceOne = Math.ceil(quantity * typePrice[selectedType].price * 1000) / 1000;

  const [selectedRole, setSelectedRole] = useState('---select Role----');

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };


 


  return (
    <View style={[styles.container,{flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%', // Set the width to 90%
      // marginRight: '10%',// Align to the right side with 10% space on the left}
      left:'10%'
    }
]}>
      <View>
      <Pressable onPress={() => props.Back()}>
    <GoBackSvg />
  </Pressable>
        <Picker
          selectedValue={selectedRole}
          onValueChange={(itemValue) => handleRoleChange(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="---Select any Role ----" value="" style={styles.pickerItem} />
          <Picker.Item label="Admin" value="admin" style={styles.pickerItem} />
          <Picker.Item label="POS User" value="posUser" style={styles.pickerItem} />
        </Picker>
      </View>

      <View style={styles.productCard}>
        <View style={styles.productDetails}>
          {product.image ? (
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
            />
          ) : (
            <View style={styles.productImagePlaceholder} />
          )}
          <View style={styles.productInfo}>
            <Text style={styles.productName}>
              {product.name} 1 {product.unit}
            </Text>
            <Text style={styles.productPrice}>
              Price : ₹ {product.price}
            </Text>
          </View>
        </View>

        <View style={styles.moreDetails}>
          <Text style={styles.moreDetailsTitle}>More details</Text>
          <View style={styles.detailsContainer}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Price</Text>
              <Text style={styles.priceValue}>
                {quantity != '' && (
                  <Text>
                    {quantity} x {selectedType} : Rs. {priceOne}
                  </Text>
                )}
              </Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.quantityRow}>
              <Text style={styles.quantityLabel}>Enter Custom Quantity</Text>
              <View style={styles.quantityInputContainer}>
                <TextInput
                  value={quantity}
                  onChangeText={handleChangeQuantity}
                  placeholder="Enter Quantity"
                  keyboardType="numeric"
                  style={styles.quantityInput}
                />
                <Picker
                  selectedValue={selectedType}
                  placeholder="units"
                  onValueChange={itemValue => handleSelectType(itemValue)}
                  style={styles.quantityPicker}
                >
                  {quantityTypes.map((type, index) => (
                    <Picker.Item key={index} label={type.label} value={type.value} />
                  ))}
                </Picker>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.addButton}
          onPress={() => {
            // product.price = product.price;
            const data = dispatch(addToCart({ ...product, perPrice: selectedType == 'gms' ? typePrice[selectedType].price : '', totalPrice: priceOne, unit: selectedType, quantity: parseInt(quantity) }));
            setQuantity('1');
            console.log(data.payload);
            if (Platform.OS === 'android') {
              ToastAndroid.show('Added to Cart', ToastAndroid.SHORT);
            }
          }}
        >
          <FontAwesome name="plus" size={20} color="white" />
        </Pressable>
        <Pressable
          style={styles.cartButton}
        >
          <Text style={styles.cartButtonText}>Go to cart</Text>
          <Text style={styles.cartItemCount}>{reduxData.cart?.length} items</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  picker: {
    width: '80%',
    marginBottom: 20,
    color: 'black',
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  pickerItem: {
    color: 'black',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    elevation: 3,
    width: '90%',
  },
  productDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  productImagePlaceholder: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
  productInfo: {
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  productPrice: {
    fontSize: 14,
    color: 'grey',
  },
  moreDetails: {
    marginTop: 15,
  },
  moreDetailsTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: 'grey',
    marginBottom: 7,
  },
  detailsContainer: {
    borderColor: '#dddddd',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 6,
  },
  priceLabel: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  priceValue: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#dddddd',
  },
  quantityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingBottom: 10,
  },
  quantityLabel: {
    color: 'black',
    fontWeight: '500',
    marginTop: 20,
  },
  quantityInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityInput: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    color: 'black',
  },
  quantityPicker: {
    height: 40,
    width: 130,
    color: 'white',
    backgroundColor: '#31572c',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    width: '95%',
    marginLeft: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#31572c',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  cartButton: {
    backgroundColor: '#d8f3dc',
    width: '82%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    flexDirection: 'column',
    alignItems: 'center',
  },
  cartButtonText: {
    color: '#31572c',
    fontWeight: '700',
  },
  cartItemCount: {
    color: 'grey',
  },
});

export default ParticularItem;

