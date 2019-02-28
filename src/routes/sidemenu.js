/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Divider } from 'react-native-elements'
const { height, width } = Dimensions.get('window')
import { Container, Content, Header, Body } from 'native-base'
// import Icons from 'react-native-vector-icons'
import styles from '../styles/styles'
import { Icon } from '../components';

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <Container>

                    <Header style={styles.drawerHeader}>
                    <ImageBackground source={require('./draweHeader.jpg')} style={{     height: height * 0.3, width: width * 1 }}>

                        <Body>
                            <View style={{
                                paddingLeft: width * 0.05,
                                paddingTop :  height *0.05

                            }}>
                                <Image
                                style={styles.drawerImage}
                                source={{ uri: 'http://192.168.0.105/GPM/images/Background.png' }}
                            />
                            </View>
                        </Body>
                        </ImageBackground>

                    </Header>

                <Content>
                    <View style={[styles.menuDrawer, { paddingTop: height * 0.035 }]}>
                        <View style={{ paddingLeft: width * 0.05 }}>
                            <Icon distance />

                        </View>
                        <TouchableOpacity onPress={this.navigateToScreen('home')} >
                            <Text style={[styles.draerText, { color: '#1ABC9C' }]}  >Home</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuDrawer}>
                        <View style={{ paddingLeft: width * 0.05 }}>
                            <Icon distance />

                        </View>
                        <TouchableOpacity onPress={this.navigateToScreen('aboutUS')}>

                            <Text style={[styles.draerText, { color: '#3498DB' }]} >About us</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuDrawer}>
                        <View style={{ paddingLeft: width * 0.05 }}>
                            <Icon distance />

                        </View>
                        <TouchableOpacity onPress={this.navigateToScreen('admission')}>

                            <Text style={[styles.draerText, { color: '#1ABC9C' }]} >Admission</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuDrawer}>
                        <View style={{ paddingLeft: width * 0.05 }}>
                            <Icon distance />

                        </View>
                        <TouchableOpacity onPress={this.navigateToScreen('department')}>

                            <Text style={[styles.draerText, { color: '#3498DB' }]} >Department</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuDrawer}>
                        <View style={{ paddingLeft: width * 0.05 }}>
                            <Icon distance />

                        </View>
                        <TouchableOpacity onPress={this.navigateToScreen('studentSec')}>

                            <Text style={[styles.draerText, { color: '#1ABC9C' }]} >Student section</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuDrawer}>
                        <View style={{ paddingLeft: width * 0.05 }}>
                            <Icon distance />

                        </View>
                        <TouchableOpacity onPress={this.navigateToScreen('centres')}>

                            <Text style={[styles.draerText, { color: '#3498DB' }]} >Centres </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuDrawer}>
                        <View style={{ paddingLeft: width * 0.05 }}>
                            <Icon distance />

                        </View>
                        <TouchableOpacity onPress={this.navigateToScreen('gallery')}>

                            <Text style={[styles.draerText, { color: '#1ABC9C' }]} >Gallery </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuDrawer}>
                        <View style={{ paddingLeft: width * 0.05 }}>
                            <Icon distance />

                        </View>
                        <TouchableOpacity onPress={this.navigateToScreen('alumini')}>

                            <Text style={[styles.draerText, { color: '#3498DB' }]} >Alumini </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.menuDrawer, { paddingBottom: height * 0.4 }]}>
                        <View style={{ paddingLeft: width * 0.05 }}>
                            <Icon distance />

                        </View>
                        <TouchableOpacity onPress={this.navigateToScreen('contact')}>

                            <Text style={[styles.draerText, { color: '#1ABC9C' }]} >Contact us</Text>
                        </TouchableOpacity>
                    </View>
                </Content>

            </Container>

            // <View style={styles.container}>
            //     <ScrollView>
            //         <View style={{paddingBottom : height * 0.1,paddingLeft : height * 0.01,paddingTop : height * 0.02,paddingRight : height * 0.01}} >

            //             <Image
            //                 style={{  height: height * 0.25, width: null, borderRadius: 200, paddingBottom : height * 0.05, borderWidth: 1, borderColor: '#dddddd' }}
            //                 source={{ uri: 'http://192.168.43.64/GPM/images/0.png' }}
            //             />
            //             </View>

            //     </ScrollView>

            // </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;
