import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStore } from 'redux';
import Header from './Header.js';
import Banner from './banner.js';
import H1 from './h1.js'


export default class ListScreen extends React.Component {
  static navigationOptions = {
   title: 'Voyages',
   headerStyle: {
     backgroundColor: '#fff',
     height: 30
   }
 }

  render() {
    return (
      <View>
      <Header />
      <Banner children={<Text style={{fontSize:25, color: '#FFFFFF', textAlign: 'center'}}>Come home with a global perspective. </Text>}/>
      <View style={{alignItems: 'center', justifyContent: 'space-between'}} >
      <H1 content={'Explore Voyages'} />
      <Button
      title="Fall 2017: A Voyage Around the World"
      onPress={() => this.props.navigation.navigate('Voyage', {semester: 'fall', year: '2017'})}
      />
      <Button
      title="Spring 2016: A Voyage Around the World"
      onPress={() => this.props.navigation.navigate('Voyage', {semester: 'spring', year: '2016'})}
      />
      <Button
      title="Fall 2015: Atlantic & Carribean Exploration"
      onPress={() => this.props.navigation.navigate('Voyage', {semester: 'fall', year: '2015'})}
      />
      </View>
      </View>
    )
  }
}
