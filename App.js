import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import Banner from './components/banner.js';
import PageContainer from './components/pageContainer.js';
import Footer from './components/footer.js';

class Nav extends React.Component {
  render() {
    return(
      <View style={{backgroundColor: '#fff', borderColor: 'orange', height: 100, width: 50}}>
      </View>
    )
  }
}


export default class App extends React.Component {

  render() {
    return (

    <View name='page' style={styles.page}>
      <View style={styles.container}>
      <Image source={require('./images/SAS-logo-linear-rev.jpg')} style={{height: 40, width: 300}}/>
      </View>

      <Banner style ={styles} />

      <PageContainer children={<Nav />} />
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
