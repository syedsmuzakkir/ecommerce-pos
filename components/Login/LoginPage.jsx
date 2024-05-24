// import React, { useState, useCallback } from "react";
// import { Text, StyleSheet, View, Image, Pressable, Modal, Dimensions, TextInput, TouchableOpacity } from "react-native";
// import ForgotPassword from "../ForgotPassword";
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
// import {
//   FontFamily,
//   Color,
//   FontSize,
//   Padding,
//   StyleVariable,
//   Border,
// } from "../../GlobalStyles";
// import SignUpPage from "./SignUpPage";

// import LoginImage from '../../assets/Saly-14.png'
// import Invisible from '../../assets/invisible.png'

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


// const LoginPage = ({ onLogin }) => {
//   const [showLogin, setShowLogin] = useState(true);
//   console.log(onLogin, ' this is handleLogin')
//   const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);

//   const handleTabChange = () => {
//     onLogin()
//   };

//   const openForgotPassword = useCallback(() => {
//     setForgotPasswordVisible(true);
//   }, []);

//   const closeForgotPassword = useCallback(() => {
//     setForgotPasswordVisible(false);
//   }, []);

//   ///

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const signIn = () => {
//     // Implement your sign-in logic here
//     console.log('Email:', email);
//     console.log('Password:', password);

//     // if the data is match or send to api 
//     handleTabChange()
//     // Example: You can send the email and password to a server for authentication
//   };

//   const toggleShowLogin = () => {
//     setShowLogin(!showLogin);
//   };


//   return (
//     <>
//       {showLogin ? (
//         <View style={{ display: 'flex', flexDirection: 'column', padding: '1%' }}>
//           <View>
//             <Text style={{ fontSize: 20, fontFamily: 'Inter-SemiBold', color: '#171826' }}>PTR Technologies</Text>

//           </View>
//           <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '10%', paddingVertical: '10%' }}>
//             <View style={{ display: 'flex', flexDirection: 'row' }} >
//               <View>
//                 <View>
//                   <Text style={{ fontFamily: 'Inter-SemiBold', fontSize: 50, color: '#171826' }}>{`Sign in to `}</Text>
//                   <Text style={{ fontFamily: 'Inter-Medium', fontSize: 35, color: '#FC8019' }} >PTR Technologies</Text>
//                 </View>
//                 <View>
//                   <Text style={{ fontSize: 16 }} >If you don’t have a registered account</Text>
//                   <Text>
//                     <Text>{`You can  `}</Text>
//                     <Text>Sign Up !</Text>
//                   </Text>
//                 </View>
//               </View>
//               <View>
//                 <Image source={LoginImage} />

//               </View>
//             </View>
//             <View>
//               <Text style={{ fontSize: 30, fontFamily: 'Inter-Medium' }} >Sign in</Text>
//               <View style={styles.container}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Email"
//                   value={email}
//                   onChangeText={setEmail}
//                   keyboardType="email-address"
//                   autoCapitalize="none"
//                 />
//                 <View style={styles.passwordContainer}>
//                   <TextInput
//                     style={[styles.input, styles.passwordInput]}
//                     placeholder="Password"
//                     value={password}
//                     onChangeText={setPassword}
//                     secureTextEntry={!showPassword}
//                   />
//                   <TouchableOpacity style={styles.togglePasswordButton} onPress={toggleShowPassword}>
//                     {/* <MaterialIcons name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="gray" /> */}
//                     {/* <MaterialIcons name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="gray" /> */}
//                     <Image source={Invisible} name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="gray" />

//                   </TouchableOpacity>
//                 </View>
//                 <View style={{ display: 'flex', flexDirection: 'column' }}>
//                   <TouchableOpacity style={styles.signInButton} onPress={signIn}>
//                     <Text style={styles.signInButtonText}>Login</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity style={styles.signInButton} onPress={toggleShowLogin}>
//                     <Text style={styles.signInButtonText}>Create Account</Text>
//                   </TouchableOpacity>
//                 </View>

//               </View>
//               {/* <View>
//       <View>
//         <Text onPress={()=>{handleTabChange()}} >Login </Text>
//       </View>
//     </View> */}
//               {/* <View>
//       <View>
//         <Text  >Create Account</Text>
//       </View>
//     </View> */}
//             </View>
//             {/* <Text>PTR Technologies</Text>
//   <View>
//     <Text>Enter Email</Text>
//   </View> */}
//           </View>
//         </View>




//       ) :(
//       // Render signup page if showLogin is false
//       <SignUpPage onLogin={() => setShowLogin(true)} />
// )}
//     </>
//   );
// };

// const styles = StyleSheet.create({

//   //styling for form 
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // paddingHorizontal: 20,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//     backgroundColor: '#FFF2E8'
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   passwordInput: {
//     flex: 1,
//   },
//   togglePasswordButton: {
//     padding: 10,
//   },
//   signInButton: {
//     backgroundColor: 'blue',
//     width: '100%',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   signInButtonText: {
//     color: 'white',
//     fontSize: 18,
//     // fontWeight: 'bold',
//     // fontFamily:'Inter-Regular, serif'
//     fontFamily: 'Inter-Regular'
//   },

//   // styling for login form 
//   modalBackdrop: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
//   },
//   modalContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });





// const styles = StyleSheet.create({
//   groupContainerPosition: {
//     width: wp("50%"),
//     left: 0,
//     position: "absolute",

//   },
//   signInToTypo: {
//     fontFamily: FontFamily.interSemiBold,
//     textAlign: "left",
//     color: Color.colorGray_100,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   signInTypo: {
//     fontFamily: FontFamily.textSmMedium,
//     fontWeight: "500",
//   },
//   youTypo: {
//     fontSize: FontSize.size_base,
//     width: wp("40%"),
//     textAlign: "left",
//     left: 0,
//     position: "absolute",
//   },
//   groupLayout: {
//     width: wp("40%"),
//     position: "absolute",
//   },
//   selectTypo: {
//     color: Color.colorLimegreen_100,
//     fontSize: FontSize.size_base,
//     textAlign: "left",
//   },
//   buttonLayout: {
//     minHeight: hp("5%"),
//     minWidth: wp("30%"),
//     paddingVertical: Padding.p_base,
//     paddingHorizontal: Padding.p_5xl,
//     height: hp("5.5%"),
//     width: wp("22%"),
//     top: hp("33%"),
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     borderRadius: StyleVariable.boundVariablesData1,
//     position: "absolute",
//   },
//   textTypo: {
//     textAlign: "center",
//     lineHeight: 24,
//     alignSelf: "stretch",
//     fontSize: FontSize.size_base,
//     fontFamily: FontFamily.textSmMedium,
//     fontWeight: "500",
//   },
//   signInTo: {
//     fontSize: wp("4%"),
//     textAlign: "left",
//     color: Color.colorGray_100,
//     left: 0,
//     top: 0,
//   },
//   ptrTechnologies: {
//     top: hp("8%"),
//     fontSize: wp("3%"),
//     color: Color.colorDarkorange_100,
//     textAlign: "left",
//     width: wp("50%"),
//     left: 0,
//     position: "absolute",
//   },
//   signInToParent: {
//     height: hp("12%"),
//     top: 0,
//   },
//   ifYouDont: {
//     fontFamily: FontFamily.regular,
//     color: Color.colorGray_100,
//     top: 0,
//   },
//   youCan: {
//     fontFamily: FontFamily.regular,
//   },
//   signUp: {
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//   },
//   youCanSignContainer: {
//     top: hp("20%"),
//     color: "#000",
//   },
//   ifYouDontHaveARegisteredParent: {
//     top: hp("19%"),
//     left: wp("1%"),
//     height: hp("6%"),
//     width: wp("40%"),
//     position: "absolute",
//   },
//   groupContainer: {
//     height: hp("25%"),
//     top: 0,
//   },
//   saly14Icon: {
//     // top: hp("11%"),
//     // left: wp("21%"),
//     // width: wp("21%"),
//     // height: hp("25%"),
//     left: '50%',
//     position: "absolute",
//   },
//   groupParent: {
//     // top: hp("30%"),
//     // left: wp("12%"),
//     // width: wp("42%"),
//     // height: hp("69%"),
//     // position: "absolute",
//     width: screenWidth * 0.9, // 90% of screen width
//     height: screenHeight * 0.8
//   },
//   groupChild: {
//     borderRadius: Border.br_5xs,
//     backgroundColor: Color.colorLinen,
//     height: hp("6%"),
//     width: wp("40%"),
//     left: 0,
//     top: 0,
//     position: "absolute",
//   },
//   password: {
//     top: hp("3%"),
//     left: wp("8%"),
//     width: wp("12%"),
//     fontFamily: FontFamily.regular,
//     position: "absolute",
//   },
//   groupParent2: {
//     height: hp("6%"),
//     width: wp("40%"),
//     left: 0,
//     top: 0,
//     position: "absolute",
//   },
//   invisible1Icon: {
//     top: hp("3.5%"),
//     left: wp("86%"),
//     width: wp("1%"),
//     height: hp("1.8%"),
//     position: "absolute",
//     overflow: "hidden",
//   },
//   forgotPasswordOverlay: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "rgba(113, 113, 113, 0.3)",
//   },
//   forgotPasswordBg: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     left: 0,
//     top: 0,
//   },
//   forgotPassword: {
//     fontSize: FontSize.regular_size,
//     color: Color.colorDarkgray_100,
//     fontFamily: FontFamily.regular,
//     textAlign: "left",
//   },
//   forgotPasswordContainer: {
//     left: wp("67%"),
//     top: hp("25%"),
//     position: "absolute",
//   },
//   groupParent1: {
//     top: hp("17%"),
//     height: hp("10%"),
//     left: 0,
//   },
//   text1: {
//     color: Color.white100,
//   },
//   text: {
//     justifyContent: "center",
//     borderRadius: StyleVariable.boundVariablesData1,
//   },
//   button: {
//     backgroundColor: Color.colorDarkorange_100,
//     left: 0,
//   },
//   text3: {
//     color: Color.colorDarkorange_100,
//   },
//   button1: {
//     left: wp("34%"),
//     borderStyle: "solid",
//     borderColor: Color.colorDarkorange_100,
//     borderWidth: 1,
//   },
//   signIn: {
//     fontSize: wp("2.5%"),
//     textAlign: "left",
//     color: Color.colorGray_100,
//     left: 0,
//     top: 0,
//     position: "absolute",
//   },
//   groupView: {
//     top: hp("24%"),
//     height: hp("37%"),
//     left: wp("69%"),
//     width: wp("42%"),
//   },
//   ptrTechnologies1: {
//     top: hp("3%"),
//     left: wp("3%"),
//     fontSize: FontSize.size_xl,
//     letterSpacing: 0,
//     lineHeight: 23,
//     textAlign: "left",
//     color: Color.colorGray_100,
//   },
//   select: {
//     fontFamily: FontFamily.textSmMedium,
//     fontWeight: "500",
//   },
//   deleteIcon: {
//     width: wp("3%"),
//     height: hp("3%"),
//     opacity: 0,
//     overflow: "hidden",
//   },
//   input: {
//     top: hp("31%"),
//     borderRadius: Border.br_7xs,
//     justifyContent: "space-between",
//     padding: Padding.p_base,
//     alignItems: "center",
//     flexDirection: "row",
//     backgroundColor: Color.colorLinen,
//     height: hp("6%"),
//     width: wp("40%"),
//     left: wp("69%"),
//     position: "absolute",
//   },
//   loginPage: {
//     // backgroundColor: Color.white100,
//     // width: wp("100%"),
//     // height: hp("100%"),
//     // overflow: "hidden",
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import SignUpPage from "./SignUpPage";
import LoginImage from '../../assets/Saly-14.png';
import Invisible from '../../assets/invisible.png';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const LoginPage = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);
  const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const signIn = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    handleTabChange();
  };

  const toggleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleTabChange = () => {
    onLogin();
  };

  const openForgotPassword = useCallback(() => {
    setForgotPasswordVisible(true);
  }, []);

  const closeForgotPassword = useCallback(() => {
    setForgotPasswordVisible(false);
  }, []);


  return (
    <>
      {showLogin ? (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>PTR Technologies</Text>
          </View>
          <View style={styles.loginContent}>
            <View style={styles.loginHeader}>
              <Text style={styles.signInText}>Sign in to</Text>
              <Text style={styles.companyName}>PTR Technologies</Text>
            </View>
            <View style={styles.loginBody}>
              <View style = {styles.loginImageContainer} >

              <Image source={LoginImage} style={styles.loginImage} />
              </View>
              <View>
              <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Sign in</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={[styles.input, styles.passwordInput]}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity style={styles.togglePasswordButton} onPress={toggleShowPassword}>
                    <Image source={Invisible} style={styles.eyeIcon} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.signInButton} onPress={signIn}>
                  <Text style={styles.signInButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signInButton} onPress={toggleShowLogin}>
                  <Text style={styles.signInButtonText}>Create Account</Text>
                </TouchableOpacity>
              </View>
              </View>
            </View>
          </View>
        </ScrollView>
      ) : (
        <SignUpPage onLogin={() => setShowLogin(true)} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logoText: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#171826',
  },
  loginContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginHeader: {
    marginBottom: 20,
  },
  signInText: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#171826',
  },
  companyName: {
    fontSize: 35,
    fontFamily: 'Inter-Medium',
    color: '#FC8019',
  },
  loginBody: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    paddingVertical: '10%',
  },
  
  loginImageContainer :{
    width: screenWidth * 0.4,
    height: screenHeight * 0.4,
  },
  loginImage: {
   
    // width:'100%',
    // height:'100%'
  },
  formContainer: {
    width: screenWidth * 0.5,
  },
  formTitle: {
    fontSize: 30,
    fontFamily: 'Inter-Medium',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#FFF2E8',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  togglePasswordButton: {
    padding: 10,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  signInButton: {
    backgroundColor: 'blue',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Inter-Regular',
  },
});






export default LoginPage;
