import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Picker
} from "react-native";
import { Overlay, Button } from 'react-native-elements'
import Pdf from 'react-native-pdf';

import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Icon } from 'native-base'
const logo = require("./images/GDG.jpg");
const cardImage = require("./images/serverless.jpg")
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import styles from '../src/styles/styles'

const logo1 = require("./images/mkbhd.jpg");

class CardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisiblepdf: false,
            source: '',
            dept: '',
            year: '',
            shift: ''




        }
    }

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
                            <Text> Class Time Table</Text>
                            {/* <Text note>Jan 15, 2018</Text> */}
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    {/* <Image source={images[1]} style={{ height: 200, width: null, flex: 1 }} /> */}
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>


                    </Left>
                </CardItem>


                <CardItem>
                    <Body>


                    <Card style={{ width: width * 0.80}}>
                            <Overlay
                                isVisible={this.state.isVisiblepdf}
                                onBackdropPress={() => this.setState({ isVisiblepdf: false })}
                                windowBackgroundColor="rgba(255, 255, 255, .5)"
                                // overlayBackgroundColor="red"
                                width={width * 0.85}
                                height={height * 0.85}
                            fullScreen = {true}
                            >
                                <Pdf
                                    source={{ uri: `http://192.168.43.64/GPM/pdf_TT/${this.state.dept}${this.state.year}${this.state.shift}.pdf` }}
                                    onLoadComplete={(numberOfPages, filePath) => {
                                        console.log(`number of pages: ${numberOfPages}`);
                                    }}
                                    onPageChanged={(page, numberOfPages) => {
                                        console.log(`current page: ${page}`);
                                    }}
                                    onError={(error) => {
                                        console.log(error);
                                    }}
                                    style={styles.pdf}
                                />
                            </Overlay>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>Class Time Table</Text>
                                    </Body>
                                </Left>
                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>

                                <Picker
                                    selectedValue={this.state.dept}
                                    style={[styles.input, styles.whiteFont, { color: 'black', paddingTop: 13, marginTop: 12 }]}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ dept: itemValue })}
                                    prompt='Department'
                                >

                                    <Picker.Item label="Civil Engineering" value="ce" />
                                    <Picker.Item label="Computer Engineering" value="co" />
                                    <Picker.Item label="Electrical Engineering" value="ee" />
                                    <Picker.Item label="Electronics Engineering" value="ec" />
                                    <Picker.Item label="Information Technology" value="it" />
                                    <Picker.Item label="Instrumentation Engineering" value="is" />
                                    <Picker.Item label="Rubber Technology" value="rb" />
                                    <Picker.Item label="Leather Technology" value="lt" />
                                    <Picker.Item label="Mechanical Engineering" value="me" />



                                </Picker>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>

                                <Picker
                                    selectedValue={this.state.year}
                                    style={[styles.input, styles.whiteFont, { color: 'black', paddingTop: 13, marginTop: 12 }]}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ year: itemValue })}
                                    prompt='Year'
                                >

                                    <Picker.Item label="Ist Year" value="1y" />
                                    <Picker.Item label="IInd Year" value="2y" />
                                    <Picker.Item label="IIIrd Year" value="3y" />
                                  




                                </Picker>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>

                                <Picker
                                    selectedValue={this.state.shift}
                                    style={[styles.input, styles.whiteFont, { color: 'black', paddingTop: 13, marginTop: 12 }]}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ shift: itemValue })}
                                    prompt='Shift'
                                >

                                    <Picker.Item label="1st Shift" value="1s" />
                                    <Picker.Item label="2nd Shift" value="2s" />
                                 



                                </Picker>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
                                    <Button
                                        title="submit"
                                        type="outline"
                                        onPress={() => this.setState({ isVisiblepdf: true })}
                                    />
                                </View>

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

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });