/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, Dimensions, Image } from 'react-native';
import { Divider } from 'react-native-elements'
const { height, width } = Dimensions.get('window')
import styles from '../styles/styles'
class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{paddingBottom : height * 0.1,paddingLeft : height * 0.01,paddingTop : height * 0.02,paddingRight : height * 0.01}} >

                        <Image
                            style={{  height: height * 0.25, width: null, borderRadius: 200, paddingBottom : height * 0.05, borderWidth: 1, borderColor: '#dddddd' }}
                            source={{ uri: 'http://192.168.43.64/GPM/images/0.png' }}
                        />
                        </View>
                    <View style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}>
                    <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('home')} >Home</Text>
                    </View>
                    <View style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}>

                    <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('aboutUS')}>About us</Text>
                    </View>
                    <View style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}>

                    <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('admission')}>Admission</Text>
                    </View>
                    <View style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}>

                    <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('department')}>Department</Text>
                    </View>
                    <View style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}>


                    <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('studentSec')}>Student section</Text>
                    </View>
                    <View style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}>

                    <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('centres')}>Centres </Text>
                    </View>
                    <View style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}>

                    <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('gallery')}>Gallery </Text>
                    </View>
                    <View style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}>

                    <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('alumini')}>Alumini </Text>
                    </View>
         <View style={{paddingTop: height * 0.02,paddingBottom : height * 0.2}}>
         <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('contact')}>Contact us</Text>

         </View>
                </ScrollView>

            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;
