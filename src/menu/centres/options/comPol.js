import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import MainScreen from '../../../../components/AppTabNavigator/comPol'
import { Block, Card, Icon, Label } from '../../../components';
import Pdf from 'react-native-pdf';
import styles from '../../../styles/styles'
export default class ComPol extends React.Component {

  render() {
    return (
      // <AppStackNavigator />
      <Pdf
      source={{ uri: `http://192.168.43.64/GPM/pdf_other/comPol.pdf` }}
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

