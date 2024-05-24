// import { Text, View } from 'react-native'
// import React, { PureComponent } from 'react'
// import Orders from '../Orders/Orders'

// export class Checkout extends PureComponent {
//     constructor(props) {
//       super(props);
//     }
  
//     render() {
//       return (
//         <View>
//           <Text>{this.props.goBackText}</Text>
//         </View>
//       )
//     }
//   }
  
  

// const Checkout = ({changeContent})=>{

//     const content = (index, content)=>{
//         changeContent(index, content)
//       }
//     return(
//         <View>
//             <Text onPress={()=>{content(4, <Orders/>)}} >Go Back</Text>
//         </View>
//     )
// }

// export default Checkout

import React, { useState } from 'react';
import { View, Text, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { emptyCart } from '../../redux/slice/customerSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Svg, { Path } from "react-native-svg";
import Orders from '../Orders/Orders'


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

 
const Checkout = ({changeContent}) => {

    const GoBackToOrders = (index, content)=>{
        changeContent(index, content)
      }

  const dispatch = useDispatch();
  const checkout = useSelector(state => state.CustomerSlice.cart);
  const subtotal = checkout
    .filter(item => item && typeof item.price === 'number')
    .reduce((acc, curr) => acc + (curr.perPrice ? curr.perPrice : curr.price) * curr.quantity, 0);
  const ItemAdd = checkout.length;
  const [showAlert, setShowAlert] = useState(false);

  const handleRemoveCart = () => {
    dispatch(emptyCart());
  };

  return (
    <View style={{ padding: 10, height: '100%', flex: 1, justifyContent: '', position: 'relative', color: 'black' }}>
      <View style={{ marginTop: 30, marginLeft: 15 }}>
        {/* <AntDesign name="close" size={30} color="blue" /> */}
       <TouchableOpacity onPress={()=>{GoBackToOrders(4, <Orders/>)}}><GoBackSvg/></TouchableOpacity> 
      </View>
      <View
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
                  {subtotal === null
                    ? 'Calculating total price...'
                    : `Total Price: ${subtotal.toFixed(2)}`}
                </Text>
                <Text style={{width: '100%', fontWeight: 700, color: 'black'}}>
                  Items: {checkout?.length}
                </Text>
              </View>
              <TouchableOpacity >
                <Text
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 100,
                    height: 50,
                    paddingHorizontal: 20,
                    paddingTop: 13,
                    borderRadius: 10,
                    backgroundColor: '#FC8019',
                    fontWeight: 700,
                    color: 'white',
                    paddingHorizontal: 18,
                    paddingTop: 14,
                  }}>
                  Checkout
                </Text>
              </TouchableOpacity>
            </View>
      <View style={{ borderBottomColor: 'lightgray', borderBottomWidth: 1, marginVertical: 8, color: 'white' }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, marginTop: 10, color: 'black' }}>
        <Text style={{ fontSize: 20, fontWeight: '700', color: 'black' }}>Cart</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 50, padding: 6, backgroundColor: 'pink' }}>
          <AntDesign onPress={handleRemoveCart} name="delete" size={18} color="red" />
        </View>
      </View>
      <ScrollView style={{ marginTop: 10, marginBottom: 10, overflow: 'scroll', paddingTop: 10 }}>
        {checkout.length === 0 ? (
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 20, color: 'black' }}>No items available in the cart.</Text>
          </View>
        ) : (
          checkout.map((e, index) => (
            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center', paddingVertical: 15 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, position: 'relative' }}>
                <Image source={{ uri: e.image }} style={{ width: 70, height: 70, borderRadius: 10 }} />
                <View>
                  {!e.perPrice && (
                    <Text style={{ width: 25, height: 25, position: 'absolute', right: 12, bottom: 17, backgroundColor: 'black', color: 'white', padding: 3, borderRadius: 40, textAlign: 'center' }}>{e.quantity}</Text>
                  )}
                </View>
                <View style={{ color: 'black' }}>
                  <Text style={{ fontSize: 16, color: 'black' }}>{e.name}</Text>
                  <Text style={{ fontSize: 16, color: 'black' }}>Tax-exempt</Text>
                  {e.perPrice && (
                    <Text style={{ fontSize: 12, color: 'black' }}> ( {e.quantity} gms )</Text>
                  )}
                </View>
              </View>
              <View style={{ fontSize: 16 }}>
                <Text style={{ fontSize: 10, color: 'black' }}>{`${e.perPrice ? `` : `₹ ${e.price} x ${e.quantity}`}`}</Text>
                <Text style={{ color: 'black' }}>₹ {(e.perPrice ? e.perPrice * e.quantity : e.price * e.quantity).toFixed(2)}</Text>
              </View>
            </View>
          ))
        )}
        <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginVertical: 10 }} />
      </ScrollView>
      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center' }}>
        <Text style={{ fontSize: 16, color: 'black' }}>Subtotal</Text>
        <Text style={{ fontSize: 16, color: 'black' }}>₹ {subtotal}</Text>
      </View>
      <View style={{ borderBottomColor: 'gred', borderBottomWidth: 1, marginVertical: 10, alignItems: 'center', marginBottom: 20 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginBottom: 20 }}>
        <Text style={{ fontSize: 16, marginTop: 5, color: 'black' }}>Taxes</Text>
        <Text style={{ fontSize: 16, color: 'black' }}>₹ 0.00</Text>
      </View>
      <View style={{ color: 'white' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', fontSize: 16, paddingHorizontal: 15, marginBottom: 10 }}>
          <View>
            <Text style={{ fontSize: 16, color: 'black' }}>Total</Text>
            <Text style={{ fontSize: 16, color: 'black' }}>{ItemAdd} Item</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, color: 'black' }}>₹ {subtotal}</Text>
          </View>
        </View>
        <Pressable style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Checkout</Text>
        </Pressable>
      </View> */}
      {showAlert && (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20 }}>
          <View style={{ backgroundColor: 'white', padding: 40, borderRadius: 10 }}>
            <Text style={{ fontSize: 16, marginBottom: 10, color: 'black' }}>Please add items to the cart before proceeding to checkout.</Text>
            <Pressable onPress={() => setShowAlert(false)} style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>OK</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default Checkout;
