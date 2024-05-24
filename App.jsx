/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
// import Product from "./components/Allproducts/index"

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const App = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const tabs = [
//     { title: 'Tab 1', content: <Product /> },
//     { title: 'Tab 2', content: 'This is the content for Tab 2.' },
//     { title: 'Tab 3', content: 'This is the content for Tab 3.' },
//     { title: 'Tab 4', content: 'This is the content for Tab 4.' },
//   ];

//   const handleTabPress = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <View style={styles.mainContainer}>
//       <View style={styles.headerContainer}>
//         <Text>Header</Text>
//       </View>
//       <View style={styles.container}>
//         <ScrollView horizontal>
//           <View style={styles.leftStack}>
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
//         </ScrollView>
//         <ScrollView>
//           <View style={styles.contentContainer}>
//             <Text style={styles.contentText}>
//               {tabs[activeTab].content}
//             </Text>
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//   },
//   headerContainer: {
//     backgroundColor: '#f0f0f0',
//     padding: 16,
//     alignItems: 'center',
//   },
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center', // Center the components horizontally
//   },
//   leftStack: {
//     backgroundColor: '#f0f0f0',
//     padding: 16,
//     minWidth: windowWidth * 0.1, // Set a minimum width for the left stack
//     height: windowHeight, // Set height to the full window height for scrolling
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
//     flex: 1,
//     width: windowWidth * 0.899, // Set the width to 80% of the screen width
//     backgroundColor: 'white',
//     padding: 16,
//     justifyContent: 'center',
//   },
//   contentText: {
//     fontSize: 18,
//   },
// });

// export default App;




// the above code is for Tabs 

// Heigt and width is set to their screen sizes 
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';

// const App = () => {
//   // Get the screen dimensions
//   const [screenDimensions, setScreenDimensions] = useState(Dimensions.get('window'));

//   useEffect(() => {
//     const updateDimensions = () => {
//       setScreenDimensions(Dimensions.get('window'));
//     };

//     Dimensions.addEventListener('change', updateDimensions);

//     return () => Dimensions.removeEventListener('change', updateDimensions); // Cleanup
//   }, []);

//   const isTablet = screenDimensions.width > 600;

//   return (
//     <View style={styles.container}>
//       <View style={[styles.header, { height: 60, width: '100%' }]}>
//         <Text style={styles.headerText}>App Header</Text>
//       </View>
//       <View style={styles.bodyContainer}>
//         <View style={[styles.sidebar, { height: '100%', width: isTablet ? 200 : screenDimensions.width * 0.2 }]}>
//           <Text style={styles.sidebarText}>Sidebar hello from side bar is not being displayed lorem</Text>
//         </View>
//         <View style={[styles.content, { height: '100%', width: isTablet ? screenDimensions.width - 200 : screenDimensions.width * 0.8 }]}>
//           <Text style={styles.contentText}>Main Content content area is unable to display why? Area</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   header: {
//     backgroundColor: '#f0f0f0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   bodyContainer: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   sidebar: {
//     backgroundColor: '#e0e0e0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   sidebarText: {
//     fontSize: 16,
//   },
//   content: {
//     backgroundColor: '#ffffff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   contentText: {
//     fontSize: 18,
//   },
// });

// export default App;


// working code for side bar  below

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
// import Product from './components/Allproducts/index';
// import Home from './components/Home';


// const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

// const App = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const tabs = [
//     { title: 'Home', content: <Product /> },
//     { title: 'Customers', content: 'This is the content for Tab 2.' },
//     { title: 'Inventory', content: 'This is the content for Tab 3.' },
//     { title: 'Reports', content: 'This is the content for Tab 4.' },
//     { title: 'Orders', content: 'This is the content for Tab 4.' },

//   ];

//   const handleTabPress = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <View style={styles.mainContainer}>
//       <View style={[styles.headerContainer, { height: 60, width: '100%' }]}>
//         <Text style = {{color:'green', fontSize:18}} >Header</Text>
//       </View>
//       <View style={styles.container}>
//         <ScrollView horizontal>
//           <View style={[styles.leftStack, { height: windowHeight - 60, width: windowWidth * 0.1 }]}>
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
//         </ScrollView>
//         <ScrollView>
//           <View style={[styles.contentContainer, { height: windowHeight - 60, width: windowWidth * 0.9 }]}>
//             <Text style={styles.contentText}>
//               {tabs[activeTab].content}
//             </Text>
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//   },
//   headerContainer: {
//     backgroundColor: '#f0f0f0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//   },
//   leftStack: {
//     backgroundColor: '#f0f0f0',
//     padding: 16,
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
//     backgroundColor: 'white',
//     padding: 16,
//     justifyContent: 'flex-start',
//   },
//   contentText: {
//     fontSize: 18,
//     color:'green'
//   },
// });

// export default App;

// working code for side bar  below




// const tabsData = [
//   { title: (
//     <View style={''}>
//       <View style={{flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//         <HomeSvg color={activeTab === 0 ? '#FC8019' : '#9F9F9E'} />
//         <Text style={{color: activeTab === 0 ? '#FC8019' : '#9F9F9E'}}>Home</Text>
//       </View>
//     </View>
//   ), content: tabContent },
//   { title:  (
//     <View style={''}>
//       <View style={{flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//         <CustomerSvg color={activeTab === 1 ? '#FC8019' : '#9F9F9E'} />
//         <Text style={{color: activeTab === 1 ? '#FC8019' : '#9F9F9E'}}>Customers</Text>
//       </View>
//     </View>
//   ), content: <Customers /> },
//   { title:  (
//     <View style={''}>
//       <View style={{flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//         <InventorySvg color={activeTab === 2 ? '#FC8019' : '#9F9F9E'} />
//         <Text style={{color: activeTab === 2 ? '#FC8019' : '#9F9F9E'}}>Inventory</Text>
//       </View>
//     </View>
//   ), content: <Invertory /> },
//   { title:  (
//     <View style={''}>
//       <View style={{flex:1,flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//         <ReportsSvg color={activeTab === 3 ? '#FC8019' : '#9F9F9E'} />
//         <Text style={{color: activeTab === 3 ? '#FC8019' : '#9F9F9E'}}>Reports</Text>
//       </View>
//     </View>
//   ), content: <Reports /> },
//   { title:  (
//     <View style={''}>
//       <View style={{flex:1,flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//         <OrdersSvg color={activeTab === 4 ? '#FC8019' : '#9F9F9E'} />
//         <Text style={{color: activeTab === 4 ? '#FC8019' : '#9F9F9E'}}>Orders</Text>
//       </View>
//     </View>
//   ), content: <Orders /> },

//   { title:  (
//     <View style={''}>
//       <View style={{flex:1,flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//         <SettingSvg color={activeTab === 5 ? '#FC8019' : '#9F9F9E'} />
//         <Text style={{color: activeTab === 5 ? '#FC8019' : '#9F9F9E'}}>Settings</Text>
//       </View>
//     </View>
//   ), content: <Orders /> },

//   { title:  (
//     <View style={''}>
//       <View style={{flex:1,flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//         <LogoutSvg color={activeTab === 6 ? '#FC8019' : '#9F9F9E'} />
//         <Text style={{color: activeTab === 6 ? '#FC8019' : '#9F9F9E'}}>Logout</Text>
//       </View>
//     </View>
//   ), content: <Orders /> },
// ];

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, BackHandler, Button } from 'react-native';
import Product from './components/Allproducts/index';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you're using FontAwesome icons

import Svg, { Path } from 'react-native-svg';
import Customers from './components/Customers/Customers';
import Invertory from './components/Inventory/Invertory';
import Orders from './components/Orders/Orders';
import Reports from './components/Reports/Reports';
import { useSelector } from 'react-redux';
import LoginPage from './components/Login/LoginPage';
import { fetchingOrders } from './api/fetchOrders';
import Checkout from './components/Checkout/Checkout';
const { width, height,  fontScale } = Dimensions.get('window');
const headerHeight = height * 0.08;
const leftStackwidth = width * 0.1;
const containerwidth = width * 0.9;
const containerHeight = height * 0.92;
// const scaleandfontscale = 'This is scale '+ scale +' this is fontscale'+ fontScale ;
// console.log(scaleandfontscale) 

const HomeSvg = ({color,...props}) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill='none'
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21.5214 7.27954L12.8355 0.61213C11.7714 -0.204043 10.2275 -0.204043 9.16331 0.61213L0.478586 7.27845C0.173718 7.51211 0 7.85771 0 8.22721V20.7719C0 21.4457 0.580976 22 1.29425 22H7.11782C7.83109 22 8.41207 21.4457 8.41207 20.7719V12.8319H13.5879V20.7719C13.5879 21.4457 14.1689 22 14.8822 22H20.7057C21.419 22 22 21.4457 22 20.7719V8.22721C21.9988 7.85771 21.8251 7.51211 21.5214 7.27954ZM20.7046 20.7785H14.881V12.8265C14.881 12.1527 14.3001 11.6104 13.5868 11.6104H8.41092C7.69764 11.6104 7.11666 12.1527 7.11666 12.8265V20.7785H1.29425V8.22721L9.98013 1.56089C10.5703 1.10662 11.4297 1.1077 12.0199 1.56089L20.7057 8.22721L20.7046 20.7785Z"
      fill={color}
    />
  </Svg>
);

