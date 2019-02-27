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

import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
const logo = require("./images/GDG.jpg");
const cardImage = require("./images/serverless.jpg")
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import styles from '../src/styles/styles'

const logo1 = require("./images/mkbhd.jpg");

class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

            tableHeadFaculty: ['Sr no', ' Name of the Faculty/Staff', ' Position'],
            widthArrFaculty: [150, 250, 250]
        }
    }
    render() {
        const state = this.state;
        const tableDataFaculty = [
            ['1', 'Dr.A.U.Warad', 'I/C Head, Science and Humanity', '251'],
            ['2', 'Prof. R.A.PAWAR', 'Lecturer in Mathematics', '251'],
            ['3', 'Prof. S.M.PATIL', 'Lecturer in Chemistry', '252'],
            ['4', 'Prof. Y.D.BHIDE', 'Lecturer in Physics', '253'],
            ['5', 'Prof. A.V.PAGAR', 'Lecturer in Physics', '253'],
            ['6', 'Prof. L.M.KHADKE', 'Lecturer in Chemistry', '252'],
            ['7', 'Prof. S.S.KULKARNI', 'Lecturer in English', '251'],
            ['8', 'Prof. K.R.KULKARNI', 'Lecturer in English', '251'],
            ['9', 'Prof. J.R.RATNALI', 'Lecturer in Mathematics', '251'],
            ['10', 'Prof. V.S.PATIL', 'Lecturer in Mathematics', '251'],
        ];
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
                            <Text>Rubber Technology </Text>
                            {/* <Text note>Jan 15, 2018</Text> */}
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[1]} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>


                    </Left>
                </CardItem>


                <CardItem>
                    <Body>

                    <Card style={{ flex: 1, width: width * 0.70 }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>Rubber Technology<Text style={{ fontWeight: 'normal', opacity: 0.5 }}> @MKBHD  ï<Text>  2h</Text></Text></Text>
                                    </Body>
                                </Left>
                            </CardItem>
                          
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Diploma program in Rubber Technology is a unique program in Western India being conducted in collaboration with All India Rubber Industries Association (AIRIA).The Program is designed with the involvement of industry experts to meet the rubber industry needs.	</Text>
                                <Text>After Completing this programme students will develop competencies in quality control, production and testing of rubber products.</Text>
                                <Text>	The Passouts have job potentials in Rubber product manufacturing units, raw material manufacturers, and other ancillary products in marketing,production and Quality Audit. </Text>



                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Major Labs:{'\n\n'} </Text>
                                <Text>Rubber Processing Laboratory:{'\n\n'} </Text>
                                <Text>Rubber Processing Lab carries out processing of various actiivities in extraction of rubber</Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Rubber Testing Laboratory:{'\n\n'} </Text>
                                <Text>Rubber testing Lab carries out physical testing of the rubber vulcanized which necessary to trace out the shortfalls in processing methods, to control and maintain the quality of products and to undertake research and development work</Text>


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
                                        <Text style={{ fontWeight: 'bold' }}>Rubber Technology<Text style={{ fontWeight: 'normal', opacity: 0.5 }}> @MKBHD  ï<Text>  2h</Text></Text></Text>
                                    </Body>
                                </Left>
                            </CardItem>
                          
                            
                            
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Faculty & Staff Details:{'\n\n'} </Text>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                {/* <View style={styles.container}> */}
                                    <ScrollView horizontal={true}>
                                        <View>
                                            <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                                <Row data={state.tableHeadFaculty} widthArr={state.widthArrFaculty} style={styles.header} textStyle={styles.text} />
                                            </Table>
                                            <ScrollView style={styles.dataWrapper}>
                                                <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                                    {
                                                        tableDataFaculty.map((rowData, index) => (
                                                            <Row
                                                                key={index}
                                                                data={rowData}
                                                                widthArrFaculty={state.widthArr}
                                                                style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                                                                textStyle={styles.text}
                                                            />
                                                        ))
                                                    }
                                                </Table>
                                            </ScrollView>
                                        </View>
                                    </ScrollView>
                                {/* </View> */}
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