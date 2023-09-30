import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  Alert,
  Touchable,
  Pressable,
  RootTag,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import { NavigationProp, NavigatorScreenParams, RouteConfig, RouteProp, StackNavigationState, useNavigation } from '@react-navigation/native';
import Dashboard from './ Dashboard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Navigator from './Direction/Navigator';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
 const navigation = useNavigation();
  const handleLogin = async () => {
    console.log(email,password);
    try {
      const response = await axios.post('https://chat-pocket.pockethost.io/api/collections/users/auth-with-password', {
        identity : email,
        password : password
      });
      if(response.status==200){
        console.log(response.data);
        console.log('Login successful!', response.data);
        navigation.navigate('Dashboard');
      } else {
      // Handle successful login, e.g., store user token
      console.log('Login Unsuccessful!', response.data);
      }
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
    }
  }

    var visibleInputView = null;
    const [isVisible, setVisibilityState] = useState(false);
    return (
      <SafeAreaView
        style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
        <View style={{marginStart: 20, marginEnd: 20}}>
          <View>
            <Text style={styles.smallText}>Hi There,</Text>
            <Text style={styles.headingText}>Welcome Back</Text>
          </View>
          <View style={styles.editTextProperty}>
            <Image
              style={styles.imageSetEmail}
              source={require('/Users/bd19/Reactcliproject/assets/Message.png')}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={'black'}
              value={email}
              onChangeText={(email)=>setEmail(email)}
              style={{padding: 10,  marginEnd: 50,color:'black'}}></TextInput>
          </View>
          <View style={styles.editTextProperty}>
            <Image
              style={styles.imageSetPassword}
              source={require('/Users/bd19/Reactcliproject/assets/Lock.png')}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={'black'}
              value={password}
              onChangeText={(password)=>setPassword(password)}
              secureTextEntry={!showPassword}
              style={{padding: 10, width: '78%',color:'black'}}></TextInput>
            <Image
              style={{
                height: 25,
                width: 25,
                marginEnd: 10,
                flexDirection: 'row',
              }}
              source={require('/Users/bd19/Reactcliproject/assets/Hide-Password.png')}
            />
          </View>

          <Text
            style={{
              alignSelf: 'center',
              marginTop: 10,
              textDecorationLine: 'underline',
            }}>
            Forget your password?
          </Text>
          <Pressable style={{marginTop: 150}} onPress={()=> {console.warn("Ok"); handleLogin();}}>
            <View style={styles.ButtonDesign}>
              <Image
                style={{height: 20, width: 20}}
                source={require('/Users/bd19/Reactcliproject/assets/Login.png')}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: '#fff',
                  margin: 10,
                }}>
                Login
              </Text>
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
    smallText: {
      fontSize: 16,
      color: 'black',
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 25,
    },
    headingText: {
      fontSize: 20,
      color: 'black',
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 10,
      fontWeight: '600',
    },
    editTextProperty: {
      fontSize: 18,
      color: 'black',
      backgroundColor: '#F7F8F8',
      flexDirection: 'row',
      marginTop: 20,
      fontWeight: '600',
      width: '95%',
      borderRadius: 20,
      alignItems: 'center',
      elevation: 1,
    },
    imageSetEmail: {
      height: 20,
      width: 20,
      marginStart: 15,
      margin: 8,
    },
    imageSetPassword: {
      height: 30,
      width: 30,
      marginStart: 10,
      marginTop: 5,
    },
    ButtonDesign: {
      justifyContent: 'center',
      backgroundColor: '#92A3FD',
      width: '80%',
      height: 60,
      borderRadius: 30,
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
      elevation: 1,
    },
  });

