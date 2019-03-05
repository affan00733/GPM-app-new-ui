

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import Route from './src/menu/routes';
import Footer from './src/footer/footer'
import SplashScreen from 'react-native-splash-screen'

export default class App extends Component {
  componentDidMount(){
    SplashScreen.hide();
  }
  render() {
    return (

      
     <Footer />

     
    );
  }
}