const CustomerSvg = ({ color, ...props }) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
      stroke={color}
      strokeWidth={1.3}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.0064 14.8232C8.59928 14.8232 5.67893 16.7701 4.21875 19.6905C6.16565 21.7347 8.98866 22.9029 12.0064 22.9029C15.0241 22.9029 17.8471 21.6374 19.794 19.6905C18.3338 16.8675 15.4134 14.8232 12.0064 14.8232Z"
      stroke={color}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.0044 12.293C13.9399 12.293 15.5089 10.724 15.5089 8.7886C15.5089 6.85316 13.9399 5.28418 12.0044 5.28418C10.069 5.28418 8.5 6.85316 8.5 8.7886C8.5 10.724 10.069 12.293 12.0044 12.293Z"
      stroke={color}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const InventorySvg = ({ color, ...props }) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0.75 16.5H16.708C17.0673 16.5002 17.4147 16.3713 17.6871 16.137C17.9594 15.9026 18.1386 15.5783 18.192 15.223L20.059 2.777C20.1124 2.42187 20.2914 2.09767 20.5636 1.86334C20.8357 1.629 21.1829 1.50008 21.542 1.5H23.25"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.5 7.5H3C2.58579 7.5 2.25 7.83579 2.25 8.25V12.75C2.25 13.1642 2.58579 13.5 3 13.5H7.5C7.91421 13.5 8.25 13.1642 8.25 12.75V8.25C8.25 7.83579 7.91421 7.5 7.5 7.5Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 4.5H9C8.58579 4.5 8.25 4.83579 8.25 5.25V12.75C8.25 13.1642 8.58579 13.5 9 13.5H15C15.4142 13.5 15.75 13.1642 15.75 12.75V5.25C15.75 4.83579 15.4142 4.5 15 4.5Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.125 22.5C5.16053 22.5 6 21.6605 6 20.625C6 19.5895 5.16053 18.75 4.125 18.75C3.08947 18.75 2.25 19.5895 2.25 20.625C2.25 21.6605 3.08947 22.5 4.125 22.5Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.625 22.5C15.6605 22.5 16.5 21.6605 16.5 20.625C16.5 19.5895 15.6605 18.75 14.625 18.75C13.5895 18.75 12.75 19.5895 12.75 20.625C12.75 21.6605 13.5895 22.5 14.625 22.5Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ReportsSvg = ({ color, ...props }) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.53843 22.0002C4.27895 22.0002 0 17.7218 0 12.463C0 7.20419 4.27895 2.92578 9.53843 2.92578H9.55499C9.97515 2.92578 10.3157 3.26631 10.3157 3.68642V11.6858H18.3161C18.7363 11.6858 19.0769 12.0263 19.0769 12.4465V12.463C19.0769 17.7218 14.798 22.0002 9.53843 22.0002ZM8.79426 4.48129C4.72129 4.85792 1.52147 8.2939 1.52147 12.463C1.52147 16.883 5.11787 20.479 9.53843 20.479C13.7081 20.479 17.1445 17.2795 17.5212 13.2071H9.55499C9.13483 13.2071 8.79426 12.8666 8.79426 12.4465V4.48129Z"
      fill={color}
    />
    <Path
      d="M21.2406 10.2813H12.4795C12.0593 10.2813 11.7188 9.94078 11.7188 9.52067V0.760638C11.7188 0.558659 11.7991 0.364989 11.9421 0.222282C12.0847 0.0799255 12.2779 0 12.4795 0C12.48 0 12.4804 0 12.4809 0C17.7383 0.00982978 21.9915 4.26174 22.0014 9.51927C22.0018 9.72125 21.9218 9.91509 21.779 10.058C21.6364 10.201 21.4426 10.2813 21.2406 10.2813ZM13.2402 8.76003H20.4424C20.0743 4.96275 17.038 1.92681 13.2402 1.55872V8.76003Z"
      fill={color}
    />
  </Svg>
);

const OrdersSvg = ({ color, ...props }) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.1698 0H3.8302L0 6.1281V22H22V6.1281L18.1698 0ZM20.9719 5.86667H11.3667V0.733333H17.7635L20.9719 5.86667ZM4.23647 0.733333H10.6333V5.86667H1.02813L4.23647 0.733333ZM0.733333 21.2667V6.6H21.2667V21.2667H0.733333Z"
      fill={color}
    />
    <Path
      d="M13.2031 8.43262H8.80313C8.19666 8.43262 7.70312 8.92615 7.70312 9.53262C7.70312 10.1391 8.19666 10.6326 8.80313 10.6326H13.2031C13.8096 10.6326 14.3031 10.1391 14.3031 9.53262C14.3031 8.92615 13.8096 8.43262 13.2031 8.43262ZM13.2031 9.89928H8.80313C8.60109 9.89928 8.43646 9.73502 8.43646 9.53262C8.43646 9.33022 8.60109 9.16595 8.80313 9.16595H13.2031C13.4052 9.16595 13.5698 9.33022 13.5698 9.53262C13.5698 9.73502 13.4052 9.89928 13.2031 9.89928Z"
      fill={color}
    />
    <Path
      d="M13.9365 19.0674H8.06979C7.86739 19.0674 7.70312 19.2313 7.70312 19.434C7.70312 19.6368 7.86739 19.8007 8.06979 19.8007H13.9365C14.1389 19.8007 14.3031 19.6368 14.3031 19.434C14.3031 19.2313 14.1389 19.0674 13.9365 19.0674Z"
      fill={color}
    />
    <Path
      d="M9.16988 18.3337C9.37228 18.3337 9.53655 18.1698 9.53655 17.967V15.5521L10.0107 16.0262C10.0821 16.0977 10.176 16.1337 10.2699 16.1337C10.3638 16.1337 10.4576 16.0977 10.5291 16.0262C10.6725 15.8829 10.6725 15.6511 10.5291 15.5078L9.42948 14.4081C9.39575 14.374 9.35505 14.3473 9.30995 14.3286C9.22048 14.2915 9.11928 14.2915 9.02982 14.3286C8.98472 14.3473 8.94438 14.374 8.91028 14.4081L7.81065 15.5078C7.66728 15.6511 7.66728 15.8829 7.81065 16.0262C7.88215 16.0977 7.97602 16.1337 8.06988 16.1337C8.16375 16.1337 8.25762 16.0977 8.32912 16.0262L8.80322 15.5521V17.967C8.80322 18.1698 8.96748 18.3337 9.16988 18.3337Z"
      fill={color}
    />
    <Path
      d="M13.0935 14.4081C13.0598 14.374 13.0191 14.3473 12.974 14.3286C12.8845 14.2915 12.7833 14.2915 12.6939 14.3286C12.6488 14.3473 12.6084 14.374 12.5743 14.4081L11.4747 15.5078C11.3313 15.6511 11.3313 15.8829 11.4747 16.0262C11.5462 16.0977 11.6401 16.1337 11.7339 16.1337C11.8278 16.1337 11.9217 16.0977 11.9932 16.0262L12.4673 15.5521V17.967C12.4673 18.1698 12.6315 18.3337 12.8339 18.3337C13.0363 18.3337 13.2006 18.1698 13.2006 17.967V15.5521L13.6747 16.0262C13.7462 16.0977 13.8401 16.1337 13.9339 16.1337C14.0278 16.1337 14.1217 16.0977 14.1932 16.0262C14.3365 15.8829 14.3365 15.6511 14.1932 15.5078L13.0935 14.4081Z"
      fill={color}
    />
  </Svg>
);


