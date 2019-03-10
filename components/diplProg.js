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

class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['SR NO.', 'Diploma programmes', 'Shift', 'Intake'],
            tableHead2: ['SR NO.', 'Diploma Programmes', 'No. of Seats'],
            widthArr: [40, 60,60,40],
            widthArr2: [40, 60,40],

        }
    }

    render() {

        const images = {

            "1": require('../assets/feed_images/1.jpg'),
            "2": require('../assets/feed_images/2.jpg'),
            "3": require('../assets/feed_images/3.png')
        }
        const state = this.state;
        const tableData = [
            ['1.', 'Civil Engineering', '1st/2nd', '120'],
            ['2.', 'Electrical Engineering', '1st/2nd', '120'],
            ['3.', 'Mechanical Engineering', '1st/2nd', '120'],
            ['4.', 'Computer Engineering', '1st/2nd', '120'],
            ['5.', 'Electronics Engineering', '1st/2nd', '120'],
            ['6.', 'Information Technology', '1st/2nd', '120'],
            ['7.', 'Leather Technology', '1st/2nd', '120'],
            ['8.', 'Instrumentation ngineering', '1st/2nd', '120'],
            ['9.', 'Leather goods and Footwear technology', '1st/2nd', '120'],
        ];
        const tableData2 = [
            ['1.', 'Mechanical Engineering', '5'],
            ['2.', 'Civil Engineering', '5'],
            ['3.', 'Computer Engineering', '5'],
            ['4.', 'Electronics Engineering', '5'],
            ['5.', 'Information Technology', '5'],
        ];

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/me.jpg')} />
                        <Body>
                            <Text> Diploma Programmes   </Text>
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


                        <Card style={{ width: width * 0.80}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>Diploma Programmes</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Message{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Following are the details of sanctioned intake of the institute in various branches admissions are carried out through centralize admission process by the Directorate of Technical Education, Maharashtra state, Mumbai.</Text>


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
                        <Card style={{ flex: 1, width: width * 0.70 }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>Course Intake </Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem >
                                <ScrollView horizontal={true}>
                                    <View>
                                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                            <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text} />
                                        </Table>
                                        <ScrollView style={styles.dataWrapper}>
                                            <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                                {
                                                    tableData.map((rowData, index) => (
                                                        <Row
                                                            key={index}
                                                            data={rowData}
                                                            widthArr={state.widthArr}
                                                            style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                                                            textStyle={styles.text}
                                                        />
                                                    ))
                                                }
                                            </Table>
                                        </ScrollView>
                                    </View>
                                </ScrollView>
                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text></Text>
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
                        <Card style={{ width: width * 0.80}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>Diploma Programmes</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Message{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>The institute also admitting 25 supernumerary seats under the scheme for integrating Persons with Disabilities (SP-PWD) in the Mainstream of Technical and Vocational Education for admission of PWDs in Formal Programs and Various Non formal Programs as per Guidelines of MHRD.</Text>


                            </CardItem>
                            <CardItem>
                            <ScrollView horizontal={true}>
                                <View>
                                    <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                        <Row data={state.tableHead2} widthArr={state.widthArr2} style={styles.header} textStyle={styles.text} />
                                    </Table>
                                    <ScrollView style={styles.dataWrapper}>
                                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                            {
                                                tableData2.map((rowData, index) => (
                                                    <Row
                                                        key={index}
                                                        data={rowData}
                                                        widthArr={state.widthArr2}
                                                        style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                                                        textStyle={styles.text}
                                                    />
                                                ))
                                            }
                                        </Table>
                                    </ScrollView>
                                </View>
                            </ScrollView>
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