import React, { Component } from "react";
import { StyleSheet, Text, View, Alert,TouchableWithoutFeedback, Animated } from "react-native";
// import { Audio } from "expo";

export default class Button extends Component {
  state = {
    animation: new Animated.Value(0),
  };
  handleAirhorn = async () => {
    try {
    //   const sound = new Audio.Sound();
    //   await sound.loadAsync(require("./assets/airhorn.mp3"));
    //   await sound.playAsync();
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 100,
      }).start();
    } catch (e) {}
  };
  handleButtonUp = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 50,
    }).start();
  };
  handlePress = () => {
   this.props.press
  };
  render() {
    const inner = {
      borderRadius: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [12, 16],
      }),
    };

    const heightStyle = {
      marginTop: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-15, 0],
      }),
      paddingBottom: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 0],
      }),
    };
    const { style, full, opacity, children, ...props } = this.props;

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPressIn={this.handleAirhorn} onPressOut={this.handleButtonUp}    
        
        {...props}
 >
          <View style={styles.button}>
            <View style={styles.outer}>
              <Animated.View style={[styles.height, heightStyle]}>
                <Animated.View style={[styles.inner, inner]}>
                  <Text style={styles.white}>{children}</Text>
                </Animated.View>
              </Animated.View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop : 40


  },
  button: {
    height: 80,
    width: 180,
    
  },
  outer: {
    flex: 1,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.65)",
    borderRadius: 14,
  },
  height: {
    backgroundColor: "rgba(255, 0, 0, .5)",
    borderRadius: 16,
  },
  inner: {
    height: "100%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  white: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});