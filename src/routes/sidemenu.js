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
                    <View style={{borderRadius: 12,}} >

                        <Image
                            style={{ flex: 1, height: height * 0.4, width: null, borderRadius: 12,  borderWidth: 1, borderColor: '#dddddd' }}
                            source={{ uri: 'http://192.168.0.104/GPM/images/download.jpeg' }}
                        /></View>
                    <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('home')} >home</Text>
                    <View style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}>
                        <Divider style={styles.drawerStyle} />
                    </View>
                    <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('aboutUS')}>about us</Text>
                    <View style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}>

                        <Divider style={styles.drawerStyle} />
                    </View>
                    <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('admission')}>admission</Text>
                    <View style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}>

                        <Divider style={styles.drawerStyle} />
                    </View>
                    <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('department')}>department</Text>
                    <View style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}>

                        <Divider style={styles.drawerStyle} />
                    </View>
                    <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('studentSec')}>student section</Text>
                    <View style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}>


                        <Divider style={styles.drawerStyle} />
                    </View>
                    <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('centres')}>centres </Text>
                    <View style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}>

                        <Divider style={styles.drawerStyle} />
                    </View>
                    <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('gallery')}>gallery </Text>
                    <View style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}>

                        <Divider style={styles.drawerStyle} />
                    </View>
                    <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('alumini')}>alumini </Text>
                    <View style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}>

                        <Divider style={styles.drawerStyle} />
                    </View>
                    <Text style={{ fontWeight: 'bold' }} onPress={this.navigateToScreen('contact')}>contact </Text>
                    <View style={{ paddingTop: height * 0.02, paddingBottom: height * 0.02 }}>

                        <Divider style={styles.drawerStyle} />
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
