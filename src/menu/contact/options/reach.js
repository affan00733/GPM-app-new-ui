import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import MainScreen from '../../../../components/AppTabNavigator/reach'
import { Block, Card, Icon, Label } from '../../../components';
import Mapbox from '@mapbox/react-native-mapbox-gl'
Mapbox.setAccessToken('pk.eyJ1IjoiYWZmYW4wMDciLCJhIjoiY2p0Z2xoajRiMGxrazQ2bGh4OG96cmQ3eiJ9.v9_zpb5p-9fYOXUm-LKcPw')
export default class Reach extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error:null,
    };
  }

  
  render() {
    return (
      // <AppStackNavigator />
      <View       style={{flex : 1}}
      >
      <Mapbox.MapView  
      zoomLevel={15}
      centerCoordinate={[11.256,43.77]}
      style={{flex : 1}}
      />
    </View>
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})