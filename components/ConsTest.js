import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";

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
                            <Text> Consultancy and testing   </Text>
                            {/* <Text note>Jan 15, 2018</Text> */}
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    {/* <Image source={images[1]} style={{ height: 200, width: null, flex: 1 }} /> */}
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
                       
                    
                        <Card style={{ width: width * 0.80}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>Consultancy and testing  </Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text style={{fontWeight: 'bold'}}>Comming Soon{'\n\n'} </Text>

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
                                
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});