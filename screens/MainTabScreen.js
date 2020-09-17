import 'react-native-gesture-handler';
import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from './home'
import ListScreen from './list'

// import icone menu 
import Icon from "react-native-vector-icons/Ionicons";
import { Entypo } from '@expo/vector-icons'; 


export default function MainTabScreeb(props) {
  const HomeStack = createStackNavigator();
  const ListStack = createStackNavigator();

  const Tab = createMaterialBottomTabNavigator();
  const Drawer = createDrawerNavigator();

const MainTab = (props) => {

    return (
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="white"
        style={{ backgroundColor: 'white' }}
      >
        <Tab.Screen
          name="List"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={ListStackScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    )
}




const HomeStackScreen = ({navigation})=> {
  return (
  <HomeStack.Navigator screenOptions ={{
    headerStyle:{
      backgroundColor:"#0288d1"
    },
    headerTintColor:"white"
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen}  options ={{
        title:"Coucou",
        headerStyle:{
          backgroundColor:"#673ab7"
        },
        headerLeft:()=>(
          <Icon.Button name="ios-menu" 
            size={25}
            onPress={()=>{
              navigation.openDrawer()
            }}></Icon.Button>
        ),
        headerTintColor:"white"
      }} />
      
      <HomeStack.Screen name="List" component={ListScreen} />
  </HomeStack.Navigator>
    )
  }



const ListStackScreen = (({navigation})=> {
  return (
  <ListStack.Navigator screenOptions ={{
    headerStyle:{
      backgroundColor:"#0288d1"
    },
    headerTintColor:"white"
  }}>

      <ListStack.Screen name="List" component={ListScreen} options={{
         headerLeft:()=>(
          <Icon.Button name="ios-menu" 
            onPress={()=>{
              navigation.openDrawer()
            }}></Icon.Button>
        ),
      }} />
      <HomeStack.Screen name="Home" component={HomeScreen}  options ={{
        title:"Coucou",
        headerStyle:{
          backgroundColor:"#673ab7"
        },
      
        headerTintColor:"white"
      }} />
  </ListStack.Navigator>
)})

/* 



*/

  return (
    <NavigationContainer>
       
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component ={MainTab}/>
    </Drawer.Navigator>

    </NavigationContainer>
  );
}
