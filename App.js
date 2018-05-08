import React from 'react';
import { StyleSheet, View, Image, ScrollView, Button, Text } from 'react-native';
import Banner from './components/banner.js';
import PageContainer from './components/pageContainer.js';
import Footer from './components/footer.js';
import { createStackNavigator } from 'react-navigation';
import Voyage from './components/voyage.js';
import VoyageCountDown from './components/voyageCountdown.js';
import Header from './components/Header.js';

class Nav extends React.Component {
  render() {
    return(
      <View style={{backgroundColor: 'rgba(255,255,255, 0.7)', borderColor: 'orange', height: 100, width: 50}}>
      </View>
    )
  }
}


class Home extends React.Component {

  render() {
    return (

    <View name='page' style={styles.page}>

      <Header style={styles.container} />
      <Banner style ={styles} children={ <VoyageCountDown />}/>
      <PageContainer children={<Nav />} />
      <Button
         title="Go to Details"
         onPress={() => this.props.navigation.navigate('Default')}
       />
      <Footer style={styles.footer} content= "CopyRight Semester At Sea 2018" />
    </View>

    );
  }
}


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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


class DefaultScreen extends React.Component {
  componentDidMount() {
    setTimeout( () => {
      this.props.navigation.navigate('Home')
    }, 3000)

  }
  render() {
    return (
      <View style={{backgroundColor: '#0060B2', flex: 1, justifyContent: 'center', alignItems:'center'}}>
      <Image source={require('./images/SAS-logo-linear-rev.jpg')} />
      </View>
    )
  }
}

const RootStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  Default: {
    screen: Voyage
  },
},
  {
    initialRouteName: 'Home',
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
