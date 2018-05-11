import React from 'react';
import { Image, View } from 'react-native';


export default class Header extends React.Component {
  render() {
    return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 100,
        backgroundColor: '#0060B2',
      }}>
      <Image source={require('../images/SAS-logo-linear-rev.jpg')} style={{height: 40, width: 300, marginLeft: 10}}/>
      </View>
    )
  }
}
