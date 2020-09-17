import 'react-native-gesture-handler';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Header, Content, Button,Card, CardItem,Body} from 'native-base';


import HomeScreen from '../screens/home'
import ListScreen from '../screens/list'

// import icone menu 
import Icon from "react-native-vector-icons/Ionicons";
import { Entypo } from '@expo/vector-icons'; 


export default function DrawerContent(props) {


  return (
    <View style={styles.container}>
  
      
    <Button primary>
              <Text> Primary </Text>
            </Button>
    
    
    <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered button onPress={() =>  props.navigation.navigate('List')}>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
    
    
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent:"center",
      backgroundColor: '#fff',
    },
  });
  