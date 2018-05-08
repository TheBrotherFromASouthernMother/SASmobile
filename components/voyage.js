import React from 'react';
import { StyleSheet, View, Image, ScrollView, Button, Text } from 'react-native';
import Header from './Header.js';
import Banner from './banner.js';


export default class Voyage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { voyageData : ' '}
  }

  componentDidMount() {
    fetch('http://semesteratsea-api.herokuapp.com/api/voyages/10', {
      method: 'GET'
    }).then( response => {
       return response.json()
    }).then( (data) => {
      console.log(data.data.tagline);
      this.setState({voyageData: data.data})
    }).catch(err => {
      console.log(err, 'err')
    })
  }

  render() {
    return(
      <ScrollView>
      <View>
      < Header style={{justifyContent: 'center',alignItems: 'flex-start',  height: 100, backgroundColor: '#0060B2'}}/>
      </View>
      <Text> {this.state.voyageData.tagline} </Text>
      </ScrollView>
    )
  }
}
