import React from 'react';
import { Text } from 'react-native';

export default class H1 extends React.Component {
  render() {
    return(
      <Text style={{fontSize: 20, color: '#0060B2'}}> {this.props.content} </Text>
    )
  }
}
