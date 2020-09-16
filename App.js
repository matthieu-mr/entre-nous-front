import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import MainTabScreen from './screens/MainTabScreen'

// import icone menu 
import Icon from "react-native-vector-icons/Ionicons";



export default function App(props) {
 


  return (
    <MainTabScreen/>
  );
}