const SettingSvg = ({ color, ...props }) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19.4 15L19.9489 15.2423L19.9515 15.2364L19.4 15ZM19.73 16.82L19.3011 17.2396L19.3057 17.2443L19.73 16.82ZM19.79 16.88L19.3657 17.3043L19.366 17.3045L19.79 16.88ZM19.79 19.71L19.366 19.2855L19.3655 19.286L19.79 19.71ZM16.96 19.71L17.3845 19.286L17.3843 19.2857L16.96 19.71ZM16.9 19.65L17.3243 19.2257L17.3196 19.2211L16.9 19.65ZM15.08 19.32L15.3164 19.8715L15.3223 19.8689L15.08 19.32ZM14.08 20.83L13.48 20.8276V20.83H14.08ZM10.08 20.91H10.6802L10.6798 20.896L10.08 20.91ZM9 19.4L8.75774 19.9489C8.76931 19.954 8.78103 19.9588 8.79289 19.9631L9 19.4ZM7.18 19.73L6.76042 19.3011L6.75573 19.3057L7.18 19.73ZM7.12 19.79L6.69573 19.3657L6.6955 19.366L7.12 19.79ZM4.29 19.79L4.7145 19.366L4.71403 19.3655L4.29 19.79ZM3.70343 18.375H4.30343H3.70343ZM4.29 16.96L4.71403 17.3845L4.71426 17.3843L4.29 16.96ZM4.35 16.9L4.77429 17.3243L4.77892 17.3196L4.35 16.9ZM4.68 15.08L4.12848 15.3164L4.13108 15.3223L4.68 15.08ZM3.17 14.08L3.17239 13.48H3.17V14.08ZM1 12.08H0.4H1ZM3 10.08V10.68V10.08ZM3.09 10.08V10.6802L3.10403 10.6798L3.09 10.08ZM4.6 9L4.05108 8.75774C4.04598 8.76931 4.04124 8.78103 4.03688 8.79289L4.6 9ZM4.27 7.18L4.69894 6.76042L4.69426 6.75574L4.27 7.18ZM4.21 7.12L4.63426 6.69574L4.63403 6.6955L4.21 7.12ZM4.21 4.29L4.63403 4.7145L4.6345 4.71403L4.21 4.29ZM7.04 4.29L6.6155 4.71403L6.61574 4.71426L7.04 4.29ZM7.1 4.35L6.67571 4.77429L6.68044 4.77892L7.1 4.35ZM8.92 4.68V4.08C8.83657 4.08 8.75406 4.0974 8.67774 4.13108L8.92 4.68ZM9 4.68V5.28C9.08126 5.28 9.16167 5.26349 9.23636 5.23148L9 4.68ZM10 3.17L10.6 3.17239V3.17H10ZM12 1V0.4V1ZM14 3.09H13.4L13.4 3.09239L14 3.09ZM15 4.6L15.2423 4.05105L15.2364 4.04852L15 4.6ZM16.82 4.27L17.2396 4.69894L17.2443 4.69426L16.82 4.27ZM16.88 4.21L17.3043 4.63426L17.3045 4.63403L16.88 4.21ZM18.295 3.62343V4.22343V3.62343ZM19.71 4.21L19.2855 4.63403L19.286 4.6345L19.71 4.21ZM19.71 7.04L19.286 6.6155L19.2857 6.61574L19.71 7.04ZM19.65 7.1L19.2257 6.67571L19.2211 6.68044L19.65 7.1ZM19.32 8.92H19.92C19.92 8.83657 19.9026 8.75406 19.8689 8.67774L19.32 8.92ZM19.32 9H18.72C18.72 9.08126 18.7365 9.16167 18.7685 9.23636L19.32 9ZM20.83 10L20.8276 10.6H20.83V10ZM20.91 14V13.4L20.9076 13.4L20.91 14ZM14.4 12C14.4 13.3255 13.3255 14.4 12 14.4V15.6C13.9882 15.6 15.6 13.9882 15.6 12H14.4ZM12 14.4C10.6745 14.4 9.6 13.3255 9.6 12H8.4C8.4 13.9882 10.0118 15.6 12 15.6V14.4ZM9.6 12C9.6 10.6745 10.6745 9.6 12 9.6V8.4C10.0118 8.4 8.4 10.0118 8.4 12H9.6ZM12 9.6C13.3255 9.6 14.4 10.6745 14.4 12H15.6C15.6 10.0118 13.9882 8.4 12 8.4V9.6ZM18.8511 14.7577C18.6696 15.169 18.6154 15.6253 18.6956 16.0676L19.8764 15.8535C19.8389 15.6471 19.8642 15.4342 19.9489 15.2423L18.8511 14.7577ZM18.6956 16.0676C18.7758 16.51 18.9867 16.9182 19.3011 17.2396L20.1589 16.4004C20.0122 16.2505 19.9138 16.06 19.8764 15.8535L18.6956 16.0676ZM19.3057 17.2443L19.3657 17.3043L20.2143 16.4557L20.1543 16.3957L19.3057 17.2443ZM19.366 17.3045C19.4961 17.4345 19.5994 17.5889 19.6699 17.7589L20.7784 17.2994C20.6475 16.9837 20.4558 16.697 20.214 16.4555L19.366 17.3045ZM19.6699 17.7589C19.7403 17.9288 19.7766 18.111 19.7766 18.295H20.9766C20.9766 17.9533 20.9092 17.615 20.7784 17.2994L19.6699 17.7589ZM19.7766 18.295C19.7766 18.479 19.7403 18.6612 19.6699 18.8311L20.7784 19.2906C20.9092 18.975 20.9766 18.6367 20.9766 18.295H19.7766ZM19.6699 18.8311C19.5994 19.0011 19.4961 19.1555 19.366 19.2855L20.214 20.1345C20.4558 19.893 20.6475 19.6063 20.7784 19.2906L19.6699 18.8311ZM19.3655 19.286C19.2355 19.4161 19.0811 19.5194 18.9111 19.5899L19.3706 20.6984C19.6863 20.5675 19.973 20.3758 20.2145 20.134L19.3655 19.286ZM18.9111 19.5899C18.7412 19.6603 18.559 19.6966 18.375 19.6966V20.8966C18.7167 20.8966 19.055 20.8292 19.3706 20.6984L18.9111 19.5899ZM18.375 19.6966C18.191 19.6966 18.0088 19.6603 17.8389 19.5899L17.3794 20.6984C17.695 20.8292 18.0333 20.8966 18.375 20.8966V19.6966ZM17.8389 19.5899C17.6689 19.5194 17.5145 19.4161 17.3845 19.286L16.5355 20.134C16.777 20.3758 17.0637 20.5675 17.3794 20.6984L17.8389 19.5899ZM17.3843 19.2857L17.3243 19.2257L16.4757 20.0743L16.5357 20.1343L17.3843 19.2857ZM17.3196 19.2211C16.9982 18.9067 16.59 18.6958 16.1476 18.6156L15.9335 19.7964C16.14 19.8338 16.3305 19.9322 16.4804 20.0789L17.3196 19.2211ZM16.1476 18.6156C15.7053 18.5354 15.249 18.5896 14.8377 18.7711L15.3223 19.8689C15.5142 19.7842 15.7271 19.7589 15.9335 19.7964L16.1476 18.6156ZM14.8436 18.7685C14.4403 18.9414 14.0963 19.2284 13.8541 19.5942L14.8546 20.2568C14.9676 20.0861 15.1281 19.9522 15.3164 19.8715L14.8436 18.7685ZM13.8541 19.5942C13.6118 19.9601 13.4818 20.3888 13.48 20.8276L14.68 20.8324C14.6808 20.6276 14.7415 20.4276 14.8546 20.2568L13.8541 19.5942ZM13.48 20.83V21H14.68V20.83H13.48ZM13.48 21C13.48 21.3713 13.3325 21.7274 13.0699 21.9899L13.9185 22.8385C14.4061 22.3509 14.68 21.6896 14.68 21H13.48ZM13.0699 21.9899C12.8074 22.2525 12.4513 22.4 12.08 22.4V23.6C12.7696 23.6 13.4309 23.3261 13.9185 22.8385L13.0699 21.9899ZM12.08 22.4C11.7087 22.4 11.3526 22.2525 11.0901 21.9899L10.2415 22.8385C10.7291 23.3261 11.3904 23.6 12.08 23.6V22.4ZM11.0901 21.9899C10.8275 21.7274 10.68 21.3713 10.68 21H9.48C9.48 21.6896 9.75393 22.3509 10.2415 22.8385L11.0901 21.9899ZM10.68 21V20.91H9.48V21H10.68ZM10.6798 20.896C10.6693 20.4446 10.5232 20.0069 10.2605 19.6397L9.28449 20.3377C9.40706 20.5091 9.47524 20.7134 9.48016 20.924L10.6798 20.896ZM10.2605 19.6397C9.99789 19.2724 9.63084 18.9927 9.20711 18.8369L8.79289 19.9631C8.99063 20.0358 9.16192 20.1664 9.28449 20.3377L10.2605 19.6397ZM9.24226 18.8511C8.83096 18.6696 8.37472 18.6154 7.93237 18.6956L8.14646 19.8764C8.35289 19.8389 8.5658 19.8642 8.75774 19.9489L9.24226 18.8511ZM7.93237 18.6956C7.49001 18.7758 7.08182 18.9867 6.76044 19.3011L7.59956 20.1589C7.74954 20.0122 7.94002 19.9138 8.14646 19.8764L7.93237 18.6956ZM6.75573 19.3057L6.69573 19.3657L7.54427 20.2143L7.60427 20.1543L6.75573 19.3057ZM6.6955 19.366C6.56548 19.4961 6.41108 19.5994 6.24112 19.6699L6.70064 20.7784C7.01628 20.6475 7.30303 20.4558 7.5445 20.214L6.6955 19.366ZM6.24112 19.6699C6.07116 19.7403 5.88898 19.7766 5.705 19.7766V20.9766C6.04668 20.9766 6.38501 20.9092 6.70064 20.7784L6.24112 19.6699ZM5.705 19.7766C5.52102 19.7766 5.33884 19.7403 5.16888 19.6699L4.70936 20.7784C5.02499 20.9092 5.36332 20.9766 5.705 20.9766V19.7766ZM5.16888 19.6699C4.99892 19.5994 4.84452 19.4961 4.7145 19.366L3.8655 20.214C4.10697 20.4558 4.39372 20.6475 4.70936 20.7784L5.16888 19.6699ZM4.71403 19.3655C4.58386 19.2355 4.4806 19.0811 4.41014 18.9111L3.30162 19.3706C3.43246 19.6863 3.62423 19.973 3.86597 20.2145L4.71403 19.3655ZM4.41014 18.9111C4.33969 18.7412 4.30343 18.559 4.30343 18.375H3.10343C3.10343 18.7167 3.17077 19.055 3.30162 19.3706L4.41014 18.9111ZM4.30343 18.375C4.30343 18.191 4.33969 18.0088 4.41014 17.8389L3.30162 17.3794C3.17077 17.695 3.10343 18.0333 3.10343 18.375H4.30343ZM4.41014 17.8389C4.4806 17.6689 4.58386 17.5145 4.71403 17.3845L3.86597 16.5355C3.62423 16.777 3.43246 17.0637 3.30162 17.3794L4.41014 17.8389ZM4.71426 17.3843L4.77426 17.3243L3.92574 16.4757L3.86574 16.5357L4.71426 17.3843ZM4.77892 17.3196C5.09329 16.9982 5.30417 16.59 5.38438 16.1476L4.20363 15.9335C4.1662 16.14 4.06779 16.3305 3.92108 16.4804L4.77892 17.3196ZM5.38438 16.1476C5.46459 15.7053 5.41044 15.249 5.22892 14.8377L4.13108 15.3223C4.21579 15.5142 4.24106 15.7271 4.20363 15.9335L5.38438 16.1476ZM5.23148 14.8436C5.05863 14.4403 4.7716 14.0963 4.40575 13.8541L3.74318 14.8546C3.91391 14.9676 4.04785 15.1281 4.12852 15.3164L5.23148 14.8436ZM4.40575 13.8541C4.0399 13.6118 3.61119 13.4818 3.17239 13.48L3.16761 14.68C3.37238 14.6808 3.57245 14.7415 3.74318 14.8546L4.40575 13.8541ZM3.17 13.48H3V14.68H3.17V13.48ZM3 13.48C2.6287 13.48 2.2726 13.3325 2.01005 13.0699L1.16152 13.9185C1.64912 14.4061 2.31044 14.68 3 14.68V13.48ZM2.01005 13.0699C1.7475 12.8074 1.6 12.4513 1.6 12.08H0.4C0.4 12.7696 0.673928 13.4309 1.16152 13.9185L2.01005 13.0699ZM1.6 12.08C1.6 11.7087 1.7475 11.3526 2.01005 11.0901L1.16152 10.2415C0.673928 10.7291 0.4 11.3904 0.4 12.08H1.6ZM2.01005 11.0901C2.2726 10.8275 2.6287 10.68 3 10.68V9.48C2.31044 9.48 1.64912 9.75393 1.16152 10.2415L2.01005 11.0901ZM3 10.68H3.09V9.48H3V10.68ZM3.10403 10.6798C3.55539 10.6693 3.99313 10.5232 4.36035 10.2605L3.66225 9.28449C3.49088 9.40706 3.2866 9.47524 3.07597 9.48016L3.10403 10.6798ZM4.36035 10.2605C4.72757 9.99788 5.00728 9.63084 5.16312 9.20711L4.03688 8.79289C3.96415 8.99063 3.83362 9.16192 3.66225 9.28449L4.36035 10.2605ZM5.14892 9.24226C5.33044 8.83096 5.38459 8.37472 5.30438 7.93237L4.12363 8.14646C4.16106 8.35289 4.13579 8.5658 4.05108 8.75774L5.14892 9.24226ZM5.30438 7.93237C5.22417 7.49001 5.01329 7.08182 4.69892 6.76044L3.84108 7.59956C3.98779 7.74954 4.0862 7.94002 4.12363 8.14646L5.30438 7.93237ZM4.69426 6.75574L4.63426 6.69574L3.78574 7.54426L3.84574 7.60426L4.69426 6.75574ZM4.63403 6.6955C4.50386 6.56548 4.4006 6.41107 4.33014 6.24112L3.22162 6.70064C3.35246 7.01628 3.54423 7.30303 3.78597 7.5445L4.63403 6.6955ZM4.33014 6.24112C4.25969 6.07116 4.22343 5.88898 4.22343 5.705H3.02343C3.02343 6.04668 3.09077 6.38501 3.22162 6.70064L4.33014 6.24112ZM4.22343 5.705C4.22343 5.52102 4.25969 5.33884 4.33014 5.16888L3.22162 4.70936C3.09077 5.02499 3.02343 5.36332 3.02343 5.705H4.22343ZM4.33014 5.16888C4.4006 4.99893 4.50386 4.84452 4.63403 4.7145L3.78597 3.8655C3.54423 4.10697 3.35246 4.39372 3.22162 4.70936L4.33014 5.16888ZM4.6345 4.71403C4.76452 4.58386 4.91893 4.4806 5.08888 4.41014L4.62936 3.30162C4.31372 3.43246 4.02697 3.62423 3.7855 3.86597L4.6345 4.71403ZM5.08888 4.41014C5.25884 4.33969 5.44102 4.30343 5.625 4.30343V3.10343C5.28332 3.10343 4.94499 3.17077 4.62936 3.30162L5.08888 4.41014ZM5.625 4.30343C5.80898 4.30343 5.99116 4.33969 6.16112 4.41014L6.62065 3.30162C6.30501 3.17077 5.96668 3.10343 5.625 3.10343V4.30343ZM6.16112 4.41014C6.33107 4.4806 6.48548 4.58386 6.6155 4.71403L7.4645 3.86597C7.22303 3.62423 6.93628 3.43246 6.62065 3.30162L6.16112 4.41014ZM6.61574 4.71426L6.67574 4.77426L7.52426 3.92574L7.46426 3.86574L6.61574 4.71426ZM6.68044 4.77892C7.00182 5.09329 7.41001 5.30417 7.85237 5.38438L8.06646 4.20363C7.86002 4.1662 7.66954 4.06779 7.51956 3.92108L6.68044 4.77892ZM7.85237 5.38438C8.29472 5.46459 8.75096 5.41044 9.16226 5.22892L8.67774 4.13108C8.4858 4.21579 8.27289 4.24106 8.06646 4.20363L7.85237 5.38438ZM8.92 5.28H9V4.08H8.92V5.28ZM9.23636 5.23148C9.63968 5.05863 9.98365 4.7716 10.2259 4.40575L9.22545 3.74318C9.11238 3.91391 8.95186 4.04785 8.76364 4.12852L9.23636 5.23148ZM10.2259 4.40575C10.4682 4.0399 10.5982 3.61119 10.6 3.17239L9.4 3.16761C9.39919 3.37238 9.33851 3.57245 9.22545 3.74318L10.2259 4.40575ZM10.6 3.17V3H9.4V3.17H10.6ZM10.6 3C10.6 2.6287 10.7475 2.2726 11.0101 2.01005L10.1615 1.16152C9.67393 1.64912 9.4 2.31044 9.4 3H10.6ZM11.0101 2.01005C11.2726 1.7475 11.6287 1.6 12 1.6V0.4C11.3104 0.4 10.6491 0.673928 10.1615 1.16152L11.0101 2.01005ZM12 1.6C12.3713 1.6 12.7274 1.7475 12.9899 2.01005L13.8385 1.16152C13.3509 0.673928 12.6896 0.4 12 0.4V1.6ZM12.9899 2.01005C13.2525 2.2726 13.4 2.6287 13.4 3H14.6C14.6 2.31044 14.3261 1.64912 13.8385 1.16152L12.9899 2.01005ZM13.4 3V3.09H14.6V3H13.4ZM13.4 3.09239C13.4018 3.53119 13.5318 3.9599 13.7741 4.32576L14.7746 3.66318C14.6615 3.49245 14.6008 3.29238 14.6 3.08761L13.4 3.09239ZM13.7741 4.32576C14.0163 4.69161 14.3603 4.97863 14.7636 5.15148L15.2364 4.04852C15.0481 3.96785 14.8876 3.83391 14.7746 3.66318L13.7741 4.32576ZM14.7577 5.14892C15.169 5.33044 15.6253 5.38459 16.0676 5.30438L15.8535 4.12363C15.6471 4.16106 15.4342 4.13579 15.2423 4.05108L14.7577 5.14892ZM16.0676 5.30438C16.51 5.22417 16.9182 5.01329 17.2396 4.69892L16.4004 3.84108C16.2505 3.98779 16.06 4.0862 15.8535 4.12363L16.0676 5.30438ZM17.2443 4.69426L17.3043 4.63426L16.4557 3.78574L16.3957 3.84574L17.2443 4.69426ZM17.3045 4.63403C17.4345 4.50386 17.5889 4.4006 17.7589 4.33014L17.2994 3.22162C16.9837 3.35246 16.697 3.54423 16.4555 3.78597L17.3045 4.63403ZM17.7589 4.33014C17.9288 4.25969 18.111 4.22343 18.295 4.22343V3.02343C17.9533 3.02343 17.615 3.09077 17.2994 3.22162L17.7589 4.33014ZM18.295 4.22343C18.479 4.22343 18.6612 4.25969 18.8311 4.33014L19.2906 3.22162C18.975 3.09077 18.6367 3.02343 18.295 3.02343V4.22343ZM18.8311 4.33014C19.0011 4.4006 19.1555 4.50386 19.2855 4.63403L20.1345 3.78597C19.893 3.54423 19.6063 3.35246 19.2906 3.22162L18.8311 4.33014ZM19.286 4.6345C19.4161 4.76452 19.5194 4.91893 19.5899 5.08888L20.6984 4.62936C20.5675 4.31372 20.3758 4.02697 20.134 3.7855L19.286 4.6345ZM19.5899 5.08888C19.6603 5.25884 19.6966 5.44102 19.6966 5.625H20.8966C20.8966 5.28332 20.8292 4.94499 20.6984 4.62936L19.5899 5.08888ZM19.6966 5.625C19.6966 5.80898 19.6603 5.99116 19.5899 6.16112L20.6984 6.62065C20.8292 6.30501 20.8966 5.96668 20.8966 5.625H19.6966ZM19.5899 6.16112C19.5194 6.33107 19.4161 6.48548 19.286 6.6155L20.134 7.4645C20.3758 7.22303 20.5675 6.93628 20.6984 6.62065L19.5899 6.16112ZM19.2857 6.61574L19.2257 6.67574L20.0743 7.52426L20.1343 7.46426L19.2857 6.61574ZM19.2211 6.68044C18.9067 7.00182 18.6958 7.41001 18.6156 7.85237L19.7964 8.06646C19.8338 7.86002 19.9322 7.66954 20.0789 7.51956L19.2211 6.68044ZM18.6156 7.85237C18.5354 8.29472 18.5896 8.75096 18.7711 9.16226L19.8689 8.67774C19.7842 8.4858 19.7589 8.27289 19.7964 8.06646L18.6156 7.85237ZM18.72 8.92V9H19.92V8.92H18.72ZM18.7685 9.23636C18.9414 9.63968 19.2284 9.98366 19.5942 10.2259L20.2568 9.22545C20.0861 9.11238 19.9522 8.95186 19.8715 8.76364L18.7685 9.23636ZM19.5942 10.2259C19.9601 10.4682 20.3888 10.5982 20.8276 10.6L20.8324 9.4C20.6276 9.39919 20.4276 9.33851 20.2568 9.22545L19.5942 10.2259ZM20.83 10.6H21V9.4H20.83V10.6ZM21 10.6C21.3713 10.6 21.7274 10.7475 21.9899 11.0101L22.8385 10.1615C22.3509 9.67393 21.6896 9.4 21 9.4V10.6ZM21.9899 11.0101C22.2525 11.2726 22.4 11.6287 22.4 12H23.6C23.6 11.3104 23.3261 10.6491 22.8385 10.1615L21.9899 11.0101ZM22.4 12C22.4 12.3713 22.2525 12.7274 21.9899 12.9899L22.8385 13.8385C23.3261 13.3509 23.6 12.6896 23.6 12H22.4ZM21.9899 12.9899C21.7274 13.2525 21.3713 13.4 21 13.4V14.6C21.6896 14.6 22.3509 14.3261 22.8385 13.8385L21.9899 12.9899ZM21 13.4H20.91V14.6H21V13.4ZM20.9076 13.4C20.4688 13.4018 20.0401 13.5318 19.6742 13.7741L20.3368 14.7746C20.5076 14.6615 20.7076 14.6008 20.9124 14.6L20.9076 13.4ZM19.6742 13.7741C19.3084 14.0163 19.0214 14.3603 18.8485 14.7636L19.9515 15.2364C20.0322 15.0481 20.1661 14.8876 20.3368 14.7746L19.6742 13.7741Z"
      fill={color}
    />
  </Svg>
);


