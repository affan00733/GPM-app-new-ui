import { createDrawerNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import React, { Component } from 'react'
import { Container, Header, Content } from 'native-base';
import { Text,Button,TouchableOpacity } from 'react-native'
import firebase from 'firebase'

import SideMenu from './sidemenu'

import home from '../menu/home/home'
import aboutUS from '../menu/about us/aboutUS'
import admission from '../menu/admission/admission'
import alumini from '../menu/alumini/alumini'
import centres from '../menu/centres/centres'
import contact from '../menu/contact/contact'
import department from '../menu/department/department'
import gallery from '../menu/gallery/gallery'
import studentSec from '../menu/student section/studentSec'

import { Block, Card, Icon, Label } from '../components';

import Login  from '../login/login'
import Signup  from '../login/signup'

import Feature from '../features/feature'
const homeNav = createStackNavigator({
    home : {
        screen : home
    },
    aboutUS : {
        screen : aboutUS
    },
    admission : {
        screen :admission 
    },
    department : {
        screen : department
    },
    studentSec : {
        screen : studentSec
    },
    centres : {
        screen : centres
    },
    gallery : {
        screen : gallery
    },
    alumini : {
        screen : alumini
    },
    contact : {
        screen : contact
    }
  
},{
    // headerMode : 'none'
    navigationOptions: ({ navigation }) => ({
        headerLeftContainerStyle: {
            paddingLeft: 34,

        },
        headerRightContainerStyle: {
            paddingRight: 24
        },
        headerLeft: (
            <TouchableOpacity style={{marginLeft : 10}} onPress={() => navigation.toggleDrawer()} ><Icon menu /></TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity style={{marginRight : 10}} onPress={() => navigation.navigate('Login')} ><Icon notification /></TouchableOpacity>
        ),
      }),
})



const Dr = createDrawerNavigator({
    home: {
        screen: homeNav
    },
   
 


}, {

        contentComponent: SideMenu,
        drawerWidth: 300
    });


    const St2 = createStackNavigator({
        Feature : {screen : Feature}
    
    
    }, {
        navigationOptions: ({ navigation }) => ({
            headerLeftContainerStyle: {
                paddingLeft: 34,
          
              },
              headerRightContainerStyle: {
                paddingRight: 24
              },
           
              headerRight: (
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => {
                  firebase.auth().signOut().then(function () {
                  // Sign-out successful.
                  this.props.navigation.navigate('home')
                  console.log('correct logout')
          
              }).catch(function (error) {
                  // An error happened.
                  console.log(error)
              })
              navigation.navigate('Dr')
          
            } }><Icon notification /></TouchableOpacity>
              ),
              headerTitle: (
                <Block row middle><Text h4>Features</Text></Block>
              ),
      }),
})
    
const St = createStackNavigator({
    Login: { screen: Login 
   },
    Signup: { screen: Signup },
  St2 : St2

}, {
        initialRouteName: 'Login',
        navigationOptions: ({ navigation }) => ({

        }),
        headerMode: 'none'
    })

const Sw = createSwitchNavigator({

    Dr: Dr,

    St: St,
})

export default Sw
