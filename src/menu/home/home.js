import React, { Component } from 'react';
import {
    TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet,
    View,
    // Text,
    Alert,
    TextInput,
    Platform,
    StatusBar,
    // ScrollView,
    // Image,
    Dimensions,
    Animated,
} from 'react-native';
import { Overlay } from 'react-native-elements'
import Gallery from 'react-native-image-gallery';

import Curriclum from '../student section/options/curr'
import AcadCal from '../student section/options/acadCal'
import ClassTT from '../student section/options/classTT'
import QuestPaper from '../student section/options/questPaper'
import Result from '../student section/options/result'
import PlacSer from '../centres/options/placSer'

import { Block, Card, Text, Icon, Label } from '../../components';
import * as theme from '../../constants/theme'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Category from './components/Explore/Category'
import HomeNew from './components/Explore/Home'
import Tag from './components/Explore/Tag'
const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    overview: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: theme.colors.white,
        marginBottom: 31,
        paddingBottom: 31
    },
    margin: {
        marginHorizontal: 25,
    },
    driver: {
        marginBottom: 11,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    }
});

class Home extends Component {
    static navigationOptions = {

        headerTitle: (
            <Block row middle><Text h4>Home</Text></Block>
        ),

    }
    constructor(props) {
        super(props)

        this.state = {
            isVissibleGallery: false,
            isVissibleresult: false,
            isVissibleClassTT: false,
            isVissibleCalender: false,
            isVissiblePlace: false,
            isVissibleQuestPaper: false,
            isVisibleGalleryTechNex: false,
            isVisibleGalleryFDBIT: false,
            isVisibleGalleryTechkriti: false,
            isVisibleGalleryKalpak: false


        }
    }

    componentWillMount() {

        this.scrollY = new Animated.Value(0)

        this.startHeaderHeight = 80
        this.endHeaderHeight = 50
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
            this.endHeaderHeight = 70 + StatusBar.currentHeight
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        })

        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [-30, 10],
            extrapolate: 'clamp'
        })
        this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [50, 30],
            extrapolate: 'clamp'
        })


    }
    render() {
        return (
            <SafeAreaView style={styles.overview}>
                <View style={{ flex: 1 }}>
                  
                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [
                                { nativeEvent: { contentOffset: { y: this.scrollY } } }
                            ]
                        )}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Recent Tab's
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Overlay
                                        isVisible={this.state.isVissibleGallery}
                                        onBackdropPress={() => this.setState({ isVissibleGallery: false })}
                                        windowBackgroundColor="rgba(255, 255, 255, .5)"
                                        // overlayBackgroundColor="red"
                                        width={width * 0.85}
                                        height={height * 0.85}
                                    >
                                        <Curriclum />
                                    </Overlay>
                                    <Overlay
                                        isVisible={this.state.isVissibleCalender}
                                        onBackdropPress={() => this.setState({ isVissibleCalender: false })}
                                        windowBackgroundColor="rgba(255, 255, 255, .5)"
                                        // overlayBackgroundColor="red"
                                        width={width * 0.85}
                                        height={height * 0.85}
                                    >
                                        <AcadCal />
                                    </Overlay>
                                    <Overlay
                                        isVisible={this.state.isVissibleClassTT}
                                        onBackdropPress={() => this.setState({ isVissibleClassTT: false })}
                                        windowBackgroundColor="rgba(255, 255, 255, .5)"
                                        // overlayBackgroundColor="red"
                                        width={width * 0.85}
                                        height={height * 0.85}
                                    >
                                        <ClassTT />
                                    </Overlay>
                                    <Overlay
                                        isVisible={this.state.isVissiblePlace}
                                        onBackdropPress={() => this.setState({ isVissiblePlace: false })}
                                        windowBackgroundColor="rgba(255, 255, 255, .5)"
                                        // overlayBackgroundColor="red"
                                        width={width * 0.85}
                                        height={height * 0.85}
                                    >
                                        <PlacSer />
                                    </Overlay>
                                    <Overlay
                                        isVisible={this.state.isVissibleQuestPaper}
                                        onBackdropPress={() => this.setState({ isVissibleQuestPaper: false })}
                                        windowBackgroundColor="rgba(255, 255, 255, .5)"
                                        // overlayBackgroundColor="red"
                                        width={width * 0.85}
                                        height={height * 0.85}
                                    >
                                        <QuestPaper />
                                    </Overlay>
                                    <Overlay
                                        isVisible={this.state.isVissibleresult}
                                        onBackdropPress={() => this.setState({ isVissibleresult: false })}
                                        windowBackgroundColor="rgba(255, 255, 255, .5)"
                                        // overlayBackgroundColor="red"
                                        width={width * 0.85}
                                        height={height * 0.85}
                                    >
                                        <Result />
                                    </Overlay>
                                    <TouchableOpacity
                                        onPress={() => this.setState({ isVissibleGallery: true })}
                                    >
                                        <Category imageUri={{ uri: 'http://192.168.43.64/GPM/images/currriculum.jpg' }}
                                            name="Curriculum"
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.setState({ isVissibleCalender: true })}
                                    >
                                        <Category imageUri={{ uri: 'http://192.168.43.64/GPM/images/acadamic.jpg' }}
                                            name="Academic Calendar"
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.setState({ isVissibleresult: true })}
                                    >
                                        <Category imageUri={{ uri: 'http://192.168.43.64/GPM/images/result.jpg' }}
                                            name="Result"
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.setState({ isVissibleClassTT: true })}
                                    >
                                        <Category imageUri={{ uri: 'http://192.168.43.64/GPM/images/class timetable.jpg' }}
                                            name="class time table "
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.setState({ isVissibleQuestPaper: true })}
                                    >
                                        <Category imageUri={{ uri: 'http://192.168.43.64/GPM/images/questionpaper.jpg' }}
                                            name="Question Paper "
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.setState({ isVissiblePlace: true })}
                                    >
                                        <Category imageUri={{ uri: 'http://192.168.43.64/GPM/images/placement services.jpg' }}
                                            name="placement services "
                                        />
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Government Polytechnic Mumbai Autonomous Institute
                                </Text>

                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={{ uri: 'http://192.168.43.64/GPM/images/img.jpg' }}
                                    />

                                </View>
                            </View>
                        </View>
                        <View style={{ paddingVertical: 25, marginBottom: 40 }}>
                            <Card row middle style={styles.margin}>

                                <Block>
                                    <Text style={{ fontWeight: 'bold', fontSize: 24 }} paragraph color="black3">
                                        Institute Information {'\n'}

                                    </Text>
                                    <Text paragraph color="black3">
                                        Establishment of Polytechnic at Elphinston Technical School, Dhobi Talav, Mumbai  with 60 intake in Civil Engineering on 15th June, 1960.
