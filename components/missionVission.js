import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from "react-native";
import { Table, TableWrapper, Row } from 'react-native-table-component';

import styles from '../src/styles/styles'
import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
const logo = require("./images/GDG.jpg");
const cardImage = require("./images/serverless.jpg")
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const logo1 = require("./images/mkbhd.jpg");

class MissionVission extends Component {

    
    render() {
        

        const images = {
            

            "1": require('../assets/feed_images/1.jpg'),
            "2": require('../assets/feed_images/2.jpg'),
            "3": require('../assets/feed_images/3.png')
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/me.jpg')} />
                        <Body>
                            <Text> Mission Vission   </Text>
                            {/* <Text note>Jan 15, 2018</Text> */}
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[1]} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Body>
                       
                    
                                            <Card style={{ width: width * 0.80}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}><Text style={{ fontWeight: 'normal', opacity: 0.5 }}>  ï<Text>  2h</Text></Text></Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text> Vission{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>Transform knowledge into work.</Text>
                            </CardItem>
                         
                            <CardItem style={{ paddingVertical: 0 }}>
                                <Left>
                                    <Text></Text>
                                </Left>
                                <Body>

                                </Body>
                                <Right>

                                </Right>
                            </CardItem>
                        </Card>
                        {/*  */}
                                                <Card style={{ width: width * 0.80}}>
                        <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}><Text style={{ fontWeight: 'normal', opacity: 0.5 }}>  ï<Text>  2h</Text></Text></Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Mission</Text>

                            </CardItem>
                          
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text> We are committed for{'\n\n'}{'\n\n'} Quality education for lifelong learning.{'\n\n'}  Need based educational programmes through different modes.{'\n\n'}  Outcome based curriculum implementation.{'\n\n'}  Development and up gradation of standard laboratory practices.{'\n\n'}  Promoting entrepreneurial programmes.{'\n\n'}{'\n\n'}   We believe in ethical, safety, environment friendly practices and teaching learning innovations. </Text>

                            </CardItem>
                            
                            
                        
                            
                            <CardItem style={{ paddingVertical: 0 }}>
                                <Left>
                                    
                                    <Text></Text>
                                </Left>
                                <Body>

                                </Body>
                                <Right>

                                </Right>
                            </CardItem>
                        </Card>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default MissionVission;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });