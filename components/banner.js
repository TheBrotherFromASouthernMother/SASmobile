import React from 'react';
import { Text, View, ImageBackground} from 'react-native';


export default class Banner extends React.Component {
  render() {
    return(
      <View style ={{borderBottomWidth: 10, borderBottomColor: '#0060B2'}}>
      <ImageBackground source={{ uri: 'http://localhost:5000/api/voyages/world'}} style={{width: 375, height: 150, justifyContent: 'center', alignItems: 'center'}} >
      <Text style={this.props.style}> {this.props.text} </Text>
      </ImageBackground >
      </View>
    )
  }
}
