import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container,Content,Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
const logo = require("./images/GDG.jpg");
const cardImage = require("./images/serverless.jpg")

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
                            <Text>Varun </Text>
                            <Text note>Jan 15, 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[1]} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{ color: 'black' }} />
                        </Button>


                    </Left>
                </CardItem>

                <CardItem style={{ height: 20 }}>
                    <Text>999 likes</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        {/*  */}
                    <Card style={{ flex: 1 ,width : 370}}>
                <CardItem>
                <Left>
                <Thumbnail source={logo} />
                <Body>
                    <Text style={{ fontWeight: 'bold' }}>Google Devs India<Text style={{ fontWeight: 'normal', opacity: 0.5 }}> @GoogleDevsIN  •<Text>  30m</Text></Text></Text>
                </Body>
                </Left>
            </CardItem>

            <CardItem cardBody>
                <Image
                style={{
                    resizeMode: "cover",
                    width: null,
                    height: 150,
                    flex: 1
                }}
                source={cardImage}
                />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
                <Left>
                <Button iconLeft transparent>
                    <Icon active name="chatbubbles" />
                    <Text>64</Text>
                </Button>
                </Left>
                <Body>
                <Button iconLeft transparent>
                    <Icon active name="git-compare" />
                    <Text>347</Text>
                    <Icon active name="heart" />
                    <Text>8K</Text>
                </Button>
                </Body>
                <Right>
                <Button iconLeft transparent>
                    <Icon active name="mail" />
                </Button>
                </Right>
            </CardItem>
                </Card>
                        {/* <Text>
                            <Text style={{ fontWeight: "900" }}>varun </Text>
                            Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim.
                        </Text> */}
                          {/* <Container style={{ backgroundColor: "#FFF" }}>
            <Content padder style={{ marginTop: 5 }}> */}
                      <Card style={{ flex: 1 }}>
                <CardItem>
                <Left>
                <Thumbnail source={logo1} />
                <Body>
                    <Text style={{ fontWeight: 'bold' }}>Marques Brownlee<Text style={{ fontWeight: 'normal', opacity: 0.5 }}> @MKBHD  •<Text>  2h</Text></Text></Text>
                </Body>
                </Left>
            </CardItem>

            <CardItem cardBody style={{ paddingLeft: 10 }}>
                    <Text>Kids, back in my day if you wanted to listen to music you actually had to connect the headphones to the device with a cable. Good times.</Text>
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
                <Left>
                <Button iconLeft transparent>
                    <Icon active name="chatbubbles" />
                    <Text>91</Text>
                </Button>
                </Left>
                <Body>
                <Button iconLeft transparent>
                    <Icon active name="git-compare" />
                    <Text>656</Text>
                    <Icon active name="heart" />
                    <Text>21K</Text>
                </Button>
                </Body>
                <Right>
                <Button iconLeft transparent>
                    <Icon active name="mail" />
                </Button>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});