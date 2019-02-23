import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import MainScreen from '../../../components/AppTabNavigator/HomeTab'
import { Block, Card, Icon, Label } from '../../components';
import { Overlay, Button } from 'react-native-elements'
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import GalleryClick from './options/galleryClick'
export default class Gallery extends React.Component {
  static navigationOptions = {
   
    headerTitle: (
      <Block row middle><Text h4>Gallery</Text></Block>
    )
  }
  constructor(props) {
    super(props)
    this.state = {
      isVisibleGalleryClick: false
    }
  }

  render() {
    return (
      <View>
        <Overlay
          isVisible={this.state.isVisibleGalleryClick}
          onBackdropPress={() => this.setState({ isVisibleGalleryClick: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <GalleryClick />
        </Overlay>
        <View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Gallery"
              type="outline"
              onPress={() => this.setState({ isVisibleGalleryClick: true })}
            />
          </View>
          
          
        </View>
 </View>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
