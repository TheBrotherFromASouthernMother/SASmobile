import React from 'react';
import { ImageBackground, View, Text } from 'react-native';


export default class PageContainer extends React.Component {
 render() {
   return(
    <View style={{flex: 3}}>
    <ImageBackground style={{width: 375, height: 400, backgroundColor: 'blue'}} source={require('../images/worldOdyssey.jpg')}>
    <View> {this.props.children},   <Text> This is the SAS mobile app </Text> </View>
    </ImageBackground>
     </View>
     )
  }
}
