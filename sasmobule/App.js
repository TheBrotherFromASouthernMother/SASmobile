import React from 'react';
import { StyleSheet, View } from 'react-native';
import Banner from '/components/banner.js';
import PageContainer from './components/pageContainer.js'



export default class App extends React.Component {
  // state = { voyage: 'Null' }
  // componentDidMount() {
  //   fetch('http://semesteratsea-api.herokuapp.com/api/voyages/8')
  //      .then(res => res.json())
  //      .then(res => {
  //        console.log(res)
  //        this.setState( {voyage: JSON.stringify(res.data)}
  //      )});
  //
  // }
  render() {
    return (
    <View name='page'>
      <View style={styles.container}>
      </View>

      <Banner style ={styles.title} text={'Welcome to Semester at Seas'}/>

      <PageContainer />

    </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#0060B2',
  },
  title: {
    fontSize:25,
    color: '#FFFFFF'
  }
});
