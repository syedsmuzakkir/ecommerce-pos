// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import GetAllProducts from '../ProductList/GetAllProducts';
// // import InnerComponent from './InnerComponent'; // Import InnerComponent
// import { fetchingOrders } from '../../api/fetchOrders';
// import { fetchingCustomers } from '../../api/fetchCustomers';
// import { fetchCategories } from '../../api/fetchProducts';
// import Checkout from '../Checkout';

// import Fruits from '../ProductList/Fruits'
// import Vegetables from '../ProductList/Vegetables';
// import LeafyVegetables from '../ProductList/LeafyVegetables';

// const InnerComponent = () => {
//   return (
//     <Text>Hello from Inner component</Text>
//   );
// };

// const Index = () => {


//   useEffect(() => {
//     getProduct();
//     fetchOrders();
//     fetchCustomers();
//   }, []);

// const [Products, setProducts] = useState([])
//   const getProduct = async () => {
//     try {
//       const AllProducts = await fetchCategories();
//       console.log('products',AllProducts)
//       console.log(AllProducts, 'this is allo p')
//       // const Products = AllProducts;
//       // dispatch(AddAllProducts(AllProducts));
//       setProducts(AllProducts)
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
//         // dispatch(addOrders(value));
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
//         // dispatch(addCustomer(value));
//       });
//     } catch (error) {
//       console.log('orders error', error);
//     }
//   };
  
//   const [activeTab, setActiveTab] = useState(0);

  
//   const fruits = Products.filter((product) =>
//     product.category === 'FRUITS'
//   );
  
//   const vegetables = Products.filter((product) =>
//     product.category === 'VEGETABLES'
//   );
  
//   const leafyVegetables = Products.filter((product) =>
//     product.category === 'LEAFY_VEGETABLES'
//   );
  
//   console.log(fruits, 'this is fruits')
//   console.log(vegetables, 'this is vegetables')
//   console.log(leafyVegetables, 'this is leafyvegetables')

//   const tabs = [
//     { title: 'All', content: <GetAllProducts products = {Products} />
//   },
//     { title: 'Fruits', content: <Fruits fruits={fruits}/> },
//     { title: 'Vegetables', content: <Vegetables vegetables = {vegetables} /> },
//     { title: 'Leafy Vegetables', content: <LeafyVegetables leafyVegetables ={leafyVegetables} /> },
//   ];

