import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Gallery from 'react-native-image-gallery';

import { Block, Card, Icon, Label } from '../src/components';
import { Overlay, Button } from 'react-native-elements'
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
// import GalleryClick from './options/galleryClick'
export default class GalleryMain extends React.Component {
  static navigationOptions = {
   
    headerTitle: (
      <Block row middle><Text h4>Gallery</Text></Block>
    )
  }
  constructor(props) {
    super(props)
    this.state = {
      isVisibleGallery1: false,
      isVisibleGallery2: false,
      isVisibleGallery3: false,
      isVisibleGallery4: false,
      isVisibleGallery5: false,
      isVisibleGallery6: false,
      isVisibleGallery7: false,
      isVisibleGallery8: false,

    }
  }

  render() {
    return (
      <View>
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
        //   { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },

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
        //   { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },


        ]}
      />
        </Overlay>



        <Overlay
          isVisible={this.state.isVisibleGallery3}
          onBackdropPress={() => this.setState({ isVisibleGallery3: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          {/* <GalleryClick /> */}
          <Gallery
        style={{ flex: 1, backgroundColor: 'black' }}
        images={[
        //   { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },

        ]}
      />
        </Overlay>
        <Overlay
          isVisible={this.state.isVisibleGallery4}
          onBackdropPress={() => this.setState({ isVisibleGallery4: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          {/* <GalleryClick /> */}
          <Gallery
        style={{ flex: 1, backgroundColor: 'black' }}
        images={[
        //   { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          

        ]}
      />
        </Overlay>
        <Overlay
          isVisible={this.state.isVisibleGallery5}
          onBackdropPress={() => this.setState({ isVisibleGallery5: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          {/* <GalleryClick /> */}
          <Gallery
        style={{ flex: 1, backgroundColor: 'black' }}
        images={[
        //   { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
         

        ]}
      />
        </Overlay>
        <Overlay
          isVisible={this.state.isVisibleGallery6}
          onBackdropPress={() => this.setState({ isVisibleGallery6: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          {/* <GalleryClick /> */}
          <Gallery
        style={{ flex: 1, backgroundColor: 'black' }}
        images={[
        //   { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },

        ]}
      />
        </Overlay>

        <Overlay
          isVisible={this.state.isVisibleGallery7}
          onBackdropPress={() => this.setState({ isVisibleGallery7: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          {/* <GalleryClick /> */}
          <Gallery
        style={{ flex: 1, backgroundColor: 'black' }}
        images={[
        //   { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },

        ]}
      />
        </Overlay>

        <Overlay
          isVisible={this.state.isVisibleGallery8}
          onBackdropPress={() => this.setState({ isVisibleGallery8: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          {/* <GalleryClick /> */}
          <Gallery
        style={{ flex: 1, backgroundColor: 'black' }}
        images={[
        //   { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },
          { source: { uri: 'http://192.168.0.104/GPM/images/XP2BE7q.jpg' } },

        ]}
      />
        </Overlay>
        <View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="NSS Event of Arnala Beach Cleaning on 18 Feb 2018"
              type="outline"
              onPress={() => this.setState({ isVisibleGallery1: true })}
            />
          </View>
          
          
        </View>
       



        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="First year Orientation Programme 2017-18"
              type="outline"
              onPress={() => this.setState({ isVisibleGallery2: true })}
            />
          </View>
          
          
        </View>






        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Empowerment of Women in Technical Education"
              type="outline"
              onPress={() => this.setState({ isVisibleGallery3: true })}
            />
          </View>
          
          
        </View>


{/* ISTE CHAPTER ON DIGITAL PROCESSING */}
     



        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="ISTE Chapter on Digital Signal Processsing"
              type="outline"
              onPress={() => this.setState({ isVisibleGallery4: true })}
            />
          </View>
          
          
        </View>



{/* MSBTE Program on Advance in Library Management  */}





        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="MSBTE Program on Advance in Library Management"
              type="outline"
              onPress={() => this.setState({ isVisibleGallery5: true })}
            />
          </View>
          
          
        </View>

{/* Kalpak 2014 */}




        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Kalpak 2014"
              type="outline"
              onPress={() => this.setState({ isVisibleGallery6: true })}
            />
          </View>
          
          
        </View>

{/* MSBTE TPP */}



        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="MSBTE TPP"
              type="outline"
              onPress={() => this.setState({ isVisibleGallery7: true })}
            />
          </View>
          
          
        </View>

{/* NCEOTA */}




        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="NCEOTA"
              type="outline"
              onPress={() => this.setState({ isVisibleGallery8: true })}
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
