import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import MainScreen from '../../../components/AppTabNavigator/concession'
// import { Block, Card, Icon, Label } from '../../../components';

export default class Concession extends React.Component {

  render() {
    console.log('Concession')

    return (
      <MainScreen
        name={this.props.name}
        email={this.props.email}
        enroll={this.props.enroll}

        year={this.props.year}
        dept={this.props.dept}
        shift={this.props.shift}
        mobile={this.props.mobile}
        address={this.props.address}
        gender={this.props.gender}
        dob={this.props.dob}

      />
    );
  }

}

const AppStackNavigator = createStackNavigator({

  Main: {
    screen: MainScreen
  }
}, {
    headerMode: 'none'
  })


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
