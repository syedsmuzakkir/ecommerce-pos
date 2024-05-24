import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

  import { Dimensions, Text, View } from "react-native";
//   const screenWidth = Dimensions.get("window").width;
const { width, height } = Dimensions.get('window'); // Get screen dimensions

//   console.log(screenWidth, 'screen')

  const headerHeight = height * 0.1;
const containerHeight = height * 0.9;
const containerWidth = width * 0.9;
const InnerContentHeader = containerHeight * 0.09;
const InnerContentHeaderWidth = containerWidth * 0.65;
const InnerContentWidth = containerWidth * 0.65;
const InnerContentHeight = containerHeight * 0.92;
const InnerWidthCheckout = containerWidth * 0.35;
const InnerHeightCheckout = containerHeight;


//   const chartConfig = {
//     // backgroundGradientFrom: "#1E2923",
//     // backgroundGradientFromOpacity: 19999,
//     // backgroundGradientTo: "white",
//     // backgroundGradientToOpacity: 0.5,
//     // color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//     // backgroundcolor:'white',
//     color: (opacity)=>`rgba(252, 128, 25, 1)`,
    
//     strokeWidth: 9, // optional, default 3
//     // barPercentage: 0.5,
//     // color:'white',
//     useShadowColorFromDataset: false // optional
//   };
  
const chartConfig = {
    backgroundGradientFrom: "#f5f5f5",
    backgroundGradientTo: "#f5f5f5",
    color: (opacity = 1) => `rgba(252, 128, 25, ${opacity})`, // Line color
    labelColor: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`, // Text color
    strokeWidth: 9,
    useShadowColorFromDataset: false,
  };
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };



  const PieData = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];
  
  const Graphs = ()=>{

    return(
        <>
        <View>
            <Text>
                This is chart boxes 
            </Text>
        </View>
        <View style= {{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
        <LineChart
  data={data}
  width={containerWidth/2}
  height={256}
  verticalLabelRotation={30}
  chartConfig={chartConfig}
//   bezier
/>
<BarChart
//   style={graphStyle}
  data={data}
  width={containerWidth/3}
  height={220}
  yAxisLabel="$"
  chartConfig={chartConfig}
  verticalLabelRotation={30}
/>
</View>
<PieChart
  data={PieData}
  width={containerWidth/2.5} // Set the width of the chart
  height={300} // Set the height of the chart
  chartConfig={chartConfig}
  accessor={"population"}
  backgroundColor={"transparent"}
  style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}} // Custom margin and padding
  center={[10, 50]}
//   absolute
/>

        </>
    )
  }

  export default Graphs