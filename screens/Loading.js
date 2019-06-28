import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import firebase from '../config/fbConfig';


export default class Loading extends React.Component {
  static navigationOptions = {
    title: "Loading",
    header: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((authenticate) => {
      if (authenticate) {
        this.props.navigation.replace('Browse')
      } else {
        this.props.navigation.replace('Welcome')
      }
    })
  }


  
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})