import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, ActivityIndicator ,Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/slice/customerSlice';
import Checkout from '../Checkout';
import styles from './style';
import LottieView from 'lottie-react-native';


const { width, height } = Dimensions.get('window'); // Get screen dimensions


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

const Fruits = (props) => {
  console.log(props, 'this is from fruits');
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const reduxData = useSelector(state => state.CustomerSlice);
  const [currentView, setCurrentView] = useState('Fruits');

  const filteredProducts = props.fruits.filter((veg) =>
    veg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

//   const fruits = props.products.filter((product) =>
//   product.category === 'FRUITS'
// );

// const vegetables = props.products.filter((product) =>
//   product.category === 'VEGETABLES'
// );

// const leafyVegetables = props.products.filter((product) =>
//   product.category === 'LEAFY_VEGETABLES'
// );

// console.log(fruits, 'this is fruits')
// console.log(vegetables, 'this is vegetables')
// console.log(leafyVegetables, 'this is leafyvegetables')


  const HandleIncrement = (veg) => {
    dispatch(addToCart(veg));
  };

  const handleDecrement = (veg) => {
    dispatch(removeFromCart(veg.id));
  };

  const calculateTotalPrice = (reduxData) => {
    return reduxData.reduce((totalPrice, orderItem) => {
      const itemTotalPrice = orderItem.price * orderItem.quantity;
      return totalPrice + itemTotalPrice;
    }, 0);
  };

  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    if (reduxData.cart) {
      const newTotalPrice = calculateTotalPrice(reduxData.cart);
      setTotalPrice(newTotalPrice);
    }
  }, [reduxData.cart]);

  useEffect(() => {
    if (props.fruits.length > 0) {
      setLoading(false);
    }
  }, [props.fruits]);

  const handleGoBack = () => {
    setCurrentView('Fruits');
  };

  const handleGoToCheckout = () => {
    setCurrentView('Checkout');
  };

  const GotToParticular = (item) => {
    setSelectedItem(item); // Set the selected item when TouchableOpacity is clicked

    setCurrentView('ItemDetails');
  };
  const [selectedItem, setSelectedItem] = useState(null); 
  const handleItemPress = (item) => {
    setSelectedItem(item); // Set the selected item when TouchableOpacity is clicked
  };

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, width: width, height: 560, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   );
  // }
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          width: width,
          height: 560,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LottieView
        style={{ width: 200, height: 200 }}
        source={require('../../animation.json')}
        autoPlay={true}
        loop={true}
      />
    

      </View>
    );
  }


  const ItemDetails = ({ item , onGoBack }) => {
    return (
      <TouchableOpacity style = {{width:400}} >
      <View style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10 }}>
      <Image source={{ uri: `${item.image}` }} style={{ width: '100%', height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
      <View style={{ padding: 10 }}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 5 }}>
          {item.name}!
        </Text>
        <Text style={{ fontSize: 12, color: 'black', marginBottom: 5 }}>Price: ₹{item.price}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: 'black' }}>Qty: {item.unit}</Text>
          <Text style={{ color: 'black', marginLeft: 10 }}>
            Qty: {reduxData.cart[reduxData.cart.findIndex((items) => items.id == item.id)] && reduxData.cart[reduxData.cart.findIndex((items) => items.id == item.id)].quantity}
          </Text>
          <Text style={{ color: 'black', marginLeft: 10 }}>
            Price: {reduxData.cart[reduxData.cart.findIndex((items) => items.id == item.id)] && reduxData.cart[reduxData.cart.findIndex((items) => items.id == item.id)].totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
        <TouchableOpacity style={{ flex: 1, padding: 10, backgroundColor: 'blue', borderRadius: 5, marginRight: 5 }} onPress={() => HandleIncrement(item)}>
          <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', color: 'white' }}>+</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={{ flex: 1, padding: 10, backgroundColor: 'blue', borderRadius: 5, marginLeft: 5 }} onPress={() => handleDecrement(item)}>
          <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', color: 'white' }}>-</Text>

        </TouchableOpacity> */}
        <Text style={{ flex: 1, padding: 10, backgroundColor: 'blue', borderRadius: 5, marginLeft: 5, color:'white'}} onPress={onGoBack} >Go Back</Text>

      </View>
    </View>
    </TouchableOpacity>
    )
  };
  

  return (
    // <View>
    //   {currentView === 'Fruits' ? (
    //     <ScrollView style={{ flex: 1, width: 760, height:560 }}>
    //       <TextInput style={styles.searchInput} placeholder="Search Product" placeholderTextColor="black" onChangeText={setSearchTerm} />
    //       <View style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
    //         <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20 }}>
    //           <View style={{ fontWeight: '700', display: 'flex', flexDirection: 'column', width: '50%' }}>
    //             <Text style={{ display: 'flex', flexDirection: 'row', height: 30, fontWeight: 700, alignSelf: 'flex-start', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', color: 'black' }}>
    //               {totalPrice === null ? 'Calculating total price...' : `Total Price: ${totalPrice.toFixed(2)}`}
    //             </Text>
    //             <Text style={{ width: '100%', fontWeight: 700, color: 'black' }}>orders: {reduxData.cart?.length}</Text>
    //           </View>
    //           <TouchableOpacity onPress={handleGoToCheckout}>
    //             <Text style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 100, height: 50, paddingHorizontal: 16, paddingTop: 13, borderRadius: 10, backgroundColor: 'blue', fontWeight: 700, color: 'white', paddingHorizontal: 18, paddingTop: 14 }}>
    //               Checkout
    //             </Text>
    //           </TouchableOpacity>
    //         </View>
    //         <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 10 }}>
    //           {filteredProducts.map((veg) => (
    //             <TouchableOpacity key={veg.id} style={{ width: '31%', marginBottom: 10 }} onPress={() => GotToParticular(veg)} >
    //               <View style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10 }}>
    //                 <Image source={{ uri: `${veg.image}` }} style={{ width: '100%', height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
    //                 <View style={{ padding: 10 }}>
    //                   <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 5 }}>
    //                     {veg.name}!
    //                   </Text>
    //                   <Text style={{ fontSize: 12, color: 'black', marginBottom: 5 }}>Price: ₹{veg.price}</Text>
    //                   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //                     <Text style={{ color: 'black' }}>Qty: {veg.unit}</Text>
    //                     <Text style={{ color: 'black', marginLeft: 10 }}>
    //                       Qty: {reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)] && reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)].quantity}
    //                     </Text>
    //                     <Text style={{ color: 'black', marginLeft: 10 }}>
    //                       Price: {reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)] && reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)].totalPrice.toFixed(2)}
    //                     </Text>
    //                   </View>
    //                 </View>
    //                 <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
    //                   <TouchableOpacity style={{ flex: 1, padding: 10, backgroundColor: 'blue', borderRadius: 5, marginRight: 5 }} onPress={() => HandleIncrement(veg)}>
    //                     <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', color: 'white' }}>+</Text>
    //                   </TouchableOpacity>
    //                   <TouchableOpacity style={{ flex: 1, padding: 10, backgroundColor: 'blue', borderRadius: 5, marginLeft: 5 }} onPress={() => handleDecrement(veg)}>
    //                     <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', color: 'white' }}>-</Text>
    //                   </TouchableOpacity>
    //                 </View>
    //               </View>
    //             </TouchableOpacity>
    //           ))}
    //         </View>

    //         {/* {selectedItem && (
    //           <View style={{ padding: 10 }}>
    //             <ItemDetails item={selectedItem} />
    //           </View>
    //         )} */}
    //       </View>
    //     </ScrollView>
    //   ) : (
    //     // <Checkout onGoBack={handleGoBack} />
    //     <ItemDetails item ={selectedItem} onGoBack={handleGoBack} />
    //   )}
    // </View>
    <ScrollView style = {{flex:1}}>
      {currentView === 'Fruits' ? (
        <ScrollView
          // style={{flex: 1, width: width-width*9, height:100, overflow: 'scroll' }}
          >
          <TextInput
            style={styles.searchInput}
            placeholder="Search Product"
            placeholderTextColor="black"
            onChangeText={setSearchTerm}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
            }}>
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
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
              }}>
              {filteredProducts.map(veg => (
                <TouchableOpacity
                  key={veg.id}
                  style={{width: '30%', marginBottom: 10}}
                  onPress={() => GotToParticular(veg)}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgray',
                      borderRadius: 10,
                    }}>
                    <Image
                      source={{uri: `${veg.image}`}}
                      style={{
                        width: '100%',
                        height: 150,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                    />
                    <View style={{padding: 10}}>
                      <Text
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'black',
                          marginBottom: 5,
                        }}>
                        {veg.name}!
                      </Text>
                      <Text
                        style={{fontSize: 12, color: 'black', marginBottom: 5}}>
                        Price: ₹{veg.price}
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color: 'black'}}>Qty: {veg.unit}</Text>
                        <Text style={{color: 'black', marginLeft: 10}}>
                          Qty:{' '}
                          {reduxData.cart[
                            reduxData.cart.findIndex(item => item.id == veg.id)
                          ] &&
                            reduxData.cart[
                              reduxData.cart.findIndex(
                                item => item.id == veg.id,
                              )
                            ].quantity}
                        </Text>
                        {/* <Text style={{color: 'black', marginLeft: 10}}>
                          Price:{' '}
                          {reduxData.cart[
                            reduxData.cart.findIndex(item => item.id == veg.id)
                          ] &&
                            reduxData.cart[
                              reduxData.cart.findIndex(
                                item => item.id == veg.id,
                              )
                            ].totalPrice.toFixed(2)}
                        </Text> */}
                       
                      </View>
                      <View  style={{flexDirection: 'row', alignItems: 'center',justifyContent:'space-between'}}>
                          <Text style={{color: 'black', width:'70%'}}>
                          Price:{' '}
                          {reduxData.cart[
                            reduxData.cart.findIndex(item => item.id == veg.id)
                          ] &&
                            reduxData.cart[
                              reduxData.cart.findIndex(
                                item => item.id == veg.id,
                              )
                            ].totalPrice.toFixed(2)}
                        </Text>
                        <TouchableOpacity
                          style={{
                            flex: 1,
                            // padding: 10,
                            borderRadius: 50,
                            backgroundColor: 'white',
                            borderWidth: 1,
                            borderColor: '#FC8019',
                            marginRight: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                           
                          }}
                          onPress={() => HandleIncrement(veg)}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 20,
                              fontWeight: '700',
                              color: '#FC8019',
                            }}>
                            +
                          </Text>
                          {/* <Image source= {plusIcon} /> */}
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                      }}>
                     
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

       
          </View>
        </ScrollView>
      ) : (
        // <Checkout onGoBack={handleGoBack} />
        <ItemDetails item={selectedItem} Back={handleGoBack} />
      )}
    </ScrollView>
  );
};

export default Fruits;