The Polytechnic acquired existing campus in  May, 1985.{'\n'}

                                    </Text>
                                    <Text paragraph color="black3">
                                        Introduction of new diploma courses under State Government plan schemes viz.
                                            Electronics engineering and Instrumentation in 1988, Mechanical in 1989.{'\n'}

                                    </Text>
                                    <Text paragraph color="black3">
                                        Implementation of World Bank assisted projects in 1990-98. Major components were
                                                                      capacity expansion, quality and efficiency improvement. Under this started a new
                                                                      course, Computer Engineering in 1992, which was awarded academic autonomy in
                                            1990 to design, develop, implement own curriculum and issue own diploma.{'\n'}

                                    </Text>
                                    <Text paragraph color="black3">
                                        Implementation of Canada India Industry Polytechnic Linkage Project (CIILP-2002
                                            to 2005). The project focus was training of faculty and staff.{'\n'}

                                    </Text>
                                    <Text paragraph color="black3">
                                        The Polytechnic has been awarded Narsee Monjee Award for best performance in the
                                            year 1999 by ISTE.{'\n'}

                                    </Text>
                                </Block>
                            </Card>
                        </View>
                        <View style={{ marginTop: 40, marginBottom: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Events
                            </Text>
                            <View style={{ paddingHorizontal: 20, paddingBottom: 20, marginTop: 20, marginBottom: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
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
                                <TouchableOpacity
                                    onPress={() => this.setState({ isVisibleGalleryTechNex: true })}

                                >
                                    <HomeNew width={width}
                                        name="TechNex 2019"
                                        rating={5}
                                        image='http://192.168.43.64/GPM/images/photo.jpg'
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.setState({ isVisibleGalleryKalpak: true })}

                                >
                                    <HomeNew width={width}
                                        name="Kalpak 2019"
                                        rating={4}
                                        image='http://192.168.43.64/GPM/images/kalpak.JPG'

                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingHorizontal: 20, paddingBottom: 20, marginTop: 20, marginBottom: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
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
                                <TouchableOpacity
                                    onPress={() => this.setState({ isVisibleGalleryFDBIT: true })}

                                >

                                    <HomeNew width={width}
                                        name="Big Data & Hadoop FDP"
                                        rating={5}
                                        image='http://192.168.43.64/GPM/images/fdp.jpg'

                                    />
                                </TouchableOpacity>

                                <HomeNew width={width}
                                    name="Konstruct 2019"
                                    rating={3}
                                    image='http://192.168.43.64/GPM/images/konstruct6.jpg'

                                />
                            </View>
                            <View style={{ paddingHorizontal: 20, paddingBottom: 20, marginTop: 20, marginBottom: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
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
                                <HomeNew width={width}
                                    name="Mechnova 2019"
                                    rating={3}
                                    image='http://192.168.43.64/GPM/images/mech.jpg'

                                />
                                <TouchableOpacity
                                    onPress={() => this.setState({ isVisibleGalleryTechkriti: true })}

                                >

                                    <HomeNew width={width}
                                        name="TechKriti 2018"
                                        rating={4}
                                        image='http://192.168.43.64/GPM/images/techkriti.JPG'

                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingHorizontal: 20, paddingBottom: 20, marginTop: 20, marginBottom: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <HomeNew width={width}
                                    name="TechKnow 2019"
                                    rating={4}
                                    image='http://192.168.43.64/GPM/images/techknow.jpeg'
                                />


                            </View>
                        </View>
                        <View style={{ paddingVertical: 25, marginBottom: 40 }}>


                            <Card
                                title="Team Memebers"
                                style={[styles.margin, { marginTop: 18 }]}
                            >
                                <Block style={styles.driver}>
                                    <TouchableOpacity activeOpacity={0.8}
                                        onPress={() => this.props.navigation.navigate('St')}
                                    >
                                        <Block row center>
                                            <Block>
                                                <Image
                                                    style={styles.avatar}
                                                    source={{ uri: 'http://192.168.43.64/GPM/images/team.png' }}
                                                />
                                            </Block>
                                            <Block flex={2}>
                                                <Text h4>AFAAN ANSARI</Text>
                                                {/* <Text paragraph color="gray">Chevrolet Bolt</Text> */}
                                            </Block>
                                            <Block>

                                            </Block>
                                        </Block>
                                    </TouchableOpacity>
                                </Block>
                                <Block style={styles.driver}>
                                    <TouchableOpacity activeOpacity={0.8}>
                                        <Block row center>
                                            <Block>
                                                <Image
                                                    style={styles.avatar}
                                                    source={{ uri: 'http://192.168.43.64/GPM/images/team.png' }}
                                                />
                                            </Block>
                                            <Block flex={2}>
                                                <Text h4>ABHISHEK RAI</Text>
                                                {/* <Text paragraph color="gray">Tesla Model X</Text> */}
                                            </Block>
                                            <Block>

                                            </Block>
                                        </Block>
                                    </TouchableOpacity>
                                </Block>
                                <Block style={styles.driver}>
                                    <TouchableOpacity activeOpacity={0.8}>
                                        <Block row center>
                                            <Block>
                                                <Image
                                                    style={styles.avatar}
                                                    source={{ uri: 'http://192.168.43.64/GPM/images/team.png' }}
                                                />
                                            </Block>
                                            <Block flex={2}>
                                                <Text h4>NIKHIL CHAUBE</Text>
                                                {/* <Text paragraph color="gray">Volvo Intellisafe</Text> */}
                                            </Block>
                                            <Block>
                                            </Block>
                                        </Block>
                                    </TouchableOpacity>
                                </Block>
                                <Block style={styles.driver}>
                                    <TouchableOpacity activeOpacity={0.8}>
                                        <Block row center>
                                            <Block>
                                                <Image
                                                    style={styles.avatar}
                                                    source={{ uri: 'http://192.168.43.64/GPM/images/team.png' }}
                                                />
                                            </Block>
                                            <Block flex={2}>
                                                <Text h4>SHAHAB MOMIN</Text>
                                                {/* <Text paragraph color="gray">Volvo Intellisafe</Text> */}
                                            </Block>
                                            <Block>

                                            </Block>
                                        </Block>
                                    </TouchableOpacity>
                                </Block>
                                <Block style={styles.driver}>
                                    <TouchableOpacity activeOpacity={0.8}>
                                        <Block row center>
                                            <Block>
                                                <Image
                                                    style={styles.avatar}
                                                    source={{ uri: 'http://192.168.43.64/GPM/images/team.png' }}
                                                />
                                            </Block>
                                            <Block flex={2}>
                                                <Text h4>TAUSIF KHAN</Text>
                                                {/* <Text paragraph color="gray">Volvo Intellisafe</Text> */}
                                            </Block>
                                            <Block>

                                            </Block>
                                        </Block>
                                    </TouchableOpacity>
                                </Block>
                            </Card>



                        </View>
                    </ScrollView>

                </View>

            </SafeAreaView>
        )
    }
}

export default Home;