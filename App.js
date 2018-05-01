import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = { voyage: 'Null' }
  componentDidMount() {
    fetch('http://semesteratsea-api.herokuapp.com/api/voyages/8')
       .then(res => res.json())
       .then(res => {
         console.log(res)
         this.setState( {voyage: JSON.stringify(res.data)}
       )});

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 15, color: '#fff'}}> {this.state.voyage}</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(15, 188, 199)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
