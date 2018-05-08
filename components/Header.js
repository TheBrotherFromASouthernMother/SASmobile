import React from 'react';
import { Image, View } from 'react-native';


export default class Header extends React.Component {
  render() {
    return (
      <View style={this.props.style}>
      <Image source={require('../images/SAS-logo-linear-rev.jpg')} style={{height: 40, width: 300}}/>
      </View>
    )
  }
}
