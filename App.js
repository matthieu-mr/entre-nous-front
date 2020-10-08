import 'react-native-gesture-handler';
import * as React from 'react';
import {connect} from 'react-redux';
import './global'

import MainTabScreen from './drawer/MainTabScreen'
// import redux 
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'Sansita-bold': require('./assets/fonts/SansitaSwashed-Bold.ttf'),
    'Sansita-medium': require('./assets/fonts/SansitaSwashed-Medium.ttf'),
    });
  };

// import des reducers 
import listAdress from "./reducers/ListAdress"


const store = createStore(combineReducers({listAdress}))

// import icone menu 
import Icon from "react-native-vector-icons/Ionicons";


export default function App(props) {
 const [dataLoaded,SetDataLoaded] = React.useState(false)
 if(!dataLoaded){
   return (
     <AppLoading
      startAsync={fetchFonts}
      onFinish={()=>SetDataLoaded(true)}
      />
   )
 }
  return (
    <Provider store={store}>
      <MainTabScreen/>
      </Provider>
  );
}
