import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import MainScreen from '../../../components/AppTabNavigator/feedbck'
// import { Block, Card, Icon, Label } from '../../../components';
// import propTypes from 'prop-types'
export default class Feedback extends React.Component {
constructor(props){
  super(props)
}


  render() {
    console.log('Feedback')    

    return (
      
      <MainScreen  name={this.props.name} email={this.props.email} enroll={this.props.enroll}   />
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
// Feedback.propTypes = {
//   message: PropTypes.string
// }
// Feedback.defaultProps = {
//   message: 'Heading One'
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
