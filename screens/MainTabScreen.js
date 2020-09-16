import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import HomeScreen from './home'
import ListScreen from './list'

// import icone menu 
import Icon from "react-native-vector-icons/Ionicons";



export default function MainTabScreeb(props) {
  const HomeStack = createStackNavigator();
  const ListStack = createStackNavigator();

  const Tab = createMaterialBottomTabNavigator();
  const Drawer = createDrawerNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        style={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="List"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={ListScreen}
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




const HomeStackScreen = ((props)=> {
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
              props.navigation.openDrawer()
            }}></Icon.Button>
        ),
        headerTintColor:"white"
      }} />
      
      <HomeStack.Screen name="List" component={ListScreen} />
  </HomeStack.Navigator>
    )
  }
)


const ListStackScreen = ((props)=> {
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
              props.navigation.openDrawer()
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



  return (
    <NavigationContainer>
       
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        style={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="List"
          component={ListStackScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="list" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>

    </NavigationContainer>
  );
}
