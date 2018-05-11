import React from 'react';
import { StyleSheet, View, Image, ScrollView, Button, Text, StatusBar } from 'react-native';
import Banner from './components/banner.js';
import PageContainer from './components/pageContainer.js';
import Footer from './components/footer.js';
import { createStackNavigator } from 'react-navigation';
import Voyage from './components/voyage.js';
import VoyageCountDown from './components/voyageCountdown.js';
import Header from './components/Header.js';
import DefaultScreen from './components/defaultScreen.js';
import ListScreen from './components/voyageList.js';

class Nav extends React.Component {
  render() {
    return(
      <View style={{backgroundColor: 'rgba(255,255,255, 0.7)', borderColor: 'orange', height: 100, width: 50}}>
      </View>
    )
  }
}

//Home screen

class Home extends React.Component {
  static navigationOptions = {
   title: 'Home',
   headerStyle: {
     backgroundColor: '#fff',
     height: 30
   }
 }
  render() {
    return (
    <ScrollView name='page' style={styles.page}>
      <Header style={styles.container} />
      <Banner style ={styles} children={ <VoyageCountDown />}/>
      <PageContainer children={  <Button
           title="Go to Details"
           onPress={() => this.props.navigation.navigate('listScreen')}
         />} />
      <Footer style={styles.footer} content= "CopyRight Semester At Sea 2018" />
    </ScrollView>
    );
  }
}

//Navigation
const RootStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  Default: {
    screen: DefaultScreen
  },
  Voyage: {
    screen: Voyage
  },
  listScreen: {
    screen: ListScreen
  }
},
  {
    initialRouteName: 'Default',
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

//styles
const styles = StyleSheet.create({
  page: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 100,
    backgroundColor: '#0060B2',
  },
  banner: {
    borderBottomWidth: 5,
     borderBottomColor: '#0060B2'},
  title: {
    fontSize:25,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  footer: {
    backgroundColor: '#0060B2',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
