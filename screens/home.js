import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Button,Card, CardItem,Body} from 'native-base';

export default function Home(props) {

/** 
* @tesst 
* ! yop ojcqskn, 

*/

  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
      
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
