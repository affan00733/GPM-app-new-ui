import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import MainScreen from '../../../../components/AppTabNavigator/citiChar'
import { Block, Card, Icon, Label } from '../../../components';
import styles from '../../../styles/styles'
import Pdf from 'react-native-pdf';

export default class CitiChar extends React.Component {

  render() {
    console.log('Citizen char')    

    return (
      // <AppStackNavigator />
      <Pdf
      source={{ uri: `http://192.168.43.64/GPM/pdf_other/citizen.pdf` }}
      onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
      }}
      onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
      }}
      onError={(error) => {
          console.log(error);
      }}
      style={styles.pdf}
  />
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
