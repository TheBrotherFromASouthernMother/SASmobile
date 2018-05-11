import React from 'react';
import { StyleSheet, View, Image, ScrollView, Button, Text } from 'react-native';
import { createStore } from 'redux';
import Header from './Header.js';
import Banner from './banner.js';
import H1 from './h1.js';
import { MapView } from 'expo';
const { Marker } = MapView;

const types = {
 SET_VOYAGE_DATA: 'SET_VOYAGE_DATA',
SET_MAP_MARKERS: 'SET_MAP_MARKERS'
}


const reducer = (state, action) => {
  if (action.type === types.SET_VOYAGE_DATA) {
    return {voyageData: action.voyageData}
  } else if (action.type === types.SET_MAP_MARKERS) {
    return { markers: state.markers.concat(action.data)}
  }
  return state;
}
const initialState = {voyageData: [], markers: [], red: 'blue'}

const store = createStore(reducer, initialState);



export default class Voyage extends React.Component {
  static navigationOptions = {
   title: 'Voyage',
   headerStyle: {
     backgroundColor: '#fff',
     height: 30
   }
 }


  constructor(props) {
    super(props);

    this.state = { voyageData : ' ',
                   markers: []
    }
    console.log(this.props.navigation.getParam('semester', 'spring'))
    console.log(this.props.navigation.getParam('year', '2016'))
  }

  componentDidMount() {
    let semester = this.props.navigation.getParam('semester', 'spring');
    let year = this.props.navigation.getParam('year', '2016');
    fetch(`http://semesteratsea-api.herokuapp.com/api/voyages/${semester}&${year}`, {
      method: 'GET'
    }).then( response => {
       return response.json()
    }).then( (data) => {
      store.dispatch({type: types.SET_VOYAGE_DATA, voyageData: data.data});
      this.setState( prevState =>  {return {voyageData: store.getState().voyageData} })
      console.log(this.state.voyageData[0].header_photo_url)
      let i = 0
      this.state.voyageData.forEach( (object) => {
        this.setState( prevState => {
          return { markers:
          prevState.markers.concat({key: i, coordinate: {latitude: Number(object.latitude) ,longitude: Number(object.longitude)}, title: `port of ${object.city}`})
        }})
        i++;
      })
    }).catch(err => {
      console.log(err, 'err')
    })


  }

  componentWillUnmount() {
    this.setState({voyageData: " ", markers: " "})
  }


  render() {
    return(
      <ScrollView>
      <View>
      < Header style={{justifyContent: 'center', alignItems: 'flex-start',  height: 100, backgroundColor: '#0060B2'}}/>
      </View>

      <View style={{flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center', padding: 5}}>
    <H1 content={`${capitalizeFirstLetter(this.state.voyageData[0].semester)} ${this.state.voyageData[0].year}: \n ${this.state.voyageData[0].tagline}`} />

    <Image source={{uri: `http://semesteratsea-api.herokuapp.com/${this.state.voyageData[0].header_photo_url}`}} style={{width: 300, height: 150, alignSelf: 'center'}} />

      <Text>Visiting Europe, Africa, Asia, and North America, this voyage gives participants a truly global comparative experience as the ship explores various cultures around the world. </Text>

      <H1 content={'Explore this voyage\'s ports of call'}/>

      <MapView
       style={{ width: 365, height: 300 }}
       initialRegion={{
         latitude: 9.9312,
         longitude: 76.2673,
         latitudeDelta: 150.0022,
         longitudeDelta: 150.0421,
       }}>

       {this.state.markers.map(marker => {
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
