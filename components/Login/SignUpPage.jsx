import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import LoginImage from '../../assets/Saly-14.png'
import Invisible from '../../assets/invisible.png'

const SignUpPage = ({ onLogin }) => {
  const handleSignUp = () => {
    // Implement your sign-up logic here

    // After successful sign-up, navigate back to login page
    onLogin();
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={{ display: 'flex', flexDirection: 'column', padding: '1%', width:'100%' }}>


<View style={{ display: 'flex', flexDirection: 'column', padding: '1%' }}>
          <View>
            <Text style={{ fontSize: 20, fontFamily: 'Inter-SemiBold', color: '#171826' }}>PTR Technologies</Text>

          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '10%', paddingVertical: '10%' }}>
            <View style={{ display: 'flex', flexDirection: 'row' }} >
              <View>
                <View>
                  <Text style={{ fontFamily: 'Inter-SemiBold', fontSize: 50, color: '#171826' }}>{`Sign Up to `}</Text>
                  <Text style={{ fontFamily: 'Inter-Medium', fontSize: 35, color: '#FC8019' }} >PTR Technologies</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 16 }} >If you already have a registered account</Text>
                  <Text>
                    <Text>{`You can  `}</Text>
                    <Text>Sign In !</Text>
                  </Text>
                </View>
              </View>
              <View>
                <Image source={LoginImage} />

              </View>
            </View>
            <View>
              <Text style={{ fontSize: 30, fontFamily: 'Inter-Medium' }} >Sign Up</Text>
              <View style={styles.container}>
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
                    {/* <MaterialIcons name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="gray" /> */}
                    {/* <MaterialIcons name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="gray" /> */}
                    <Image source={Invisible} name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="gray" />

                  </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column' }}>
                  {/* <TouchableOpacity style={styles.signInButton} onPress={signIn}>
                    <Text style={styles.signInButtonText}>Login</Text>
                  </TouchableOpacity> */}
                  {/* <TouchableOpacity style={styles.signInButton} onPress={toggleShowLogin}>
                    <Text style={styles.signInButtonText}>Create Account</Text>
                  </TouchableOpacity> */}
                   <TouchableOpacity style={{ backgroundColor: 'green', padding: 10, marginVertical: 10 }} onPress={handleSignUp}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onLogin}>
        <Text style={{ color: 'blue', textAlign: 'center', marginTop: 10 }}>Already have an account? Sign in</Text>
      </TouchableOpacity>
                </View>

              </View>
              {/* <View>
      <View>
        <Text onPress={()=>{handleTabChange()}} >Login </Text>
      </View>
    </View> */}
              {/* <View>
      <View>
        <Text  >Create Account</Text>
      </View>
    </View> */}
            </View>
            {/* <Text>PTR Technologies</Text>
  <View>
    <Text>Enter Email</Text>
  </View> */}
          </View>
        </View>
        <View>
      <Text style={{ fontSize: 30, fontFamily: 'Inter-Medium' }}>Sign up</Text>
      {/* Add your sign-up form inputs here */}
      <TouchableOpacity style={{ backgroundColor: 'green', padding: 10, marginVertical: 10 }} onPress={handleSignUp}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onLogin}>
        <Text style={{ color: 'blue', textAlign: 'center', marginTop: 10 }}>Already have an account? Sign in</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpPage;
const styles = StyleSheet.create({

  //styling for form 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#FFF2E8'
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
  signInButton: {
    backgroundColor: 'blue',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 18,
    // fontWeight: 'bold',
    // fontFamily:'Inter-Regular, serif'
    fontFamily: 'Inter-Regular'
  },

  // styling for login form 
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});