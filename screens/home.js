import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Paper,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import { Button,Form,Item, Input, Label, Card, CardItem, Body,Container,Header,Content } from 'native-base';

import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';


import { ScrollView } from 'react-native-gesture-handler';

import * as Analytics from 'expo-firebase-analytics';

import * as WebBrowser from 'expo-web-browser';
import * as Facebook from 'expo-auth-session/providers/facebook';

WebBrowser.maybeCompleteAuthSession();


function Home(props) {
/*
uri facebook
https://entre-nous-5d8d8.firebaseapp.com/__/auth/handler

google 
id client 
805275159192-4b4shij9k6spaqpsk0v0magf70vl1eka.apps.googleusercontent.com

clke secrete
c9cKdQsqmXmpQl_hoCYQ3YYk

*/



  let gradient = ["#80d6ff","#42a5f5","#0077c2","#42a5f5","#80d6ff"]
 
  let test=async()=>[
    await Analytics.setCurrentScreen('GiveGithubStarsScreen','test')
  ]
  test()


let bouton =async()=>{
  await Analytics.logEvent('ButtonTapped', {
    name: 'settings',
    screen: 'profile',
    purpose: 'Opens the internal settings',
  });
}

  /* 
fb 
id : 353411062676075

key : c50c94bc4605a981c1dfc10703f1a175

  */

  return (
  <View style={styles.container}>
    <ScrollView>

    <View style={styles.constainerList}> 
      
         

        <LinearGradient
        colors={gradient}
          start={{x: 0.0, y: 1.0}} end={{x: 2.0, y: 2.0}}
          style={{ height: 48, width: 200, alignItems: 'center', justifyContent: 'center', borderRadius:50,marginTop:20}}
        >

          <TouchableOpacity style={styles.buttonContainer} onPress={()=>bouton('findadress')}>
            <Text style={styles.buttonText}>
             Face
            </Text>
          </TouchableOpacity>
        </LinearGradient>
  

        </View>

    </ScrollView>
      <View style={{marginBottom:15}}> 
        <LinearGradient
          colors={gradient}
            start={{x: 0.0, y: 1.0}} end={{x: 2.0, y: 2.0}}
            style={{ height: 48, width: 400, alignItems: 'center', justifyContent: 'center', borderRadius:50,marginTop:20}}
          >
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>alert('findadress')}>
              <Text style={styles.buttonText}>
                Google
              </Text>
          </TouchableOpacity>
        </LinearGradient>

      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },

  constainerList:{
    alignItems:"center",
    flex:1,
  },

  content:{
   width:"90%",

  },
  contentTextCard:{
    fontSize:16,
    color:"#819ca9",

  },
  
  contentCard:{
    display:"flex",
    flexDirection:"row",
    width:"80%",
    justifyContent:"space-between",
    alignItems:"center",
  

},


  buttonInput:{
    textAlign: 'center',
    color: '#4C64FF',
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    width: 198,
    alignItems: 'center',
    },
    
  buttonContainer: {
    display:"flex",
    flexDirection:"row",
},
  buttonText: {
    textAlign: 'center',
    color: 'white',
}

});


function mapStateToProps(state) {
  return { listAdress: state.listAdress }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteAdress: function(item) {
        dispatch( {type: 'deleteAdress',item} )
    },

  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home);