const LogoutSvg = ({ color, ...props }) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.2992 12.0015H1M1 12.0015L4.84978 8.70117M1 12.0015L4.84978 15.3017"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.70312 6.50047C8.71645 4.10773 8.82253 2.81192 9.6677 1.96663C10.6342 1 12.1898 1 15.3008 1H16.4008C19.5118 1 21.0675 1 22.0339 1.96663C23.0004 2.93326 23.0004 4.48902 23.0004 7.60056V16.4013C23.0004 19.5128 23.0004 21.0686 22.0339 22.0352C21.1887 22.8805 19.893 22.9867 17.5005 23M8.70312 17.5014C8.71645 19.8941 8.82253 21.1899 9.6677 22.0352C10.3731 22.7407 11.3922 22.9314 13.1007 22.9828"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);


const DateTimeComponent = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');


  useEffect(() => {
    const interval = setInterval(() => {
      // Get current date
      const date = new Date();

      // Calculate date components
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');

      // Calculate time components
      let hours = date.getHours();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // Convert 0 to 12
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');

      // Format date and time
      const formattedDate = `${year}-${month}-${day}`;
      const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

      // Combine date and time
      const dateString = `${formattedDate}`
      const TimeString = `${formattedTime}`


      // Update state variable
      setCurrentDate(dateString);
      setCurrentTime(TimeString);
    }, 1000); // Update every second

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <Text style = {{ color:'#171826'}} > {currentDate}</Text>
      <Text style = {{ color:'#171826'}} > {currentTime}</Text>
    </View>
  );
};

