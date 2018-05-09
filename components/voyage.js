import React from 'react';
import { StyleSheet, View, Image, ScrollView, Button, Text } from 'react-native';
import Header from './Header.js';
import Banner from './banner.js';
import H1 from './h1.js';
import { MapView } from 'expo';
const { Marker } = MapView

// {key: '5', coordinate: {latitude: 9.9312, longitude: 76.2673}, title: 'port of Kochi'}

export default class Voyage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { voyageData : ' ',
                   markers: []
    }
  }

  componentWillMount() {
    fetch('http://semesteratsea-api.herokuapp.com/api/voyages/spring&2016', {
      method: 'GET'
    }).then( response => {
       return response.json()
    }).then( (data) => {
      let i = 0
      this.setState({voyageData: data.data})
      data.data.forEach( (object) => {
        if (i > 0) {
          console.log(this.state.markers[5])
        }
        this.setState( prevState => {
          prevState.markers.push({key: i, coordinate: {latitude: Number(object.latitude) ,longitude: Number(object.longitude)}, title: `port of ${object.city}`});
        })
        i ++;
      })
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
      <H1 content={`${capitalizeFirstLetter(this.state.voyageData[0].semester)} ${this.state.voyageData[0].year}: \n ${this.state.voyageData[0].tagline}`} />
      <Image source={{uri: `http://semesteratsea-api.herokuapp.com/${this.state.voyageData[0].header_photo_url}`}} style={{width: 300, height: 150, alignSelf: 'center'}} />
      <Text> If you ever speak to an SAS alum about what they loved most about the experience, they’ll all tell you it’s the community. Spend your semester making lifelong friendships and sharing a world of experiences together </Text>
      <MapView
       style={{ width: 300, height: 300 }}
       initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 120.0022,
         longitudeDelta: 90.0421,
       }}>

       {this.state.markers.map(marker => {
         console.log(marker)
         return(
         <Marker
         key = {marker.key}
         coordinate={marker.coordinate}
         title={marker.title}
         />
       )})}

     </MapView >
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
