import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Modal, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';
import styles from '../../styles/styles'
import { Block, Card, Icon, Label } from '../../components';
import { Overlay, Button } from 'react-native-elements'
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import GalleryClick from './options/galleryClick'
import Gallery from 'react-native-image-gallery';

export default class GalleryMain extends React.Component {
  static navigationOptions = {
   
    headerTitle: (
      <Block row middle><Text h4>Gallery</Text></Block>
    )
  }
  constructor(props) {
    super(props)
    this.state = {
      isVisibleGalleryClick: false,
      source : '',

    

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
          // fullScreen={true}
   
 >
         <Gallery
        style={{ flex: 1, backgroundColor: 'black' }}
        images={[
          // { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
          { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
          { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
          { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
          { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
        ]}
      />
          {/* <GalleryClick /> */}
         
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


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
