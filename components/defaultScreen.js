import React from 'react';
import { View, Image, Button} from 'react-native';

export default class DefaultScreen extends React.Component {
  componentDidMount() {
    setTimeout( () => {
      this.props.navigation.navigate('Home')
    }, 10000)

  }
  render() {
    return (
      <View style={{backgroundColor: '#0060B2', flex: 1, justifyContent: 'center', alignItems:'center'}}>
      <Image source={require('../images/SAS-logo-linear-rev.jpg')} />
      <Button
         title="Go to Home"
         onPress={() => this.props.navigation.navigate('Home')}
         style={{color: 'white'}}
       />
      </View>
    )
  }
}
