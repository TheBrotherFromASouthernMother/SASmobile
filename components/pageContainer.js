import React from 'react';
import { ImageBackground, View, Text, ScrollView, Image } from 'react-native';
import H1 from './h1.js'


let lifeatsea = `Go to class while sailing the sea, watch the sunset over the Indian Ocean or stare up at the Mediterranean stars. Whether in class, studying, or engaging in shipboard activities, you’re always a few steps away from friends, the ocean and a global perspective.`;

let floatingCampus = `Our ship is the most unique floating campus in the world. The seven deck, 590-foot ship is where you learn, live, travel and reflect on your global, study abroad experience.`;

export default class PageContainer extends React.Component {
 render() {
   return(
    <View style={{flex: 3}}>
      <ImageBackground style={{width: 375, height: 400, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'flex-end'}} source={require('../images/worldOdyssey.jpg')}>
        <ScrollView style={{backgroundColor: 'rgba(255, 255, 255, 0.6)', width: 200}}>
        <InfoSection sectionTitle={'Life at Sea'} sectionContent={lifeatsea} imageSrc={require('../images/DSC_0745.jpg')} />

        <InfoSection sectionTitle = {'Our Floating Campus'} sectionContent={floatingCampus} imageSrc={require('../images/DSC_3657.jpg')} />
        </ScrollView>
      </ImageBackground>
     </View>
     )
  }
}


class InfoSection extends React.Component {
  render() {
    console.log(this.props.imageSrc)
    return(
    <View>
      <H1 content={this.props.sectionTitle} />
      <Text> {this.props.sectionContent} </Text>
      <Image source={this.props.imageSrc} style={{width: 150, height: 150, alignSelf: 'center'}}/>
    </View>
    )
  }
}
