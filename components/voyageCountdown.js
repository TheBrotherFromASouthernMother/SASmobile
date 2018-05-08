import React from 'react';
import { Text } from 'react-native';

let countDownDate = new Date("Sep 9, 2018 15:37:25").getTime();

export default class VoyageCountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nextVoyage: countDownDate}
    setInterval( () => {
      let now = new Date().getTime();
      let timeTillNextVoyage = countDownDate - now;
      let days = Math.floor(timeTillNextVoyage / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeTillNextVoyage  % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeTillNextVoyage  % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeTillNextVoyage  % (1000 * 60)) / 1000);
      let timer = `Time till next voyage: \n ${days}d ${hours}h ${minutes}m ${seconds}s`
      this.setState( (prevState, props) => { return { nextVoyage: timer} })
    }, 1000)
  }
  render() {
    return (
      <Text style={{fontSize:25,color: '#FFFFFF',textAlign: 'center'}}> {this.state.nextVoyage} </Text>
    )
  }
}
