import React from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux'

const types = {
  INCREMENT: 'INCREMENT'
}

const reducer = (state, action) => {
  if (action.type === types.INCREMENT) {
    return {count: state.count + 1, text: state.text += action.text}
  }
  return state
}

const initialState = {count: 0}

const store = createStore(reducer, initialState);


export default class ListScreen extends React.Component {
  componentWillMount() {
    store.dispatch({type: types.INCREMENT, text: 'Rawr '});
    store.dispatch({type: types.INCREMENT, text: 'I am Gotham\'s recknoning'});
  }
  render() {
    return (
      <View>
      <Text> {'Count: ' + store.getState().count}, {store.getState().text}</Text>
      </View>
    )
  }
}
