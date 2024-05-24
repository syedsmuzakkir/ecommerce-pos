// import React, { useState } from 'react';
// import { Text, View, Image, TextInput, StyleSheet, Pressable, ToastAndroid, Platform } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/slice/customerSlice';
// import { Picker } from '@react-native-picker/picker';
// import Svg, { Path } from "react-native-svg";
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const GoBackSvg = () => (
//   <Svg width={29} height={24} viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <Path d="M2 12H27M2 12L12.4167 2M2 12L12.4167 22" stroke="#FC8019" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
//   </Svg>
// );

// const ParticularItem = (props) => {
//   const [quantity, setQuantity] = useState('1');
//   const [selectedType, setSelectedType] = useState(props.item.unit);
//   const dispatch = useDispatch();

//   const handleChangeQuantity = text => setQuantity(text);

//   const handleSelectType = type => setSelectedType(type);

//   const priceOne = Math.ceil(quantity * (props.item.price / (selectedType === 'gms' ? 1000 : 1)) * 1000) / 1000;

//   const quantityTypes = props.item.unit === 'KG' ? [{ label: 'KG', value: 'KG' }, { label: 'Grams', value: 'gms' }] : [{ label: props.item.unit, value: props.item.unit }];

//   return (
//     <View style={{flexDirection:'column'}}>
//       {/* <View>
//         <Text onPress={props.Back}>
//           <GoBackSvg />
//         </Text>
//         <Picker
//           selectedValue={props.selectedRole}
//           onValueChange={props.handleRoleChange}
//           style={styles.picker}
//         >
//           <Picker.Item label="---Select any Role ----" value="" style={styles.pickerItem} />
//           <Picker.Item label="Admin" value="admin" style={styles.pickerItem} />
//           <Picker.Item label="POS User" value="posUser" style={styles.pickerItem} />
//         </Picker>
//       </View> */}

//       <View style={''}>
//         {/* <View style={styles.productDetails}>
//           {props.item.image ? (
//             <Image source={{ uri: props.item.image }} style={styles.productImage} />
//           ) : (
//             <View style={styles.productImagePlaceholder} />
//           )} */}
//           {/* <View style={styles.productInfo}>
//             <Text style={styles.productName}>{props.item.name} 1 {props.item.unit}</Text>
//             <Text style={styles.productPrice}>Price : ₹ {props.item.price}</Text>
//           </View> */}
//         {/* </View> */}

//         <View style={''}>
//           {/* <Text style={styles.moreDetailsTitle}>More details</Text> */}
//           <View style={''}>
//             <View >
//               <Text style={''}>Price</Text>
//               <Text style={''}>{quantity != '' && `${quantity} x ${selectedType} : Rs. ${priceOne}`}</Text>
//             </View>
//             <View style={''} />
//             <View style={''}>
//               <Text style={''}>Enter Custom Quantity</Text>
//               <View style={''}>
//                 <TextInput
//                   value={quantity}
//                   onChangeText={handleChangeQuantity}
//                   placeholder="Enter Quantity"
//                   keyboardType="numeric"
//                   style={''}
//                 />
//                 <Picker
//                   selectedValue={selectedType}
//                   placeholder="units"
//                   onValueChange={handleSelectType}
//                   style={styles.quantityPicker}
//                 >
//                   {quantityTypes.map((type, index) => (
//                     <Picker.Item key={index} label={type.label} value={type.value} />
//                   ))}
//                 </Picker>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>

//       <View style={styles.buttonsContainer}>
//         <Pressable
//           style={styles.addButton}
//           onPress={() => {
//             const data = dispatch(addToCart({ ...props.item, perPrice: selectedType === 'gms' ? props.item.price / 1000 : '', totalPrice: priceOne, unit: selectedType, quantity: parseInt(quantity) }));
//             setQuantity('1');
//             if (Platform.OS === 'android') {
//               ToastAndroid.show('Added to Cart', ToastAndroid.SHORT);
//             }
//           }}
//         >
//           {/* <FontAwesome name="plus" size={20} color="white" /> */}
//           <Text style= {{color:'white'}} >Save</Text>
//         </Pressable>
//         {/* <Pressable style={styles.cartButton}>
//           <Text style={styles.cartButtonText}>Go to cart</Text>
//           <Text style={styles.cartItemCount}>{props.reduxData.cart?.length} items</Text>
//         </Pressable> */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       marginTop: 10,
//     },
//     picker: {
//       width: '80%',
//       marginBottom: 20,
//       color: 'black',
//       backgroundColor: '#f2f2f2',
//       borderRadius: 5,
//     },
//     pickerItem: {
//       color: 'black',
//     },
//     productCard: {
//       backgroundColor: '#fff',
//       borderRadius: 10,
//       padding: 10,
//       marginHorizontal: 10,
//       marginBottom: 20,
//       elevation: 3,
//       width: '90%',
//     },
//     productDetails: {
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     productImage: {
//       width: 70,
//       height: 70,
//       borderRadius: 10,
//     },
//     productImagePlaceholder: {
//       width: 70,
//       height: 70,
//       borderRadius: 10,
//       backgroundColor: '#ccc',
//     },
//     productInfo: {
//       marginLeft: 10,
//     },
//     productName: {
//       fontSize: 16,
//       fontWeight: 'bold',
//       color: 'black',
//     },
//     productPrice: {
//       fontSize: 14,
//       color: 'grey',
//     },
//     moreDetails: {
//       marginTop: 15,
//     },
//     moreDetailsTitle: {
//       fontSize: 14,
//       fontWeight: '500',
//       color: 'grey',
//       marginBottom: 7,
//     },
//     detailsContainer: {
//       borderColor: '#dddddd',
//       borderWidth: 2,
//       borderRadius: 10,
//       padding: 15,
//     },
//     priceRow: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       paddingTop: 15,
//       paddingBottom: 6,
//     },
//     priceLabel: {
//       color: 'black',
//       fontWeight: 'bold',
//       fontSize: 16,
//     },
//     priceValue: {
//       color: 'black',
//       fontSize: 16,
//       fontWeight: '600',
//     },
//     separator: {
//       height: 1,
//       width: '100%',
//       backgroundColor: '#dddddd',
//     },
//     quantityRow: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       flexWrap: 'wrap',
//       paddingBottom: 10,
//     },
//     quantityLabel: {
//       color: 'black',
//       fontWeight: '500',
//       marginTop: 20,
//     },
//     quantityInputContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginTop: 10,
//     },
//     quantityInput: {
//       flex: 1,
//       marginRight: 10,
//       padding: 8,
//       fontSize: 16,
//       borderRadius: 5,
//       borderWidth: 1,
//       borderColor: '#ccc',
//       color: 'black',
//     },
//     quantityPicker: {
//       height: 40,
//       width: 130,
//       color: 'white',
//       backgroundColor: '#31572c',
//     },
//     buttonsContainer: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       position: 'absolute',
//       bottom: 10,
//       width: '95%',
//       marginLeft: 10,
//       marginBottom: 10,
//     },
//     addButton: {
//       backgroundColor: '#31572c',
//       width: 50,
//       height: 50,
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 7,
//     },
//     cartButton: {
//       backgroundColor: '#d8f3dc',
//       width: '82%',
//       height: 50,
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 7,
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     cartButtonText: {
//       color: '#31572c',
//       fontWeight: '700',
//     },
//     cartItemCount: {
//       color: 'grey',
//     },
//   });

// export default ParticularItem;

// import React, { useState } from 'react';
// import { Text, View, Image, TextInput, Pressable, ToastAndroid, Platform } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/slice/customerSlice';
// import { Picker } from '@react-native-picker/picker';

// const ParticularItem = (props) => {
//   const [quantity, setQuantity] = useState('1');
//   const [selectedType, setSelectedType] = useState(props.item.unit);
//   const dispatch = useDispatch();

//   const handleChangeQuantity = text => setQuantity(text);
//   const handleSelectType = type => setSelectedType(type);

//   const priceOne = Math.ceil(quantity * (props.item.price / (selectedType === 'gms' ? 1000 : 1)) * 1000) / 1000;
//   const quantityTypes = props.item.unit === 'KG' ? [{ label: 'KG', value: 'KG' }, { label: 'Grams', value: 'gms' }] : [{ label: props.item.unit, value: props.item.unit }];

//   return (
//     <View style={{ flex: 1, padding: 10 }}>
//       <View style={{ flexDirection: 'column', flex: 1 }}>
//         <View style={{ marginBottom: 10 }}>
//           <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Price</Text>
//           <Text>{quantity !== '' && `${quantity} x ${selectedType} : Rs. ${priceOne}`}</Text>
//         </View>
//         <View style={{ marginBottom: 10 }}>
//           <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Enter Custom Quantity</Text>
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <TextInput
//               value={quantity}
//               onChangeText={handleChangeQuantity}
//               placeholder="Enter Quantity"
//               keyboardType="numeric"
//               style={{ flex: 1, marginRight: 10, padding: 5, borderWidth: 1, borderColor: 'gray' }}
//             />
//             <Picker
//               selectedValue={selectedType}
//               onValueChange={handleSelectType}
//               style={{ flex: 1 }}
//             >
//               {quantityTypes.map((type, index) => (
//                 <Picker.Item key={index} label={type.label} value={type.value} />
//               ))}
//             </Picker>
//           </View>
//         </View>
//       </View>
//       <Pressable
//         style={{ backgroundColor: 'blue', padding: 10, alignItems: 'center', borderRadius: 5 }}
//         onPress={() => {
//           dispatch(addToCart({ ...props.item, perPrice: selectedType === 'gms' ? props.item.price / 1000 : '', totalPrice: priceOne, unit: selectedType, quantity: parseInt(quantity) }));
//           setQuantity('1');
//           if (Platform.OS === 'android') {
//             ToastAndroid.show('Added to Cart', ToastAndroid.SHORT);
//           }
//         }}
//       >
//         <Text style={{ color: 'white' }}>Save</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default ParticularItem;


import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, ToastAndroid, Platform, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice/customerSlice';
import { Picker } from '@react-native-picker/picker';

// const ParticularItem = (props) => {
//     const [quantity, setQuantity] = useState('1');
//     const [selectedType, setSelectedType] = useState(props.item.unit);
//     const [previousSelectedType, setPreviousSelectedType] = useState(props.item.unit);
//     const dispatch = useDispatch();
  
//     const handleChangeQuantity = text => setQuantity(text);
//     const handleSelectType = type => {
//       setPreviousSelectedType(selectedType);
//       setSelectedType(type);
//     };
  
//     let priceOne;
//     if (selectedType === 'gms') {
//       priceOne = props.item.price * (quantity / 1000);
//     } else if (previousSelectedType === 'gms') {
//       priceOne = props.item.price * quantity;
//     } else {
//       priceOne = props.item.price * quantity;
//     }
  
//     const quantityTypes = props.item.unit === 'KG' ? [{ label: 'KG', value: 'KG' }, { label: 'Grams', value: 'gms' }] : [{ label: props.item.unit, value: props.item.unit }];

//     function generateRandomId(length) {
//         let result = '';
//         const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         const charactersLength = characters.length;
//         for (let i = 0; i < length; i++) {
//           result += characters.charAt(Math.floor(Math.random() * charactersLength));
//         }
//         return result;
//       }
      
//       const randomId = generateRandomId(10);
//   return (
//     <View style={styles.container}>
//       <View style={styles.priceContainer}>
//         <Text style={styles.priceLabel}>Price</Text>
//         <Text style={styles.priceValue}>{quantity !== '' && `${quantity} x ${selectedType} : Rs. ${priceOne.toFixed(2)}`}</Text>
//       </View>
//       <View style={styles.quantityContainer}>
//         <Text style={styles.quantityLabel}>Enter Custom Quantity</Text>
//         <View style={styles.quantityInputContainer}>
//           <TextInput
//             value={quantity}
//             onChangeText={handleChangeQuantity}
//             placeholder="Enter Quantity"
//             keyboardType="numeric"
//             style={styles.quantityInput}
//           />
//           <Picker
//             selectedValue={selectedType}
//             onValueChange={handleSelectType}
//             style={styles.quantityPicker}
//           >
//             {quantityTypes.map((type, index) => (
//               <Picker.Item  key={index} label={type.label} value={type.value} />
//             ))}
//           </Picker>
//         </View>
//       </View>
//       <Pressable
//         style={styles.saveButton}
//         onPress={() => {
//           dispatch(addToCart({ ...props.item , perPrice: selectedType === 'gms' ? props.item.price / 1000 : '', totalPrice: priceOne, unit: selectedType, quantity: parseInt(quantity) }));
//           setQuantity('1');
//           if (Platform.OS === 'android') {
//             ToastAndroid.show('Added to Cart', ToastAndroid.SHORT);
//           }
//         }}
//       >
//         <Text style={styles.saveButtonText}>Save</Text>
//       </Pressable>
//     </View>
//   );
// };

const ParticularItem = (props) => {
  const [quantity, setQuantity] = useState('1');
  const [selectedType, setSelectedType] = useState(props.item.unit);
  const [previousSelectedType, setPreviousSelectedType] = useState(props.item.unit);
  const dispatch = useDispatch();

  const handleChangeQuantity = text => {
    if (selectedType === 'gms' && text.includes('.')) {
      // Limiting the decimal places to 2 if the selected type is grams
      setQuantity(text.slice(0, text.indexOf('.') + 3));
    } else {
      setQuantity(text);
    }
  };

  const handleSelectType = type => {
    setPreviousSelectedType(selectedType);
    setSelectedType(type);
  };

  let priceOne;
  if (selectedType === 'gms') {
    priceOne = props.item.price * (parseFloat(quantity) / 1000);
  } else if (previousSelectedType === 'gms') {
    priceOne = props.item.price * parseFloat(quantity);
  } else {
    priceOne = props.item.price * parseFloat(quantity);
  }

  const quantityTypes = props.item.unit === 'KG' ? [{ label: 'KG', value: 'KG' }, { label: 'Grams', value: 'gms' }] : [{ label: props.item.unit, value: props.item.unit }];

      function generateRandomId(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }
      
      const randomId = generateRandomId(10);

  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text style={styles.priceLabel}>Price</Text>
        <Text style={styles.priceValue}>{quantity !== '' && `${quantity} x ${selectedType} : Rs. ${priceOne.toFixed(2)}`}</Text>
      </View>
      <View style={styles.quantityContainer}>
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
            onValueChange={handleSelectType}
            style={styles.quantityPicker}
          >
            {quantityTypes.map((type, index) => (
              <Picker.Item key={index} label={type.label} value={type.value} />
            ))}
          </Picker>
        </View>
      </View>
      <Pressable
        style={styles.saveButton}
        onPress={() => {
          dispatch(addToCart({ ...props.item, id:randomId, perPrice: selectedType === 'gms' ? props.item.price / 1000 : '', totalPrice: priceOne, unit: selectedType, quantity: parseFloat(quantity) }));
          setQuantity('1');
          if (Platform.OS === 'android') {
            ToastAndroid.show('Added to Cart', ToastAndroid.SHORT);
          }
        }}
      >
        <Text style={styles.saveButtonText}>Save</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  priceContainer: {
    marginBottom: 16,
  },
  priceLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  priceValue: {
    fontSize: 16,
  },
  quantityContainer: {
    marginBottom: 16,
  },
  quantityLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  quantityInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityInput: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 8,
  },
  quantityPicker: {
    flex: 1,
    padding:10,
    backgroundColor:'gray',
    color:'white'
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 12,
    alignItems: 'center',
    borderRadius: 4,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ParticularItem;
