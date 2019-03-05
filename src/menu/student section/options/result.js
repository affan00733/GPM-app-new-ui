import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity ,WebView} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import MainScreen from '../../../../components/AppTabNavigator/result'
import { Block, Card, Icon, Label } from '../../../components';
import styles from '../../../styles/styles'
export default class Result extends React.Component {

  render() {
    return (
      // <AppStackNavigator />
      <WebView
          source={{ uri: 'http://www.gpmumbai.ac.in/Result.aspx' }}
          style={styles.web}

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


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
