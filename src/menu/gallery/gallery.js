
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Gallery from 'react-native-image-gallery';

import { Block, Card, Icon, Label } from '../../components';
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
      isVisibleGalleryTechNex: false,
      isVisibleGalleryFDBIT: false,
      isVisibleGalleryTechkriti: false,
      isVisibleGalleryKalpak: false


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
              { source: { uri: 'http://192.168.43.64/GPM/images/NSS 18 FEB 2018.jpg' } },
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
              { source: { uri: 'http://192.168.43.64/GPM/images/fyadmin.jpg' } },


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
              { source: { uri: 'http://192.168.43.64/GPM/images/NSS 18 FEB 2018.jpg' } },


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
              { source: { uri: 'http://192.168.43.64/GPM/images/fyadmin.jpg' } },



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
              { source: { uri: 'http://192.168.43.64/GPM/images/ISTE' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/WEC_2.jpg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/WEC_3.jpg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/WEC_4.jpg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/WEC_5.jpg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/WEC_6.jpg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/WEC_7.jpg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/WEC_8.jpg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/WEC_9.jpg' } },


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
              { source: { uri: 'http://192.168.43.64/GPM/images/ISTE_1.png' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/ISTE_2.jpeg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/ISTE_3.jpeg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/ISTE_4.jpeg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/ISTE_5.jpeg' } },


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
              { source: { uri: 'http://192.168.43.64/GPM/images/ALM_1.png' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/ALM_2.jpeg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/ALM_3.jpeg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/ALM_4.jpeg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/ALM_5.jpeg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/ALM_6.jpeg' } },

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
              { source: { uri: 'http://192.168.43.64/GPM/images/TPP_1.png' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/TPP_2.jpeg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/TPP_3.jpeg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/TPP_4jpeg' } },

              { source: { uri: 'http://192.168.43.64/GPM/images/NCEOTA_1.png' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/NCEOTA_2.jpeg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/NCEOTA_3.jpeg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/NCEOTA_4.jpeg' } },



            ]}
          />
        </Overlay>


        {/* ------------------------- */}

        <Overlay
          isVisible={this.state.isVisibleGalleryTechNex}
          onBackdropPress={() => this.setState({ isVisibleGalleryTechNex: false })}
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
              { source: { uri: 'http://192.168.43.64/GPM/images/technex/1.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/technex/2.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/technex/3.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/technex/4.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/technex/5.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/technex/7.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/technex/6.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/technex/8.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/technex/9.JPG' } },


            ]}
          />
        </Overlay>

        {/*  */}

        <Overlay
          isVisible={this.state.isVisibleGalleryFDBIT}
          onBackdropPress={() => this.setState({ isVisibleGalleryFDBIT: false })}
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
              { source: { uri: 'http://192.168.43.64/GPM/images/fdpit/1.jpeg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/fdpit/2.jpeg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/fdpit/3.jpeg' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/fdpit/4.jpeg' } },


            ]}
          />
        </Overlay>

        {/*  */}

        <Overlay
          isVisible={this.state.isVisibleGalleryTechkriti}
          onBackdropPress={() => this.setState({ isVisibleGalleryTechkriti: false })}
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
              { source: { uri: 'http://192.168.43.64/GPM/images/techkriti/1.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/techkriti/2.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/techkriti/3.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/techkriti/4.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/techkriti/5.JPG' } },


            ]}
          />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleGalleryKalpak}
          onBackdropPress={() => this.setState({ isVisibleGalleryKalpak: false })}
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
              { source: { uri: 'http://192.168.43.64/GPM/images/kalpak/1.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/kalpak/2.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/kalpak/3.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/kalpak/4.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/kalpak/5.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/kalpak/7.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/kalpak/6.JPG' } },
              { source: { uri: 'http://192.168.43.64/GPM/images/kalpak/8.JPG' } },


            ]}
          />
        </Overlay>

        <View>
          <View style={{ flexDirection: 'row' }}
          >
            <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
              <Button
                title="TechNex 2k19"
                type="outline"
                onPress={() => this.setState({ isVisibleGalleryTechNex: true })}
              />
            </View>
            <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
              <Button
                title="Big Data & Hadoop FDP"
                type="outline"
                onPress={() => this.setState({ isVisibleGalleryFDBIT: true })}
              />
            </View>

          </View>
          <View style={{ flexDirection: 'row' }}
          >
            <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
              <Button
                title="TechKriti 2k18"
                type="outline"
                onPress={() => this.setState({ isVisibleGalleryTechkriti: true })}
              />
            </View>
            <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
              <Button
                title="Kalpak 2k19"
                type="outline"
                onPress={() => this.setState({ isVisibleGalleryKalpak: true })}
              />
            </View>

          </View>
          <View style={{ flexDirection: 'row' }}
          >
            <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
              <Button
                title="NSS Event of Arnala Beach Cleaning on 18 Feb 2018"
                type="outline"
                onPress={() => this.setState({ isVisibleGallery1: true })}
              />
            </View>
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
            <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
              <Button
                title="ISTE Chapter on Digital Signal Processsing"
                type="outline"
                onPress={() => this.setState({ isVisibleGallery4: true })}
              />
            </View>


          </View>


          {/* ISTE CHAPTER ON DIGITAL PROCESSING */}




          <View style={{ flexDirection: 'row' }}
          >

            <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
              <Button
                title="MSBTE Program on Advance in Library Management"
                type="outline"
                onPress={() => this.setState({ isVisibleGallery5: true })}
              />
            </View>
            <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
              <Button
                title="Kalpak 2014"
                type="outline"
                onPress={() => this.setState({ isVisibleGallery6: true })}
              />
            </View>
          </View>



          {/* MSBTE Program on Advance in Library Management  */}





          <View style={{ flexDirection: 'row' }}
          >
            <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
              <Button
                title="MSBTE TPP"
                type="outline"
                onPress={() => this.setState({ isVisibleGallery7: true })}
              />
            </View>
            <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
              <Button
                title="NCEOTA"
                type="outline"
                onPress={() => this.setState({ isVisibleGallery8: true })}
              />
            </View>


          </View>

          {/* Kalpak 2014 */}





          {/* MSBTE TPP */}





          {/* NCEOTA */}












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
