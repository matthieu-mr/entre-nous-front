import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home'
import ListScreen from './screens/list'



export default function App() {
  const Stack = createStackNavigator();




  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions ={{
          headerStyle:{
            backgroundColor:"#0288d1"
          },
          headerTintColor:"white"
        }}>
        <Stack.Screen name="Home" component={HomeScreen}  options ={{
           title:"Coucou",
          headerStyle:{
            backgroundColor:"#673ab7"
          },
         
          headerTintColor:"white"
        }} />
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
