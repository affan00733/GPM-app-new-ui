import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import MainScreen from '../../../components/AppTabNavigator/feedbck'
// import { Block, Card, Icon, Label } from '../../../components';

export default class Feedback extends React.Component {

  render() {
    console.log('Feedback')    

    return (
      <AppStackNavigator />
    );
  }

}

const AppStackNavigator = createStackNavigator({

  Main: {
    screen: MainScreen
  }
},{
  headerMode : 'none'
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});