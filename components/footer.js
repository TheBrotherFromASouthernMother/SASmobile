import React from 'react';
import { Text, View } from 'react-native';


export default class Footer extends React.Component {
  render() {
    return (
      <View style={this.props.style}>
      <Text style={{color: '#FFFFFF', fontSize: 15}}> {this.props.content} </Text>
      </View>
    )
  }
}
