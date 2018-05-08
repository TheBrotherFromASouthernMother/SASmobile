import React from 'react';
import { Text, View, ImageBackground} from 'react-native';

export default class Banner extends React.Component {

  render() {
    return(
      <View style ={{borderBottomWidth: 5, borderBottomColor: '#0060B2'}}>
      <ImageBackground source={require('../images/pageBanner.jpg')} style={{width: 375, height: 150, justifyContent: 'center', alignItems: 'center'}} >
      {this.props.children}
      </ImageBackground >
      </View>
    )
  }
}
