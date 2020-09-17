import 'react-native-gesture-handler';
import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from './home'
import ListScreen from './list'

import DrawerContent from '../drawer/DrawerContent'


// import icone menu 
import Icon from "react-native-vector-icons/Ionicons";
import { Entypo } from '@expo/vector-icons'; 


export default function MainTabScreeb(props) {
 // create stack drawer 
  const HomeStack = createStackNavigator();
  const ListStack = createStackNavigator();

 // creat stack bottom navigator  
  const Tab = createMaterialBottomTabNavigator();
  const Drawer = createDrawerNavigator();


/** 
*! workflow 

*? 1- Top : create navigation container who contain tabs (can add drawer but each road is drawer component)
*? 2- in drawer add tab navigator (don't forget shifting for change color tab )
*? 3 - in drawer import componenent of drawer (here homestack ) 
*? 4 - in in drawer import your screen component

* * resume :  
**     <navigation 
* *      < tab >
**           <drawer1 />
**           <drawer2 />
**       <tab /> 
**     /> 

*/


const MainTab = () => {



    return (
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        shifting={true}
        barStyle={{ backgroundColor: '#3949ab' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Accueil',
            tabBarColor:'#3949ab',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          


        />
        <Tab.Screen
          name="Notifications"
          component={ListStackScreen}
          options={{
            tabBarLabel: 'Liste',
            tabBarColor:"#5c6bc0",
            tabBarIcon: ({ color }) => (
              <Entypo name="list" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    )
}




const HomeStackScreen = (props)=> {
  return (
  <HomeStack.Navigator screenOptions ={{
    headerStyle:{
      backgroundColor:"#3949ab"
    },
    headerTintColor:"white"
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen}  options ={{
        title:"Coucou",
        headerStyle:{
          backgroundColor:'#3949ab'
        },
        headerLeft:()=>(
          <Icon.Button name="ios-menu" 
          backgroundColor="#3949ab"
            size={25}
            onPress={()=>{
              props.navigation.openDrawer()
            }}></Icon.Button>
        ),
        headerTintColor:"white"
      }} />
      
      <HomeStack.Screen name="List" component={ListScreen} />
  </HomeStack.Navigator>
    )
  }



const ListStackScreen = ((props)=> {
  return (
  <ListStack.Navigator screenOptions ={{
    headerStyle:{
      backgroundColor:"#5c6bc0"
    },
    headerTintColor:"white"
  }}>

      <ListStack.Screen name="List" component={ListScreen} options={{
         headerLeft:()=>(
          <Icon.Button name="ios-menu"
            backgroundColor="#5c6bc0"
            size={25} 
            onPress={()=>{
              props.navigation.openDrawer()
            }}></Icon.Button>
        ),
      }} />
     
  </ListStack.Navigator>
)})

/* 



*/

  return (
    <NavigationContainer>
       
    <Drawer.Navigator initialRouteName="Home" drawerContent={props=> <DrawerContent  {...props} />}>
      <Drawer.Screen name="Home" component ={MainTab}/>
    </Drawer.Navigator>

    </NavigationContainer>
  );
}
