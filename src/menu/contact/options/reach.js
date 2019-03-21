import React, {Component} from 'react';
import {View, Image,PermissionsAndroid} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken('pk.eyJ1IjoiYWZmYW4wMDciLCJhIjoiY2p0Z2xoajRiMGxrazQ2bGh4OG96cmQ3eiJ9.v9_zpb5p-9fYOXUm-LKcPw');
// Mapbox.setAccessToken('')

const coordinates = [
  [72.84517819,19.06257977]  
]

export default class App extends Component {
  constructor (props) {
    super(props);
  
    this.state = {
      coordinates: coordinates
    };
  }
  componentDidMount() 
    {
     PermissionsAndroid.requestMultiple(
                [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
                {
                    title: 'Give Location Permission',
                message: 'App needs location permission to find your position.'
            }
        ).then(granted => {
            console.log(granted);
            resolve();
        }).catch(err => {
            console.warn(err);
            reject(err);
        });
    }
  renderAnnotation (counter) {
    const id = `pointAnnotation${counter}`;
    const coordinate = this.state.coordinates[counter];
    const title = `Longitude: ${this.state.coordinates[counter][0]} Latitude: ${this.state.coordinates[counter][1]}`;

    return (
      <MapboxGL.PointAnnotation
        key={id}
        id={id}
        title='Government Polytechnic Mumbai'
        coordinate={coordinate}>

        <Image
        source={require('./marker.png')}
        style={{
          flex: 1,
          resizeMode: 'contain',
          width: 35,
          height: 35
          }}/>
      </MapboxGL.PointAnnotation>
    );
  }

  renderAnnotations () {
    const items = [];

    for (let i = 0; i < this.state.coordinates.length; i++) {
      items.push(this.renderAnnotation(i));
    }

    return items;
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <MapboxGL.MapView
        ref={(c) => this._map = c}
        style={{flex: 1}}
        zoomLevel={17}
        showUserLocation={true}
        userTrackingMode={1}
        centerCoordinate={this.state.coordinates[0]}>
          {this.renderAnnotations()}
        </MapboxGL.MapView>
      </View>
      );
  }
}