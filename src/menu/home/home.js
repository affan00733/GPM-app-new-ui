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

import Curriclum from '../student section/options/curr'
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
            isVissibleGallery: false
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
                    {/* <Animated.View style={{ height: this.animatedHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon1 name="ios-search" size={20} style={{ marginRight: 10, marginTop: 14.5 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Try New Delhi"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                            />
                        </View>
                        <Animated.View
                            style={{ flexDirection: 'row', marginHorizontal: 20, paddingBottom: 10, position: 'relative', top: this.animatedTagTop, opacity: this.animatedOpacity }}
                        >
                            <Tag name="Guests" />
                            <Tag name="Dates" />

                        </Animated.View> 
                    </Animated.View> */}
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
                                    <TouchableOpacity
                                        onPress={() => this.setState({ isVissibleGallery: true })}
                                    >
                                        <Category imageUri={require('./assets/home.jpg')}
                                            name="Home"
                                        />
                                    </TouchableOpacity>
                                    <Category imageUri={require('./assets/experiences.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('./assets/restaurant.jpg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Government Polytechnic Mumbai Autonomous Institute
                                </Text>

                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={{uri : 'http://192.168.0.104/GPM/images/img09.jpg'}}
                                    />

                                </View>
                            </View>
                        </View>
                        <View style={{ paddingVertical: 25, marginBottom: 40 }}>
                            <Card row middle style={styles.margin}>
                              
                                <Block>
                                    <Text paragraph color="black3">
                                        All cars are operating well.
                                        There were 1,233 trips since your last login.
              </Text>
                                </Block>
                            </Card>
                            </View>
                        <View style={{ marginTop: 40, marginBottom: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Homes around the world
                            </Text>
                            <View style={{ paddingHorizontal: 20, paddingBottom: 20, marginTop: 20, marginBottom: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <HomeNew width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4}
                                />
                                <HomeNew width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4}
                                />
                            </View>
                            <View style={{ paddingHorizontal: 20, paddingBottom: 20, marginTop: 10, marginBottom: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                                <HomeNew width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4}
                                />


                            </View>
                        </View>
                        <View style={{ paddingVertical: 25, marginBottom: 40 }}>
          

                            <Card
                                title="TOP DRIVERS"
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
                                                    source={{ uri: 'https://images.unsplash.com/photo-1506244856291-8910ea843e81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' }}
                                                />
                                            </Block>
                                            <Block flex={2}>
                                                <Text h4>Grand Tesoro</Text>
                                                <Text paragraph color="gray">Chevrolet Bolt</Text>
                                            </Block>
                                            <Block>
                                                <Text paragraph right color="black">$6,432</Text>
                                                <Text paragraph right color="gray">1,232 miles</Text>
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
                                                    source={{ uri: 'https://images.unsplash.com/photo-1521657249896-063c0c611fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' }}
                                                />
                                            </Block>
                                            <Block flex={2}>
                                                <Text h4>Invision App</Text>
                                                <Text paragraph color="gray">Tesla Model X</Text>
                                            </Block>
                                            <Block>
                                                <Text paragraph right color="black">$6,432</Text>
                                                <Text paragraph right color="gray">1,232 miles</Text>
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
                                                    source={{ uri: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' }}
                                                />
                                            </Block>
                                            <Block flex={2}>
                                                <Text h4>React UI Kit</Text>
                                                <Text paragraph color="gray">Volvo Intellisafe</Text>
                                            </Block>
                                            <Block>
                                                <Text paragraph right color="black">$6,432</Text>
                                                <Text paragraph right color="gray">1,232 miles</Text>
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