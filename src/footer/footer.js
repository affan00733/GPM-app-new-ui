import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
  ScrollView,
  Image,
  Slider
} from "react-native";
import IconFont from 'react-native-vector-icons/FontAwesome'
import Routes from '../routes/routes'
import Ln from '../notices/ln'
import Sc from '../notices/sc'
import Cep from '../notices/cep'
import Tender from '../notices/tender'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
import { createDrawerNavigator, createAppContainer, createMaterialTopTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
// import { Container, Header, Content } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'
const Notice = createMaterialTopTabNavigator({
  Ln: {
    screen: Ln,
    navigationOptions: ({ navigation }) => ({
      title: 'Latest News',
      tabBarIcon: ({ tintColor }) => (
        <IconFont name='gitlab' color={tintColor} size={24} />
      )
    }),

  },
  Sc: {
    screen: Sc,
    navigationOptions: ({ navigation }) => ({
      title: 'Student  Corner',
      tabBarIcon: ({ tintColor }) => (
        <IconFont name='gitlab' color={tintColor} size={24} />
      )
    }),
  },
  Cep: {
    screen: Cep,
    navigationOptions: ({ navigation }) => ({
      title: 'CEP News',
      tabBarIcon: ({ tintColor }) => (
        <IconFont name='gitlab' color={tintColor} size={24} />
      )
    }),
  },
  Tender: {
    screen: Tender,
    navigationOptions: ({ navigation }) => ({
      title: 'Tender News',
      tabBarIcon: ({ tintColor }) => (
        <IconFont name='gitlab' color={tintColor} size={24} />
      )
    }),
  },
},
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
        fontWeight : 'bold'
      },
      tabStyle: {
        // width: 100,
        paddingBottom: SCREEN_HEIGHT * 0.2
      },

      style: {
        backgroundColor: '#F0F3F4',

      },
      activeTintColor: '#E74C3C',
      showIcon: true,
      tabBarPosition: 'bottom'
    },
    tabBarPosition: 'bottom',
    lazy: true
  }
)
export default class Footer extends Component {

  state = {
    isScrollEnabled: false
  }
  componentWillMount() {

    this.scrollOffset = 0

    this.animation = new Animated.ValueXY({ x: 0, y: SCREEN_HEIGHT - 90 })

    this.panResponder = PanResponder.create({

      onMoveShouldSetPanResponder: (evt, gestureState) => {

        if ((this.state.isScrollEnabled && this.scrollOffset <= 0 && gestureState.dy > 0) || !this.state.isScrollEnabled && gestureState.dy < 0) {
          return true
        } else {
          return false
        }
      },
      onPanResponderGrant: (evt, gestureState) => {
        this.animation.extractOffset()
      },
      onPanResponderMove: (evt, gestureState) => {

        this.animation.setValue({ x: 0, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

        if (gestureState.moveY > SCREEN_HEIGHT - 120) {
          Animated.spring(this.animation.y, {
            toValue: 0,
            tension: 1
          }).start()
        }
        else if (gestureState.moveY < 120) {
          Animated.spring(this.animation.y, {
            toValue: 0,
            tension: 1
          }).start()
        }
        else if (gestureState.dy < 0) {
          this.setState({ isScrollEnabled: true })

          Animated.spring(this.animation.y, {
            toValue: -SCREEN_HEIGHT + 120,
            tension: 1
          }).start()
        }
        else if (gestureState.dy > 0) {
          this.setState({ isScrollEnabled: false })
          Animated.spring(this.animation.y, {
            toValue: SCREEN_HEIGHT - 120,
            tension: 1
          }).start()
        }
      }

    })
  }

  render() {

    const animatedHeight = {
      transform: this.animation.getTranslateTransform()
    }

    animatedImageHeight = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 90],
      outputRange: [200, 32],
      extrapolate: "clamp"
    })
    animatedSongTitleOpacity = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 500, SCREEN_HEIGHT - 90],
      outputRange: [0, 0, 1],
      extrapolate: "clamp"
    })
    animatedImageMarginLeft = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 90],
      outputRange: [SCREEN_WIDTH / 2 - 100, 10],
      extrapolate: "clamp"
    })
    animatedHeaderHeight = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 90],
      outputRange: [SCREEN_HEIGHT / 2, 90],
      extrapolate: "clamp"
    })
    animatedSongDetailsOpacity = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 500, SCREEN_HEIGHT - 90],
      outputRange: [1, 0, 0],
      extrapolate: "clamp"
    })
    animatedBackgroundColor = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 90],
      outputRange: ['rgba(0,0,0,0.5)', 'white'],
      extrapolate: "clamp"
    })
    return (
      <Animated.View style={{ flex: 1, backgroundColor: animatedBackgroundColor }}>
        <Routes />
        <Animated.View
          {... this.panResponder.panHandlers}
          style={[animatedHeight, { position: 'absolute', left: 0, right: 0, zIndex: 10, backgroundColor: '#F0F3F4', height: SCREEN_HEIGHT }]}

        >
          <ScrollView
            scrollEnabled={this.state.isScrollEnabled}
            scrollEventThrottle={16}
            onScroll={event => {
              this.scrollOffset = event.nativeEvent.contentOffset.y
            }}
          >
            <Animated.View
              style={{ height: animatedHeaderHeight, borderTopWidth: 1, borderTopColor: '#ebe5e5', flexDirection: 'row', alignItems: 'center' }}
            >
              <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center' }}>
                <Animated.View style={{ height: animatedImageHeight, width: animatedImageHeight, marginLeft: animatedImageMarginLeft }}>
                  <Image style={{ flex: 1, width: null, height: null, paddingBottom: 10 }}
                    source={require('./icon.png')}
                  />
                </Animated.View>
                <Animated.Text style={{ opacity: animatedSongTitleOpacity, fontSize: 18, fontWeight: 'bold', paddingLeft: 10, paddingBottom: 5 }}>
                  Notices : -
                </Animated.Text>
              </View>

            </Animated.View>

            <Animated.View style={{ height: animatedHeaderHeight, opacity: animatedSongDetailsOpacity }}>



              <View
                style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
              >
                {/* <Ionicons name="md-rewind" size={40} /> */}
                {/* <Ionicons name="md-pause" size={50} /> */}
                {/* <Ionicons name="md-fastforward" size={40} /> */}
                <Notice />

              </View>
              <View
              // style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingBottom: 20 }}
              >
                {/* <Ionicons name="md-add" size={32} style={{ color: '#fa95ed' }} /> */}
                {/* <Ionicons name="md-more" size={32} style={{ color: '#fa95ed' }} /> */}
              </View>
            </Animated.View>
            {/* <View style={{ height: 1000 }} >

            </View> */}
          </ScrollView>
        </Animated.View>

      </Animated.View>
    );
  }
}
// export default AppleMusicUI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});