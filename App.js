import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Banner from './components/banner.js';
import PageContainer from './components/pageContainer.js';
import Footer from './components/footer.js';



export default class App extends React.Component {

  render() {
    let date = new Date();
    console.log(date)
    return (
    <View name='page' style={styles.page}>
      <View style={styles.container}>

      </View>

      <Banner style ={styles.title} text={'Welcome to Semester at Seas'}/>

      <PageContainer />

      <Footer style={styles.footer} content= "CopyRight Semester At Sea 2018" />


    </View>

    );
  }
}


const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  container: {
    flex: 1,
    backgroundColor: '#0060B2',
  },
  title: {
    fontSize:25,
    color: '#FFFFFF'
  },
  footer: {
    backgroundColor: '#0060B2',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
