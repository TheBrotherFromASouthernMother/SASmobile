import React from 'react';
import { StyleSheet, View, Image, ScrollView, Button, Text } from 'react-native';
import Header from './Header.js';
import Banner from './banner.js';


export default class Voyage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { voyageData : null}
  }

  componentDidMount() {
    fetch('http://semesteratsea-api.herokuapp.com/api/voyages/10', {
      method: 'GET'
    }).then( response => {
       return response.json()
    }).then( (data) => {
      console.log(data);
      console.log(this)
    }).catch(err => {
      console.log(err, 'err')
    })
  }
  render() {
    return(
      <View>
      < Header style={{justifyContent: 'center',alignItems: 'flex-start',  height: 100, backgroundColor: '#0060B2'}}/>
        <Banner />
      </View>
    )
  }
}
