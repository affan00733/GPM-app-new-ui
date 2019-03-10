import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,Dimensions,
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

class CardComponent extends Component {

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
                            <Text>About scheme </Text>
                            {/* <Text note>Jan 15, 2018</Text> */}
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[1]} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        {/* <Button transparent>
                            <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{ color: 'black' }} />
                        </Button> */}


                    </Left>
                </CardItem>


                <CardItem>
                    <Body>
                       
                    
                        <Card style={{ flex: 1 }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>About Scheme</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Message{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Government Polytechnic Mumbai (GPM) is an academically autonomous institute of Government of Maharashtra and in practice of conducting specialized and tailor made continuing education programs apart from conventional diploma courses across the vicinity of Mumbai.{'\n\n'}Moreover, Government of Maharashtra has identified this institute for implementing Community college scheme of the Ministry of Human Resource Development (MHRD). This scheme aims to impart knowledge and skill based modular training programmes to generate employability. The modular training program will have different level based certifications; wherein at every level, the candidate will be equipped with knowledge and skill in particular area. The knowledge components in particular level will be evaluated by the institute and skill component by the prominent industry.{'\n\n'}Consequently, this institute has identified "Electronics Security" as area through search conferences, since a metropolitan city like Mumbai need trained personnel in Electronics Security. Further, this institute has joined hands with M/s. Zicom Electronic Security Systems Ltd (ZESSL). ZESSL is incorporated in 1994 and leading organization in electronics security in India.</Text>


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
                                        <Text style={{ fontWeight: 'bold' }}>About Scheme</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                           
                          
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>{'\n\n'}GPM and ZESSL believe that education plays a catalytic role in the dynamic growth of nation. Further, they believe the partnership between industries and the educational institute can take-up the challenges in the era of cutting age technologies and fulfills the need of technicians in the skill sector of electronic security. They also believe that the partnership between GPM and ZESSL would benefit the community.{'\n\n'} As a result of this GPM is planned to launch a programme in "Electronics Security" as detailed below:{'\n\n'}</Text>
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
export default CardComponent;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });