import React from 'react';
import { ImageBackground, View, Text } from 'react-native';


export default class PageContainer extends React.Component {
 render() {
   return(
    <View style={{height: 400, width: 400, opacity: 0.8}}>
    <ImageBackground style={{width: 375, height: 300, backgroundColor: 'blue'}} source={{uri: 'http://localhost:5000/api/voyages/container'}}>
    <Text> This is the SAS mobile app </Text>
    </ImageBackground>
     </View>
     )
  }
}