const CartBag = (props) => (
  <Svg
    width={24}
    height={29}
    viewBox="0 0 24 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.1352 12.4674V6.25508C16.1352 4.88206 15.6616 3.56529 14.8186 2.59442C13.9755 1.62355 12.8322 1.07812 11.64 1.07812C10.4478 1.07813 9.30444 1.62355 8.46143 2.59442C7.61843 3.56529 7.14483 4.88206 7.14483 6.25508V12.4674M20.7574 9.71604L22.2713 26.2823C22.3553 27.2003 21.7319 27.9983 20.93 27.9983H2.34999C2.16085 27.9985 1.97377 27.9529 1.80092 27.8645C1.62807 27.776 1.47332 27.6467 1.3467 27.4848C1.22009 27.323 1.12445 27.1323 1.066 26.9251C1.00755 26.7179 0.987599 26.4989 1.00744 26.2823L2.52261 9.71604C2.55756 9.33441 2.71395 8.98119 2.96164 8.72449C3.20932 8.46779 3.53075 8.32579 3.86396 8.32586H19.416C20.1065 8.32586 20.6855 8.92639 20.7574 9.71604ZM7.59435 12.4674C7.59435 12.6047 7.54699 12.7364 7.46269 12.8335C7.37839 12.9306 7.26405 12.9851 7.14483 12.9851C7.02561 12.9851 6.91128 12.9306 6.82698 12.8335C6.74268 12.7364 6.69532 12.6047 6.69532 12.4674C6.69532 12.3301 6.74268 12.1984 6.82698 12.1014C6.91128 12.0043 7.02561 11.9497 7.14483 11.9497C7.26405 11.9497 7.37839 12.0043 7.46269 12.1014C7.54699 12.1984 7.59435 12.3301 7.59435 12.4674ZM16.5847 12.4674C16.5847 12.6047 16.5373 12.7364 16.453 12.8335C16.3687 12.9306 16.2544 12.9851 16.1352 12.9851C16.0159 12.9851 15.9016 12.9306 15.8173 12.8335C15.733 12.7364 15.6856 12.6047 15.6856 12.4674C15.6856 12.3301 15.733 12.1984 15.8173 12.1014C15.9016 12.0043 16.0159 11.9497 16.1352 11.9497C16.2544 11.9497 16.3687 12.0043 16.453 12.1014C16.5373 12.1984 16.5847 12.3301 16.5847 12.4674Z"
      stroke="#171826"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

///
// fetching orderslists here and sending putting it in redux 
const ordersData = fetchingOrders()

console.log(ordersData, ' this is order data ')
///


// const tabsData = [
//   {
//     title: (activeTab,index) => (
//       <View style={''}>
//         <View
//           style={{
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <HomeSvg color={activeTab === index ? '#FC8019' : '#9F9F9E'} />
//           <Text style={{ color: activeTab === index ? '#FC8019' : '#9F9F9E' }}>
//             Home
//           </Text>
//         </View>
//       </View>
//     ),
   
//     content: <Product/>,
//   },
//   {
//     title: (activeTab,index) => (
//       <View style={''}>
//         <View
//           style={{
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <CustomerSvg color={activeTab === index ? '#FC8019' : '#9F9F9E'} />
//           <Text style={{ color: activeTab === index ? '#FC8019' : '#9F9F9E' }}>
//             Customers
//           </Text>
//         </View>
//       </View>
//     ),
//     content: <Customers />,
//   },

//   {
//     title: (activeTab,index) => (
//       <View style={''}>
//         <View
//           style={{
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <InventorySvg color={activeTab === index ? '#FC8019' : '#9F9F9E'} />
//           <Text style={{ color: activeTab === index ? '#FC8019' : '#9F9F9E' }}>
//             Inventory
//           </Text>
//         </View>
//       </View>
//     ),
//     content: <Invertory />,
//   },

//   {
//     title: (activeTab,index) => (
//       <View style={''}>
//         <View
//           style={{
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <ReportsSvg color={activeTab === index ? '#FC8019' : '#9F9F9E'} />
//           <Text style={{ color: activeTab === index ? '#FC8019' : '#9F9F9E' }}>
//             Reports
//           </Text>
//         </View>
//       </View>
//     ),
//     content: <Reports/>,
//   },

//   {
//     title: (activeTab,index) => (
//       <View style={''}>
//         <View
//           style={{
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <OrdersSvg color={activeTab === index ? '#FC8019' : '#9F9F9E'} />
//           <Text style={{ color: activeTab === index ? '#FC8019' : '#9F9F9E' }}>
//             orders
//           </Text>
//         </View>
//       </View>
//     ),
//     content: <Orders/>,
//   },
//   // Rest of the tabs...
// ];

// const TabNavigation = () => {
//   const { activeTab, handleTabPress, changeTab } = useTabNavigation();

//   const itemslength = useSelector((state)=>state.CustomerSlice.cart)
//   console.log(itemslength, 'this is items.lengt')
//   return (


// <View style={styles.mainContainer}>
//       <View style={[styles.headerContainer, { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignContent: 'center', paddingHorizontal: 16, height: headerHeight, width: width }]}>
//         <Text style={styles.headerText}>PTR Technologies</Text>
//         <Text style={styles.headerText}>Header</Text>
//         <View  >
//           {/* <HomeSvg color='#FC8019' />
//           <CustomerSvg color='#FC8019' /> */}
//          {/* <Text><CustomerSvg/></Text>  */}
//          <Text>
//   <TouchableOpacity onPress={()=>{changeTab(4), console.log(changeTab, 'this is change tab')}}>
//     <View style={{ position: 'relative' }} >
//   <CartBag />
//   <View style={{
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FC8019',
//     borderRadius: 50,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }}>
//     <Text style={{ color: 'white' }}>{itemslength ? itemslength.length : '0'}</Text>
//   </View>
// </View></TouchableOpacity>  <View>
//   <TouchableOpacity>
//     <View>
//       {/* <Text> */}
        
//         <CustomerSvg color={'gray'}/>
//       {/* </Text> */}
//     </View>
//   </TouchableOpacity>
// </View> <DateTimeComponent/></Text> 
//         </View>
//       </View>
//       <View style={styles.container}>
//         <View style={styles.leftStack}>
//           {tabsData.map((tab, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[
//                 styles.tabButton,
//                 activeTab === index && styles.activeTab,
//               ]}
//               onPress={() => handleTabPress(index)}
//             >
//               <Text style={[styles.tabText, activeTab === index ? {color: '#FC8019'} : null]}>
//                 {tab.title(activeTab,index)}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//         <View style={styles.contentContainer}>
//           {/* {tabsData[activeTab].content} */}
//           {React.cloneElement(tabsData[activeTab].content, { changeTab })}

//         </View>
//       </View>
//     </View>
//   );
// };




const TabNavigation = () => {

   const updateTabContent = (index, newContent) => {
    setTabsData((prevTabsData) => {
      const updatedTab = { ...prevTabsData[index], content: newContent };
      return [
        ...prevTabsData.slice(0, index),
        updatedTab,
        ...prevTabsData.slice(index + 1),
      ];
    });
  };

  const [tabsData, setTabsData] = useState([
    {
      title: (activeTab, index) => (
        <View style={''}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <HomeSvg color={activeTab === index ? '#FC8019' : '#9F9F9E'} />
            <Text style={{ color: activeTab === index ? '#FC8019' : '#9F9F9E' }}>
              Home
            </Text>
          </View>
        </View>
      ),
      content: <Product changeTabContent = {updateTabContent}  changeTab={changeTab}  />,
    },
    {
      title: (activeTab, index) => (
        <View style={''}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <CustomerSvg color={activeTab === index ? '#FC8019' : '#9F9F9E'} />
            <Text style={{ color: activeTab === index ? '#FC8019' : '#9F9F9E' }}>
              Customers
            </Text>
          </View>
        </View>
      ),
      content: <Customers   changeTabContent = {updateTabContent}  changeTab={changeTab}  />,
    },
    {
      title: (activeTab,index) => (
        <View style={''}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <InventorySvg color={activeTab === index ? '#FC8019' : '#9F9F9E'} />
            <Text style={{ color: activeTab === index ? '#FC8019' : '#9F9F9E' }}>
              Inventory
            </Text>
          </View>
        </View>
      ),
      content: <Invertory />,
    },
  
    {
      title: (activeTab,index) => (
        <View style={''}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <ReportsSvg color={activeTab === index ? '#FC8019' : '#9F9F9E'} />
            <Text style={{ color: activeTab === index ? '#FC8019' : '#9F9F9E' }}>
              Reports
            </Text>
          </View>
        </View>
      ),
      content: <Reports/>,
    },
  
    {
      title: (activeTab,index) => (
        <View style={''}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <OrdersSvg color={activeTab === index ? '#FC8019' : '#9F9F9E'} />
            <Text style={{ color: activeTab === index ? '#FC8019' : '#9F9F9E' }}>
              orders
            </Text>
          </View>
        </View>
      ),
      content: <Orders/>,
    },
    // Add more tabs as needed
  ]);

  const { activeTab, handleTabPress, changeTab } = useTabNavigation();

  const itemslength = useSelector((state) => state.CustomerSlice.cart);
  console.log(itemslength, 'this is items.length');

  // const updateTabContent = (index, newContent) => {
  //   setTabsData((prevTabsData) => {
  //     const updatedTab = { ...prevTabsData[index], content: newContent };
  //     return [
  //       ...prevTabsData.slice(0, index),
  //       updatedTab,
  //       ...prevTabsData.slice(index + 1),
  //     ];
  //   });
  // };

  const goBackToPreviousTabContent = (index) => {
    if (previousTabContent) {
      setTabsData((prevTabsData) => {
        const updatedTab = { ...prevTabsData[index], content: previousTabContent };
        return [
          ...prevTabsData.slice(0, index),
          updatedTab,
          ...prevTabsData.slice(index + 1),
        ];
      });
    }
  };

  return (
    <View style={styles.mainContainer}>
       <View style={[styles.headerContainer, { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignContent: 'center', paddingHorizontal: 16, height: headerHeight, width: width }]}>
        <Text style={styles.headerText}>PTR Technologies</Text>
        <Text style={styles.headerText}>Header</Text>
        <View  >
          {/* <HomeSvg color='#FC8019' />
          <CustomerSvg color='#FC8019' /> */}
         {/* <Text><CustomerSvg/></Text>  */}
         <Text>
  <TouchableOpacity onPress={()=>{changeTab(4), console.log(changeTab, 'this is change tab'), updateTabContent(4,<Checkout changeContent={updateTabContent}/>)}}>
    <View style={{ position: 'relative' }} >
  <CartBag />
  <View style={{
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FC8019',
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <Text style={{ color: 'white' }}>{itemslength ? itemslength.length : '0'}</Text>
  </View>
</View></TouchableOpacity>  <View>
  <TouchableOpacity>
    <View>
      {/* <Text> */}
        
        <CustomerSvg color={'gray'}/>
      {/* </Text> */}
    </View>
  </TouchableOpacity>
</View> <DateTimeComponent/></Text> 
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.leftStack}>
          {tabsData.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.tabButton,
                activeTab === index && styles.activeTab,
              ]}
              onPress={() => handleTabPress(index)}
            >
              <Text style={[styles.tabText, activeTab === index ? {color: '#FC8019'} : null]}>
                {tab.title(activeTab,index)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.contentContainer}>
          {/* {tabsData[activeTab].content} */}
          {React.cloneElement(tabsData[activeTab].content, { changeTab })}

        </View>
      </View>
    </View> 
  );
};


export const useTabNavigation = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabHistory, setTabHistory] = useState([0]);

  console.log(activeTab, 'activetab')
  const handleTabPress = (index) => {
    setTabHistory([...tabHistory, index]);
    setActiveTab(index);
  };

  const changeTab = (index) => {
    setActiveTab(index);
   

  };

  useEffect(() => {
    const backAction = () => {
      if (tabHistory.length > 1) {
        const prevTab = tabHistory[tabHistory.length - 2];
        setTabHistory(tabHistory.slice(0, -1));
        setActiveTab(prevTab);
        return true;
      } else {
        BackHandler.exitApp();
        return false;
      }
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [activeTab, tabHistory]);

  return { activeTab, handleTabPress,changeTab };
};




//     <View>
//       {/* Header Section */}
//       <View style={[styles.headerContainer, { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignContent: 'center', paddingHorizontal: 16, height: headerHeight, width: width }]}>
//         <Text style={styles.headerText}>PTR Technologies</Text>
//         <Text style={styles.headerText}>Header</Text>
//         <View  >
//           {/* <HomeSvg color='#FC8019' />
//           <CustomerSvg color='#FC8019' /> */}
//          {/* <Text><CustomerSvg/></Text>  */}
//          <Text> <TouchableOpacity><View style={{ position: 'relative' }}>
//   <CartBag />
//   <View style={{
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FC8019',
//     borderRadius: 50,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }}>
//     <Text style={{ color: 'white' }}>{itemslength ? itemslength.length : '0'}</Text>
//   </View>
// </View></TouchableOpacity>  <View>
//   <TouchableOpacity>
//     <View>
//       {/* <Text> */}
        
//         <CustomerSvg color={'gray'}/>
//       {/* </Text> */}
//     </View>
//   </TouchableOpacity>
// </View> <DateTimeComponent/></Text> 
//         </View>
//       </View>
//       <View>
//         {/* Your header content here */}
//       </View>

//       {/* Tab Buttons */}
//       <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
//   {tabsData.map((tab, index) => (
//     <TouchableOpacity
//       key={index}
//       onPress={() => handleTabPress(index)}
//       style={{ backgroundColor: activeTab === index ? '#FC8019' : 'transparent' }}
//     >
//       <Text>{tab.title}</Text>
//     </TouchableOpacity>
//   ))}
// </View>
//       {/* Content Section */}
//       <View>
//         {tabsData[activeTab].content}
//       </View>
//     </View>
// const App = () => {
//   return <TabNavigation />;
//   return <LoginPage/>
// };










// import { PieChart } from 'react-native-svg-charts';

// const data = [
//   { key: 'Group A', value: 400 },
//   { key: 'Group B', value: 300 },
//   { key: 'Group C', value: 300 },
//   { key: 'Group D', value: 200 },
// ];
// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const HalfCirclePieChart = () => {
//   const pieData = data.map((item, index) => ({
//     value: item.value,
//     svg: { fill: colors[index % colors.length] },
//     key: `pie-${index}`,
//   }));

//   return (
//     <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 200 }}>
//       <View style={{ flexDirection: 'row', height: 150 }}>
//         <PieChart style={{ flex: 1, transform: [{ rotate: '-90deg' }] }} data={pieData} />
//       </View>
//       <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//         <Text>Group A: 400</Text>
//         <Text>Group B: 300</Text>
//         <Text>Group C: 300</Text>
//         <Text>Group D: 200</Text>
//       </View>
//     </View>
//   );
// };




//example of area chart 

// import { AreaChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
// import * as shape from 'd3-shape';

// const data = [
//   {
//     time: '9AM',
//     value: 4000,
//   },
//   {
//     time: '10AM',
//     value: 3000,
//   },
//   {
//     time: '11AM',
//     value: 2800,
//   },
//   {
//     time: '12PM',
//     value: 2780,
//   },
//   // Add more data points as needed
// ];

// const timeToValue = {
//   '9AM': 0,
//   '10AM': 1,
//   '11AM': 2,
//   '12PM': 3,
//   // Add more time slots as needed
// };

// const Example = () => {
//   const axesSvg = { fontSize: 10, fill: 'black' };
//   const verticalContentInset = { top: 10, bottom: 10 };
//   const xAxisHeight = 30;

//   return (
//     <View style={{ flex: 1, margin: 10 }}>
//       <View style={{ flex: 1, flexDirection: 'row' }}>
//         <YAxis
//           data={[0, 1, 2, 3]} // numerical values for time slots
//           contentInset={verticalContentInset}
//           svg={axesSvg}
//           numberOfTicks={10}
//           formatLabel={(value) => {
//             // Ensure value exists in timeToValue object
//             const timeSlots = Object.keys(timeToValue);
//             if (timeSlots[value]) {
//               return timeSlots[value];
//             } else {
//               return ''; // Return empty string if value is undefined
//             }
//           }}
//         />
//         <View style={{ flex: 1, marginLeft: 10 }}>
//           <AreaChart
//             style={{ flex: 1 }}
//             data={data}
//             yAccessor={({ item }) => timeToValue[item.time]} // Map time to numerical value
//             curve={shape.curveNatural}
//             svg={{ fill: 'rgba(134, 132, 216, 0.8)' }}
//             contentInset={verticalContentInset}
//           >
//             <Grid />
//           </AreaChart>
//         </View>
//       </View>
//       <XAxis
//         style={{ marginHorizontal: -10, height: xAxisHeight }}
//         data={data}
//         formatLabel={(value) => value.time} // Display time labels on X-axis
//         contentInset={{ left: 10, right: 10 }}
//         svg={axesSvg}
//       />
//       <View style={{ height: xAxisHeight, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10 }}>
//         {data.map((item, index) => (
//           <Text key={index} style={{ textAlign: 'center', width: 50 }}>
//             {item.time}
//           </Text>
//         ))}
//       </View>
//     </View>
//   );
// };







// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart
// } from "react-native-chart-kit";

// const MylineChart = ()=>{

 
//   return(
//     <View>
//   <Text>Bezier Line Chart</Text>
//   <LineChart
//     data={{
//       labels: ["January", "February", "March", "April", "May", "June"],
//       datasets: [
//         {
//           data: [
//             Math.random() * 100,
//             Math.random() * 100,
//             Math.random() * 100,
//             Math.random() * 100,
//             Math.random() * 100,
//             Math.random() * 100
//           ]
//         }
//       ]
//     }}
//     width={Dimensions.get("window").width} // from react-native
//     height={220}
//     yAxisLabel="$"
//     yAxisSuffix="k"
//     yAxisInterval={1} // optional, defaults to 1
//     chartConfig={{
//       // backgroundColor: "#e26a00",
//       // backgroundGradientFrom: "#fb8c00",
//       // backgroundGradientTo: "#ffa726",
//       backgroundGradientTo: "white",

//       decimalPlaces: 2, // optional, defaults to 2dp
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16
//       },
//       propsForDots: {
//         r: "6",
//         strokeWidth: "2",
//         stroke: "#ffa726"
//       }
//     }}
//     bezier
//     style={{
//       marginVertical: 8,
//       borderRadius: 16
//     }}
//   />
 
  
// </View>

//   )
// }












const App = () => {
  // State to track if the user is authenticated
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle user login
  const handleLogin = () => {
    // Perform authentication logic, e.g., validate credentials
    // For demonstration, let's assume the user is successfully authenticated
    setIsLoggedIn(true);
  };

  return isLoggedIn ?  <TabNavigation /> : <LoginPage onLogin={handleLogin} />;
  // return <MylineChart/>
  
 
};

const styles = StyleSheet.create({
  
  mainContainer: {
    flex: 1,
    height: height,
    width: width
  },
  headerContainer: {
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: '#171826',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftStack: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    width: leftStackwidth,
    // borderWidth:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start'
   


  },
  tabButton: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  activeTab: {
    backgroundColor: '#F5F5F5',
    borderWidth:1,
    borderColor:'#FC8019',
    textAlign:'center',
    justifyContent:'center',
    alignContent:'center'
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9F9F9E',
    justifyContent:'flex-start',
    textAlign:'center',
    alignContent:'flex-start'

  },
  contentContainer: {
    backgroundColor: '#F5F5F5',
    flexGrow: 1,
    justifyContent: 'flex-start',
    width: containerwidth,
    height: containerHeight
  },
});














// const tabs = [
//   { title: (
//     <View style={styles.tabTitleContainer}>
//       <View style={{flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//         <HomeSvg color={activeTab === 0 ? '#FC8019' : '#9F9F9E'} />
//         <Text style={{color: activeTab === 0 ? '#FC8019' : '#9F9F9E'}}>Home</Text>
//       </View>
//     </View>
//   ), content: tabContent },
//   { title:  (
//     <View style={styles.tabTitleContainer}>
//       <View style={{flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//         <CustomerSvg color={activeTab === 1 ? '#FC8019' : '#9F9F9E'} />
//         <Text style={{color: activeTab === 1 ? '#FC8019' : '#9F9F9E'}}>Customers</Text>
//       </View>
//     </View>
//   ), content: <Customers /> },
//   { title:  (
//     <View style={styles.tabTitleContainer}>
//       <View style={{flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//         <InventorySvg color={activeTab === 2 ? '#FC8019' : '#9F9F9E'} />
//         <Text style={{color: activeTab === 2 ? '#FC8019' : '#9F9F9E'}}>Inventory</Text>
//       </View>
//     </View>
//   ), content: <Invertory /> },
//   { title:  (
//     <View style={styles.tabTitleContainer}>
//       <View style={{flex:1,flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//         <ReportsSvg color={activeTab === 3 ? '#FC8019' : '#9F9F9E'} />
//         <Text style={{color: activeTab === 3 ? '#FC8019' : '#9F9F9E'}}>Reports</Text>
//       </View>
//     </View>
//   ), content: <Reports /> },
//   { title:  (
//     <View style={styles.tabTitleContainer}>
//       <View style={{flex:1,flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//         <OrdersSvg color={activeTab === 4 ? '#FC8019' : '#9F9F9E'} />
//         <Text style={{color: activeTab === 4 ? '#FC8019' : '#9F9F9E'}}>Orders</Text>
//       </View>
//     </View>
//   ), content: <Orders /> },

//   { title:  (
//     <View style={styles.tabTitleContainer}>
//       <View style={{flex:1,flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//         <SettingSvg color={activeTab === 5 ? '#FC8019' : '#9F9F9E'} />
//         <Text style={{color: activeTab === 5 ? '#FC8019' : '#9F9F9E'}}>Settings</Text>
//       </View>
//     </View>
//   ), content: <Orders /> },

//   { title:  (
//     <View style={styles.tabTitleContainer}>
//       <View style={{flex:1,flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//         <LogoutSvg color={activeTab === 6 ? '#FC8019' : '#9F9F9E'} />
//         <Text style={{color: activeTab === 6 ? '#FC8019' : '#9F9F9E'}}>Logout</Text>
//       </View>
//     </View>
//   ), content: <Orders /> },
// ];

// const App = () => {

//   const itemslength = useSelector((state)=>state.CustomerSlice.cart)
//   console.log(itemslength, 'this is items.lengt')

//   const [activeTab, setActiveTab] = useState(0);
//   const [tabHistory, setTabHistory] = useState([0]);

//   const [tabContent, setTabContent] = useState(<Product />);

// //  const handleButtonClick = (contents) => {
// //     // Update the content of the specific tab (e.g., index 0) to a new component
// //     setTabContent(contents);
// //   };

// //   const HandleChangeTab = (index) => {
// //     // Update the content of the specific tab (e.g., index 0) to a new component
// //     setActiveTab(index);
// //   };


//   const tabs = [
//     { title: (
//       <View style={styles.tabTitleContainer}>
//         <View style={{flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//           <HomeSvg color={activeTab === 0 ? '#FC8019' : '#9F9F9E'} />
//           <Text style={{color: activeTab === 0 ? '#FC8019' : '#9F9F9E'}}>Home</Text>
//         </View>
//       </View>
//     ), content: tabContent },
//     { title:  (
//       <View style={styles.tabTitleContainer}>
//         <View style={{flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//           <CustomerSvg color={activeTab === 1 ? '#FC8019' : '#9F9F9E'} />
//           <Text style={{color: activeTab === 1 ? '#FC8019' : '#9F9F9E'}}>Customers</Text>
//         </View>
//       </View>
//     ), content: <Customers /> },
//     { title:  (
//       <View style={styles.tabTitleContainer}>
//         <View style={{flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//           <InventorySvg color={activeTab === 2 ? '#FC8019' : '#9F9F9E'} />
//           <Text style={{color: activeTab === 2 ? '#FC8019' : '#9F9F9E'}}>Inventory</Text>
//         </View>
//       </View>
//     ), content: <Invertory /> },
//     { title:  (
//       <View style={styles.tabTitleContainer}>
//         <View style={{flex:1,flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//           <ReportsSvg color={activeTab === 3 ? '#FC8019' : '#9F9F9E'} />
//           <Text style={{color: activeTab === 3 ? '#FC8019' : '#9F9F9E'}}>Reports</Text>
//         </View>
//       </View>
//     ), content: <Reports /> },
//     { title:  (
//       <View style={styles.tabTitleContainer}>
//         <View style={{flex:1,flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//           <OrdersSvg color={activeTab === 4 ? '#FC8019' : '#9F9F9E'} />
//           <Text style={{color: activeTab === 4 ? '#FC8019' : '#9F9F9E'}}>Orders</Text>
//         </View>
//       </View>
//     ), content: <Orders /> },

//     { title:  (
//       <View style={styles.tabTitleContainer}>
//         <View style={{flex:1,flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//           <SettingSvg color={activeTab === 5 ? '#FC8019' : '#9F9F9E'} />
//           <Text style={{color: activeTab === 5 ? '#FC8019' : '#9F9F9E'}}>Settings</Text>
//         </View>
//       </View>
//     ), content: <Orders /> },

//     { title:  (
//       <View style={styles.tabTitleContainer}>
//         <View style={{flex:1,flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
//           <LogoutSvg color={activeTab === 6 ? '#FC8019' : '#9F9F9E'} />
//           <Text style={{color: activeTab === 6 ? '#FC8019' : '#9F9F9E'}}>Logout</Text>
//         </View>
//       </View>
//     ), content: <Orders /> },
//   ];

//   const handleTabPress = (index) => {
//     setTabHistory([...tabHistory, index]);
//     setActiveTab(index);
//   };

//   useEffect(() => {
//     const backAction = () => {
//       if (tabHistory.length > 1) {
//         const prevTab = tabHistory[tabHistory.length - 2];
//         setTabHistory(tabHistory.slice(0, -1));
//         setActiveTab(prevTab);
//         return true;
//       } else {
//         BackHandler.exitApp();
//         return false;
//       }
//     };

//     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

//     return () => backHandler.remove();
//   }, [activeTab, tabHistory]);

//   return (
//     <View style={styles.mainContainer}>
//       <View style={[styles.headerContainer, { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignContent: 'center', paddingHorizontal: 16, height: headerHeight, width: width }]}>
//         <Text style={styles.headerText}>PTR Technologies</Text>
//         <Text style={styles.headerText}>Header</Text>
//         <View  >
//           {/* <HomeSvg color='#FC8019' />
//           <CustomerSvg color='#FC8019' /> */}
//          {/* <Text><CustomerSvg/></Text>  */}
//          <Text> <TouchableOpacity><View style={{ position: 'relative' }}>
//   <CartBag />
//   <View style={{
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FC8019',
//     borderRadius: 50,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }}>
//     <Text style={{ color: 'white' }}>{itemslength ? itemslength.length : '0'}</Text>
//   </View>
// </View></TouchableOpacity>  <View>
//   <TouchableOpacity>
//     <View>
//       {/* <Text> */}
        
//         <CustomerSvg color={'gray'}/>
//       {/* </Text> */}
//     </View>
//   </TouchableOpacity>
// </View> <DateTimeComponent/></Text> 
//         </View>
//       </View>
//       <View style={styles.container}>
//         <View style={styles.leftStack}>
//           {tabs.map((tab, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[
//                 styles.tabButton,
//                 activeTab === index && styles.activeTab,
//               ]}
//               onPress={() => handleTabPress(index)}
//             >
//               <Text style={[styles.tabText, activeTab === index ? {color: '#FC8019'} : null]}>
//                 {tab.title}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//         <View style={styles.contentContainer}>
//           {tabs[activeTab].content}
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
  
//   mainContainer: {
//     flex: 1,
//     height: height,
//     width: width
//   },
//   headerContainer: {
//     backgroundColor: '#F5F5F5',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerText: {
//     fontSize: 18,
//     color: '#171826',
//   },
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   leftStack: {
//     backgroundColor: '#F5F5F5',
//     paddingHorizontal: 20,
//     width: leftStackwidth,
//     // borderWidth:1,
//     flexDirection:'column',
//     alignItems:'center',
//     justifyContent:'flex-start'
   


//   },
//   tabButton: {
//     paddingVertical: 12,
//     paddingHorizontal: 12,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   activeTab: {
//     backgroundColor: '#F5F5F5',
//     borderWidth:1,
//     borderColor:'#FC8019',
//     textAlign:'center',
//     justifyContent:'center',
//     alignContent:'center'
//   },
//   tabText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#9F9F9E',
//     justifyContent:'flex-start',
//     textAlign:'center',
//     alignContent:'flex-start'

//   },
//   contentContainer: {
//     backgroundColor: '#F5F5F5',
//     flexGrow: 1,
//     justifyContent: 'flex-start',
//     width: containerwidth,
//     height: containerHeight
//   },
// });


export default App;





//// Checking navigator here ???
// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';

// const App = () => {
//   const [currentScreen, setCurrentScreen] = useState('Home');

//   const navigate = (screen) => {
//     setCurrentScreen(screen);
//   };

//   useEffect(() => {
//     const backAction = () => {
//       if (currentScreen === 'Details') {
//         navigate('Home');
//         return true; // Indicate that the back action has been handled
//       }
//       return false; // Allow the default back action to occur
//     };

//     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

//     return () => backHandler.remove(); // Clean up the event listener when the component unmounts
//   }, [currentScreen]);

//   return (
//     <View style={styles.container}>
//       {currentScreen === 'Home' ? (
//         <HomeScreen navigate={navigate} />
//       ) : (
//         <DetailsScreen navigate={navigate} />
//       )}
//     </View>
//   );
// };

// const HomeScreen = ({ navigate }) => {
//   return (
//     <View style={styles.screen}>
//       <Text>Home Screen</Text>
//       <TouchableOpacity onPress={() => navigate('Details')}>
//         <Text>Go to Details</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const DetailsScreen = ({ navigate }) => {
//   return (
//     <View style={styles.screen}>
//       <Text>Details Screen</Text>
//       <TouchableOpacity onPress={() => navigate('Home')}>
//         <Text>Go back to Home</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;



// ???? checking navigator here 





// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
// import Product from './components/Allproducts/index';

// const { width, height } = Dimensions.get('window');

// const App = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const tabs = [
//     { title: 'Home', content: <Product /> },
//     { title: 'Customers', content: 'This is the content for Tab 2.' },
//     { title: 'Inventory', content: 'This is the content for Tab 3.' },
//     { title: 'Reports', content: 'This is the content for Tab 4.' },
//     { title: 'Orders', content: 'This is the content for Tab 4.' },
//   ];

//   const handleTabPress = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <View style={styles.mainContainer}>
//       <View style={[styles.headerContainer, { width: width }]}>
//         <Text style={styles.headerText}>Header</Text>
//       </View>
//       <View style={[styles.container, { height: height - 60 }]}>
//         <ScrollView horizontal>
//           <View style={styles.leftStack}>
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
//         </ScrollView>
//         <ScrollView>
//           <View style={styles.contentContainer}>
//             <Text style={styles.contentText}>
//               {tabs[activeTab].content}
//             </Text>
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//   },
//   headerContainer: {
//     backgroundColor: '#f0f0f0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 60,
//   },
//   headerText: {
//     fontSize: 18,
//     color: 'green',
//   },
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   leftStack: {
//     backgroundColor: '#f0f0f0',
//     padding: 16,
//     minWidth: 100, // Adjust as needed
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
//     color: 'green',
//   },
//   contentContainer: {
//     backgroundColor: 'white',
//     // padding: 16,
//     flexGrow: 1,
//     justifyContent: 'flex-start',
//   },
//   contentText: {
//     fontSize: 18,
//     color: 'green',
//   },
// });

// export default App;










// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Header from './components/Header/index';
// import LeftSidebar from './components/LeftSidebar/index';
// import ProductsGrid from './components/ProductsGrid/index';
// import CartSection from './components/CartSection/index';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Header />
//       <View style={styles.mainContent}>
//         <LeftSidebar />
//         <View style={styles.rightContent}>
//           <ProductsGrid />
//           <CartSection />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   mainContent: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   rightContent: {
//     flex: 1,
//   },
// });

// export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import Header from './components/Header/index';
// // import MainScreen from './components/MainScreen/index';
// import Header from './components/Header';
// import MainScreen from './MainScreen';
// // import OtherScreen from './components/OtherScreen'; // Import additional screens as needed

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Main"
//           component={MainScreen}
//           options={{
//             header: () => <Header />, // Render the Header component as the header
//           }}
//         />
//         {/* <Stack.Screen name="Other" component={OtherScreen} /> */}
//         {/* Add more screens as needed */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;