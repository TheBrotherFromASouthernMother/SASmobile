import React from 'react';
import { StyleSheet, View, Image, ScrollView, Button, Text } from 'react-native';
import Header from './Header.js';
import Banner from './banner.js';
import H1 from './h1.js';


export default class Voyage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { voyageData : ' '}
  }

  componentWillMount() {
    fetch('http://semesteratsea-api.herokuapp.com/api/voyages/10', {
      method: 'GET'
    }).then( response => {
       return response.json()
    }).then( (data) => {
      this.setState({voyageData: data.data})
      console.log(data.data);
    }).catch(err => {
      console.log(err, 'err')
    })
  }

  ComponentWillUnmount() {
    this.setState({voyageData: null})
  }

  render() {
    return(
      <ScrollView>
      <View>
      < Header style={{justifyContent: 'center',alignItems: 'flex-start',  height: 100, backgroundColor: '#0060B2'}}/>
      </View>

      <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
      <H1 content={`${capitalizeFirstLetter(this.state.voyageData.semester)} ${this.state.voyageData.year}: \n ${this.state.voyageData.tagline}`} />
      <Image source={{uri: `http://semesteratsea-api.herokuapp.com/${this.state.voyageData.header_photo_url}`}} style={{width: 300, height: 150, alignSelf: 'center'}} />
      <Text> If you ever speak to an SAS alum about what they loved most about the experience, they’ll all tell you it’s the community. Spend your semester making lifelong friendships and sharing a world of experiences together </Text>
      </View>

      </ScrollView>
    )
  }
}

function capitalizeFirstLetter(str) {
  if (str === undefined) {
    return null
  }
  let firstLetter = str[0].toUpperCase();
  let restofstring = str.slice(1);
  return firstLetter + restofstring;
}
