/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React from 'react';
 import {NavigationContainer} from '@react-navigation/native';
 import BottomTabNavigator from './navigator/Navigator';
 import Icon from 'react-native-vector-icons/MaterialIcons'
 

Icon.loadFont();
 
 const App = () => {
   return (
     <NavigationContainer>
       <BottomTabNavigator />
     </NavigationContainer>
   );
 };
 
 export default App;
 