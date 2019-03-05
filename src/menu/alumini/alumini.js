
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Gallery from 'react-native-image-gallery';

import { Block, Card, Icon, Label } from '../../components';
import { Overlay, Button } from 'react-native-elements'
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
// import GalleryClick from './options/galleryClick'
export default class Alumini extends React.Component {
  static navigationOptions = {
   
    headerTitle: (
      <Block row middle><Text h4>Alumini</Text></Block>
    )
  }
  constructor(props) {
    super(props)
    this.state = {
      isVisibleGallery1: false,
      isVisibleGallery2: false,

    }
  }

  render() {
    return (
      <View>
          {/* Alumni Meet 2014 */}
        <Overlay
          isVisible={this.state.isVisibleGallery1}
          onBackdropPress={() => this.setState({ isVisibleGallery1: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          {/* <GalleryClick /> */}

          <Gallery
        style={{ flex: 1, backgroundColor: 'black' }}
        images={[
          // { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI14_1.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI14_2.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI14_3.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI14_4.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI14_5.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI14_6.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI14_7.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI14_8.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI14_9.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI14_10.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI14_11.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI14_12.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI14_13.jpg' } },

        ]}
      />
        </Overlay>
        <Overlay
          isVisible={this.state.isVisibleGallery2}
          onBackdropPress={() => this.setState({ isVisibleGallery2: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          {/* <GalleryClick /> */}
          <Gallery
        style={{ flex: 1, backgroundColor: 'black' }}
        images={[
          // { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI15_1.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI15_2.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI15_3.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI15_4.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI15_5.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI15_6.jpg' } },
          { source: { uri: 'http://192.168.43.64/GPM/images/ALUMNI15_7.jpg' } },
         

        ]}
      />
        </Overlay>

        <View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Alumni Meet 2014"
              type="outline"
              onPress={() => this.setState({ isVisibleGallery1: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Alumni Meet 2015"
              type="outline"
              onPress={() => this.setState({ isVisibleGallery2: true })}
            />
          </View>
          
        </View>





        {/* Alumni Meet 2015 */}
        



        <View style={{ flexDirection: 'row' }}
        >
         
          
          
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
