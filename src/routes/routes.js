import { createDrawerNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import React, { Component } from 'react'
import { Container, Header, Content } from 'native-base';
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import SideMenu from './sidemenu'

import home from '../menu/home/home'
import aboutUS from '../menu/about us/aboutUS'
import principleDesk from '../menu/about us/options/principleDesk'


const homeNav = createStackNavigator({
    home : {
        screen : home
    },
    aboutUS : {
        screen : aboutUS
    },
    // principleDesk : {
    //     screen : principleDesk
    // }
},{
    // headerMode : 'none'
})



const Dr = createDrawerNavigator({
    home: {
        screen: homeNav
    },
   
 


}, {

        contentComponent: SideMenu,
        drawerWidth: 300
    });


// const Dr2 = createDrawerNavigator({
//     Concession: { screen: Concession },
//     Graph: { screen: Graph },
//     Portal: { screen: Portal },
//     Chat : {screen : Chat}

// }, {
//         contentComponent: SideMenu2,
//         drawerWidth: 300
//     })


// const St = createStackNavigator({
//     Login: { screen: Login },
//     Signup: { screen: Signup },
//     Dr2 : Dr2,
//     // Dr1 : Dr

// }, {
//         initialRouteName: 'Login',
//         navigationOptions: ({ navigation }) => ({

//         }),
//         headerMode: 'none'
//     })

const Sw = createSwitchNavigator({

    Dr: Dr,

    // St: St,
})

export default Sw
