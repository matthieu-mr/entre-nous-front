import 'react-native-gesture-handler';
import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from '../screens/Home'
import ListAdressScreen from '../screens/AdressList'
import SearchAdressScreen from '../screens/SearchAdress'
import ListTypePlace from '../screens/ListTypePlace'
import MapActivityScreen from '../screens/MapActivity'
import PlaceScreen from '../screens/Place'
import ContactListScreen from '../screens/ContactList'
import SavedPlaceScreen from '../screens/SavedPlace'
import DrawerContent from './DrawerContent'


// import icone menu 
import Icon from "react-native-vector-icons/Ionicons";
import { Entypo } from '@expo/vector-icons'; 

export default function MainTabScreeb(props,navigation) {
 // create stack drawer 
  const HomeStack = createStackNavigator();


 // creat stack bottom navigator  
  const Drawer = createDrawerNavigator();



const HomeStackScreen = ((props)=> {

const header ="#0077c2"

  return (
  <HomeStack.Navigator screenOptions ={{
    headerStyle:{
      backgroundColor:header
    },
    headerTintColor:"white"
  }}>

      <HomeStack.Screen name="Accueil" component={HomeScreen} options={{
         headerLeft:()=>(
          <Icon.Button name="ios-menu"
            backgroundColor="#0077c2"
            size={25} 
            onPress={()=>{
              props.navigation.openDrawer()
            }}></Icon.Button>
        ),
      }} />


    <HomeStack.Screen name="listadress" component={ListAdressScreen} options={{
            headerLeft:()=>(
              <Icon.Button name="ios-menu"
                backgroundColor="#5c6bc0"
                size={25} 
                onPress={()=>{
                  props.navigation.openDrawer()
                }}></Icon.Button>
            ),
          }} />
        
        <HomeStack.Screen name="findadress" component={SearchAdressScreen} options={{
            
            headerLeft:()=>(
              <Icon.Button name="ios-menu"
                backgroundColor={header}
                size={25} 
                onPress={()=>{
                  props.navigation.openDrawer()
                }}>
                </Icon.Button>
            ),
          }} />


<HomeStack.Screen name="listtype" component={ListTypePlace} options={{
            headerLeft:()=>(
              <Icon.Button name="ios-menu"
                backgroundColor="#5c6bc0"
                size={25} 
                onPress={()=>{
                  props.navigation.openDrawer()
                }}></Icon.Button>
            ),
          }} />

<HomeStack.Screen name="map" component={MapActivityScreen} options={{
            headerLeft:()=>(
              <Icon.Button name="ios-menu"
                backgroundColor="#005cb2"
                size={25} 
                onPress={()=>{
                  props.navigation.openDrawer()
                }}></Icon.Button>
            ),
          }} />

        <HomeStack.Screen name="place" component={PlaceScreen} options={{
            headerLeft:()=>(
              <Icon.Button name="ios-menu"
                backgroundColor="#005cb2"
                size={25} 
                onPress={()=>{
                  props.navigation.openDrawer()
                }}></Icon.Button>
            ),
          }} />

  </HomeStack.Navigator>
)})


  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" drawerContent={props=> <DrawerContent  {...props} />}>
      <Drawer.Screen name="Home" component ={HomeStackScreen}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
