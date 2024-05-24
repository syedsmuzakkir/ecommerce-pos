
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, BackHandler } from 'react-native';
import GetAllProducts from '../ProductList/GetAllProducts';
import { fetchingOrders } from '../../api/fetchOrders';
import { fetchingCustomers } from '../../api/fetchCustomers';
import { fetchCategories } from '../../api/fetchProducts';
import Checkout from '../Checkout';

import Fruits from '../ProductList/Fruits'
import Vegetables from '../ProductList/Vegetables';
import LeafyVegetables from '../ProductList/LeafyVegetables';

import { useTabNavigation } from '../../App';
const { width, height } = Dimensions.get('window'); // Get screen dimensions

import { PieChart, Pie } from 'react-native-svg-charts';
import Graphs from './Graphs';
import SaleHistory from './SaleHistory';
import Transaction from './Transaction';
const headerHeight = height * 0.1;
const containerHeight = height * 0.9;
const containerWidth = width * 0.9;
const InnerContentHeader = containerHeight * 0.09;
const InnerContentHeaderWidth = containerWidth * 0.65;
const InnerContentWidth = containerWidth * 0.65;
const InnerContentHeight = containerHeight * 0.92;
const InnerWidthCheckout = containerWidth * 0.35;
const InnerHeightCheckout = containerHeight;

const Reports = () => {
  useEffect(() => {
    getProduct();
    fetchOrders();
    fetchCustomers();
  }, []);

  const [Products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [tabHistory, setTabHistory] = useState([0]);
  const [orders, setorders] = useState()
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
      setorders(data)
      
      data.map(value => {
        console.log('this is orders ', value);
        
      });
    } catch (error) {
      console.log('orders error', error);
    }
  };

  const fetchCustomers = async () => {
    try {
      const response = await fetchingCustomers();
      const data = response;
      data.map(value => {
        console.log('customer value', value);
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
    { title: <Text style={{borderBottomWidth:1, borderBottomColor:'#FC8019',  color: activeTab === 0 ? '#FC8019'  : '#9F9F9E'}}>Reports</Text>, content: <Graphs products={Products} /> },
    { title: 'Sale History', content: <SaleHistory orders={orders} /> },
    { title: 'Transaction History', content: <Transaction orders={orders} /> },
    // { title: 'Leafy Vegetables', content: <LeafyVegetables leafyVegetables={leafyVegetables} /> },
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



const data = [
  { key: 'Group A', value: 70 },
  { key: 'Group B', value: 20 },
  { key: 'Group C', value: 10 },
  // { key: 'Group D', value: 100 },
];
const colors = ['#FC8019', '#FF0000', '#09AA29', '#FF8042'];

const PieChartExample = () => {
  const pieData = data.map((item, index) => ({
    value: item.value,
    svg: { fill: colors[index % colors.length] },
    key: `pie-${index}`,
    
  }));

  return (
    // <View style={''}>
    <View style = {{display:'flex', flexDirection:'column', justifyContent:'flex-start'}} >


      <View style= {{ width:'100%', height:200, display:'flex', flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-start'}}>
      <PieChart style={{ flex: 1,alignSelf:'flex-start', transform: [{ rotate: '90deg' }] }} data={pieData} startAngle={-Math.PI} endAngle={0} />
      <View style={{ position: 'absolute', left:0, right:0,  bottom:100, alignItems: 'left' }}>
        {/* <Text>Group A: 400</Text> */}
        {/* <Text>Group B: 300</Text> */}
        {/* <Text>Group C: 300</Text> */}
        <Text style ={{alignSelf:'center', textAlign:'center'}} >400</Text>

        <Text style ={{alignSelf:'center', textAlign:'center'}} >Orders</Text>
      </View>
      </View>


    </View>
  );
};




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
        {/* <View style={styles.innerContainer}>
          
          <Checkout />
        </View> */}
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
    width: containerWidth-20,
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
    width: containerWidth,
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

export default Reports;
