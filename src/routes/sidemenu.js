/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';

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

                <Text onPress={this.navigateToScreen('home')} >home</Text>
                <Text></Text>
                <Text onPress={this.navigateToScreen('aboutUS')}>about us</Text>
                <Text></Text>
                <Text onPress={this.navigateToScreen('admission')}>admission</Text>
                <Text></Text>
                <Text onPress={this.navigateToScreen('department')}>department</Text>
                <Text></Text>
                <Text onPress={this.navigateToScreen('studentSec')}>student section</Text>
                <Text></Text>
                <Text onPress={this.navigateToScreen('centres')}>centres </Text>
                <Text></Text>
                <Text onPress={this.navigateToScreen('gallery')}>gallery </Text>
                <Text></Text>
                <Text onPress={this.navigateToScreen('alumini')}>alumini </Text>
                <Text></Text>
                <Text onPress={this.navigateToScreen('contact')}>contact </Text>
                <Text></Text>
                </ScrollView>
                
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;