//   const handleTabPress = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <View style={styles.outerContainer} className = 'bg-black text-green-500' >
//       <ScrollView style={styles.outerContent}>
//         <View style={styles.container}>
//           <View style={styles.topStack}>
//             {tabs.map((tab, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.tabButton,
//                   activeTab === index && styles.activeTab,
//                 ]}
//                 onPress={() => handleTabPress(index)}
//               >
//                 <Text style={styles.tabText}>{tab.title}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//           <ScrollView>
//             <View style={styles.contentContainer}>
//               <Text style={styles.contentText} >
//                 {tabs[activeTab].content}
//                 {/* hello this is text of the soteaslkdfjlkeja */}
//               </Text>
//               {/* <Text className ='text-gray-900 bg-yellow-500' >hldglkrsjglk
//               aslkfjelkafklsdfjsldkfjsdfjglskd</Text> */}
//             </View>
//           </ScrollView>
//         </View>
//       </ScrollView>
//       <View style={styles.innerContainer}>
//         {/* Include InnerComponent */}
//         <Checkout/>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   outerContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     // width:1200
//     width:'100%',
//   },
//   outerContent: {
//     flex: 1, // 100% width for outer component
//   },
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     width:800
//   },
//   topStack: {
//     flexDirection: 'row',
//     backgroundColor: '#f0f0f0',
//     padding: 16,
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//   },
//   tabButton: {
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   activeTab: {
//     backgroundColor: '#e0e0e0',
//   },
//   tabText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   contentContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 5,
//     paddingBottom: 5,
//     flexGrow: 1,
//   },
//   contentText: {
//     fontSize: 18,
//   },
//   innerContainer: {
//     width: '100%', // 40% width for inner component
//     backgroundColor: '#ededed',
//     overflow: 'hidden', // Prevents text from overflowing its container
//     paddingRight:2
//   },
// });

// export default Index;



//

// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
// import GetAllProducts from '../ProductList/GetAllProducts';
// import { fetchCategories } from '../../api/fetchProducts';
// import Checkout from '../Checkout';

// import Fruits from '../ProductList/Fruits';
// import Vegetables from '../ProductList/Vegetables';
// import LeafyVegetables from '../ProductList/LeafyVegetables';

// const { width } = Dimensions.get('window');

// const Index = () => {
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const [Products, setProducts] = useState([]);
//   const fetchData = async () => {
//     try {
//       const AllProducts = await fetchCategories();
//       setProducts(AllProducts);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fruits = Products.filter((product) => product.category === 'FRUITS');
//   const vegetables = Products.filter((product) => product.category === 'VEGETABLES');
//   const leafyVegetables = Products.filter((product) => product.category === 'LEAFY_VEGETABLES');

//   const tabs = [
//     { title: 'All', content: <GetAllProducts products={Products} /> },
//     { title: 'Fruits', content: <Fruits fruits={fruits} /> },
//     { title: 'Vegetables', content: <Vegetables vegetables={vegetables} /> },
//     { title: 'Leafy Vegetables', content: <LeafyVegetables leafyVegetables={leafyVegetables} /> },
//   ];

//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabPress = (index) => {
//     setActiveTab(index);
//   };

  
//   return (
//     <View style={styles.outerContainer}>
//       <View style={styles.topStack}>
//         {tabs.map((tab, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.tabButton,
//               activeTab === index && styles.activeTab,
//             ]}
//             onPress={() => handleTabPress(index)}
//           >
//             <Text style={[styles.tabText, activeTab === index && { color: 'green' }]}>{tab.title}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <View style={styles.contentContainer}>
//         <ScrollView style={styles.scrollView}>
//           {tabs[activeTab].content}
//         </ScrollView>
//       </View>
//       <View style={styles.innerContainer}>
//         <Checkout />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   outerContainer: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   topStack: {
//     flexDirection: 'row',
//     backgroundColor: '#f0f0f0',
//     padding: 16,
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//   },
//   tabButton: {
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     marginBottom: 8,
//     marginRight: 8,
//   },
//   activeTab: {
//     backgroundColor: '#e0e0e0',
//   },
//   tabText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingBottom: 16,
//   },
//   scrollView: {
//     width: '100%',
//   },
//   innerContainer: {
//     width: '100%',
//     backgroundColor: '#ededed',
//     overflow: 'hidden',
//     paddingRight: 10, // Add some gap on the right side of Checkout
//   },
// });

// export default Index;




// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
// import GetAllProducts from '../ProductList/GetAllProducts';
// import { fetchingOrders } from '../../api/fetchOrders';
// import { fetchingCustomers } from '../../api/fetchCustomers';
// import { fetchCategories } from '../../api/fetchProducts';
// import Checkout from '../Checkout';

// import Fruits from '../ProductList/Fruits'
// import Vegetables from '../ProductList/Vegetables';
// import LeafyVegetables from '../ProductList/LeafyVegetables';


// const {width, height} = Dimensions.get('window'); // Get screen dimensions

// // const headerHeight = Math.min(height * 0.1);
// const avgDimension = (width + height) / 2;
// // const headerHeight = avgDimension * 0.1;
// const headerHeight = height*0.1
// const containerHeight=height*0.9
// const containerwidth= width*0.9
// const InnerContentHeader=containerHeight*0.09
// const InnerContentHeaderWidth=containerwidth*0.65
// const InnerContentwidth =containerwidth*0.65
// const InnerContentHeight = containerHeight*0.92
// const InnerwidthCheckout =containerwidth*0.35
// const InnerHeightCheckout = containerHeight




// console.log(headerHeight, 'header height from ',height)

// console.log(InnerContentHeader, 'headering')

// const InnerComponent = () => {
//   return (
//     <Text>Hello from Inner component</Text>
//   );
// };


// const Index = () => {
//   useEffect(() => {
//     getProduct();
//     fetchOrders();
//     fetchCustomers();
//   }, []);

//   const [Products, setProducts] = useState([])
//   const getProduct = async () => {
//     try {
//       const AllProducts = await fetchCategories();
//       setProducts(AllProducts)
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchOrders = async () => {
//     try {
//       const data = await fetchingOrders();
//       data.map(value => {
//         console.log('order value', value);
//       });
//     } catch (error) {
//       console.log('orders error', error);
//     }
//   };

//   const fetchCustomers = async () => {
//     try {
//       const response = await fetchingCustomers();
//       const data = response;
//       data.map(value => {
//         console.log('customer value', value);
//       });
//     } catch (error) {
//       console.log('orders error', error);
//     }
//   };

//   const [activeTab, setActiveTab] = useState(0);

//   const fruits = Products.filter((product) =>
//     product.category === 'FRUITS'
//   );
  
//   const vegetables = Products.filter((product) =>
//     product.category === 'VEGETABLES'
//   );
  
//   const leafyVegetables = Products.filter((product) =>
//     product.category === 'LEAFY_VEGETABLES'
//   );

//   const tabs = [
//     { title: 'All', content: <GetAllProducts products={Products} /> },
//     { title: 'Fruits', content: <Fruits fruits={fruits}/> },
//     { title: 'Vegetables', content: <Vegetables vegetables={vegetables} /> },
//     { title: 'Leafy Vegetables', content: <LeafyVegetables leafyVegetables={leafyVegetables} /> },
//   ];

//   const handleTabPress = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <View style={styles.outerContainer}>
//       {/* <ScrollView style={styles.outerContent}> */}
//         {/* <View style={[styles.container, { width: width * 0.6 }]}> */}
//         <View style = {{
//           flex: 1,
//     flexDirection: 'row',
//     flexWrap:'wrap',
//     justifyContent:'space-between'}}>
//       <View>
//           <View style={styles.topStack}>
//             {tabs.map((tab, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.tabButton,
//                   activeTab === index && styles.activeTab,
//                 ]}
//                 onPress={() => handleTabPress(index)}
//               >
//                 <Text style={styles.tabText}>{tab.title}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//           {/* <ScrollView> */}
//             <View style={styles.contentContainer}>
//               {tabs[activeTab].content}
//             </View>
//           {/* </ScrollView> */}
//           </View>
//         {/* </View> */}
//       {/* // </ScrollView> */}
//       <View style={styles.innerContainer}>
//         <Checkout/>
//       </View>
//       </View>

//      </View>
//   );
// };

// const styles = StyleSheet.create({
//   outerContainer: {
//     flex: 1,
//     flexDirection: 'column',
//     height:containerHeight,
//     width:containerwidth,
//     flexWrap:'wrap'
    
//   },
//   outerContent: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   topStack: {
//     flexDirection: 'row',
//     backgroundColor: '#f0f0f0',
//     // padding: 16,
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     height:InnerContentHeader,
//     width:InnerContentHeaderWidth,
//     color:'green'

//   },
//   tabButton: {
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   activeTab: {
//     backgroundColor: '#e0e0e0',
//   },
//   tabText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color:'green'
//   },
//   contentContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 5,
//     paddingBottom: 5,
//     flexGrow: 1,
//     width:InnerContentwidth,
//     height:InnerContentHeight,
//   },
//   innerContainer: {
//     // width: width * 0.29,
//     backgroundColor: '#ededed',
//     overflow: 'hidden',
//     paddingRight:2,
//     width:InnerwidthCheckout,
//     height:InnerHeightCheckout
//   },
// });

// export default Index;



// 4th 

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, BackHandler } from 'react-native';
import GetAllProducts from '../ProductList/GetAllProducts';
import { fetchingOrders } from '../../api/fetchOrders';
import { fetchingCustomers } from '../../api/fetchCustomers';
import { fetchCategories } from '../../api/fetchProducts';
import { addCustomer } from '../../redux/slice/customerSlice';
import Checkout from '../Checkout';

import Fruits from '../ProductList/Fruits'
import Vegetables from '../ProductList/Vegetables';
import LeafyVegetables from '../ProductList/LeafyVegetables';

import { useTabNavigation } from '../../App';
import { useDispatch } from 'react-redux';
const { width, height } = Dimensions.get('window'); // Get screen dimensions

const headerHeight = height * 0.1;
const containerHeight = height * 0.9;
const containerWidth = width * 0.9;
const InnerContentHeader = containerHeight * 0.09;
const InnerContentHeaderWidth = containerWidth * 0.65;
const InnerContentWidth = containerWidth * 0.65;
const InnerContentHeight = containerHeight * 0.92;
const InnerWidthCheckout = containerWidth * 0.35;
const InnerHeightCheckout = containerHeight;

const Index = ({changeTabContent, changeTab }) => {
  console.log(changeTabContent, 'this is change content it here h')
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getProduct();
        await fetchOrders();
        await fetchCustomers();
      } catch (error) {
        console.error(error);
      }
    };
  
    // Call fetchData immediately
    fetchData();
  }, []);
  

  const [Products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [tabHistory, setTabHistory] = useState([0]);

  const getProduct = async () => {
    try {
      const AllProducts = await fetchCategories();
      setProducts(AllProducts);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOrders = async () => {
    try {
      const data = await fetchingOrders();
      data.map(value => {
        console.log('order value', value);
      });
    } catch (error) {
      console.log('orders error', error);
    }
  };

  const dispatch = useDispatch()
  const fetchCustomers = async () => {
    try {
      const response = await fetchingCustomers();
      const data = response;
      data.map(value => {
        console.log('customer value', value);
        dispatch(addCustomer(value))
      });
    } catch (error) {
      console.log('orders error', error);
    }
  };

  const fruits = Products.filter((product) =>
    product.category === 'FRUITS'
  );

  const vegetables = Products.filter((product) =>
    product.category === 'VEGETABLES'
  );

  const leafyVegetables = Products.filter((product) =>
    product.category === 'LEAFY_VEGETABLES'
  );

  const tabs = [
    { title: <Text style={{borderBottomWidth:1, borderBottomColor:'#FC8019',  color: activeTab === 0 ? '#FC8019'  : '#9F9F9E'}}>All</Text>, content: <GetAllProducts products={Products} /> },
    { title: 'Fruits', content: <Fruits fruits={fruits} /> },
    { title: 'Vegetables', content: <Vegetables vegetables={vegetables} /> },
    { title: 'Leafy Vegetables', content: <LeafyVegetables leafyVegetables={leafyVegetables} /> },
  ];

  const handleTabPress = (index) => {
    setActiveTab(index);
    setTabHistory([...tabHistory, index]);
  };

  const handleBackPress = () => {
    if (tabHistory.length > 1) {
      const prevTabIndex = tabHistory[tabHistory.length - 2];
      setTabHistory(tabHistory.slice(0, -1));
      setActiveTab(prevTabIndex);
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => backHandler.remove();
  }, [tabHistory]);


  

  console.log(handleBackPress, 'this is handlepress')
  return (
    <View style={styles.outerContainer}>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        <View>
          <View style={styles.topStack}>
            {tabs.map((tab, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.tabButton,
                  activeTab === index && styles.activeTab,
                ]}
                onPress={() => handleTabPress(index)}
              >
                <Text style={styles.tabText}>{tab.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.contentContainer}>
            {tabs[activeTab].content}
          </View>
        </View>
        <View style={styles.innerContainer}>
          
          <Checkout changeContent = {changeTabContent} changeTab= {changeTab} />
        </View>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
    height: containerHeight,
    width: containerWidth,
    flexWrap: 'wrap'

  },
  outerContent: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topStack: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: InnerContentHeader,
    width: InnerContentHeaderWidth,
    color: 'green'

  },
  tabButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  activeTab: {
    backgroundColor: '#e0e0e0',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green'
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingBottom: 5,
    flexGrow: 1,
    width: InnerContentWidth,
    height: InnerContentHeight,
  },
  innerContainer: {
    backgroundColor: '#ededed',
    overflow: 'hidden',
    paddingRight: 2,
    width: InnerWidthCheckout,
    height: InnerHeightCheckout
  },
});

export default Index;
