import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
    Animated
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
        super(props)

        this.state = {
            scrollY: new Animated.Value(0),
            tableHead1: ['Sr no', 'name of company', 'Sr no', 'name of company'],
            tableHead2: ['Academic year', 'Eligible & Intersted students for placement', 'No. of palcement', '% of palcement'],
            tableHead3: ['SR NO.', 'Name of Faculty/Staff', 'Position', 'Ext no'],

            widthArr1: [40, 60, 40, 60],
            widthArr2: [40, 60, 40, 60],
            widthArr3: [40, 60, 40, 40],


        }
    }
    render() {

        const images = {

            "1": require('../assets/feed_images/1.jpg'),
            "2": require('../assets/feed_images/2.jpg'),
            "3": require('../assets/feed_images/3.png')
        }
        const state = this.state;
        const tableData1 = [
            ['1.', 'A.C.C. Concrete', '25.', 'Hitesh Marine'],
            ['2.', 'Prothious', '26.', 'Standard Printer Providers'],
            ['3.', 'Godrej Ltd.', '27.', 'Shree khodiyar Group of company'],
            ['4.', 'Atlas Copco', '28.', 'Mukand Ltd.'],
            ['5.', 'Larsen &amp; Toubro, (ECC Div.)', '29.', 'EATON, Pune'],
            ['6.', 'L &amp; T Ltd, Powai', '30.', 'Avaya Global Connect Ltd.'],
            ['7.', 'Fenesta Building System', '31.', 'TATA Consultancy Services'],
            ['8.', 'Tata Power Co. Ltd.', '32.', 'ATE Enterprises Pvt. Ltd.'],
            ['9.', 'Tata Consultancy Engg. (TCE)', '33.', 'ITD Cementation India Ltd.'],
            ['10.', 'Mahindra &amp; Mahindra', '34.', 'Sterling &amp; Wilson'],
            ['11.', 'Voltas', '35.', 'IBM'],
            ['12.', 'Emerson Network Power (I)', '36.', 'TATA Power (Sed. Div.)'],
            ['13.', 'Essar Group Hozira Gujarat', '37.', 'CMS Computers'],
            ['14.', 'Super Technical Enterprises, Dubai', '38.', 'Remi Process plant Pvt. Ltd.'],
            ['15.', 'Eviska InfoTech Pvt. Ltd.', '39.', 'Cosmos Group'],
            ['16.', 'Ankur Enterprises, Mumbai', '40.', 'Bajaj Auto'],
            ['17.', 'Ispat Industries Ltd.', '41.', 'TATA Motors'],
            ['18.', 'Sutherland Global', '42.', 'Shiv Tech Marin'],
            ['19.', 'Blue Star', '43.', 'HCL'],
            ['20.', 'Simkraft', '44.', 'Mahanagar Gas Ltd.'],
            ['21.', 'C.S. Diesel Engg.,Andheri', '45.', 'Siemens Ltd'],
            ['22.', 'Mahindra &amp; Mahindra Ltd.', '46.', 'FLSmidth Pvt. Ltd.'],
            ['23.', 'Texican Electronics', '47', 'Wipro InfoTech'],
            ['24.', 'ACCEL Frontline', '48', 'Owens Corning India Pvt. Ltd.'],
        ];
        const tableData2 = [
            ['2006-07', '200', '171', '85%'],
            ['2007-08', '200', '197', '98%'],
            ['2008-09', '200', '67', '33%'],
            ['2009-10', '112', '46', '50%'],
            ['2010-11', '65', '49', '70%'],
            ['2011-12', '100', '65', '65%'],
            ['2012-13', '50', '24', '48%']
        ];
        const tableData3 = [
            ['1.', 'Shri B.B. Kulkarni', 'I/c T&P officer', '243'],
            ['2.', 'Smt S.R. Hushare', 'Tech. Lab assistant', '243'],
            ['3.', 'R.J.Patil', 'peon', '-'],
        ];
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/me.jpg')} />
                        <Body>
                            <Text>Placement Services    </Text>
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


                        <Card style={{ flex: 1 }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>Placement Services</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Message{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Placement cell acts as a facilitator and tries to provide best match between the graduate aspirationís and the industry requirements. The cell maintains close liaison with various industrial establishments, which conduct campus interviews and select graduate students from all disciplines. The placement cell provides infra-structural facilities to conduct group discussion, test and interviews.</Text>


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
                                        <Text style={{ fontWeight: 'bold' }}>Infrastructure</Text>
                                    </Body>
                                </Left>
                            </CardItem>


                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>{'\n\n'}Training and Placement cell maintains a well equipped air conditioned Auditorium hall. The hall has audio visual facility with the state of the art infrastructure. The auditorium hall is used for Conducting campus interviews, Seminars and guest lectures, State and National level training program/workshop.{'\n\n'}Industrial training in reputed industries is arranged for various disciplines to provide industrial exposure to the students. Seminar and guest lectures are arranged to expose the students to the latest technology trends and also to educate them on capabilities required to deal with current demand. {'\n\n'}Needless to say, our graduates are perfect combination of rigorous thinking, hard work, and strong fundamentals.</Text>
                            </CardItem>
                            <CardItem style={{ paddingVertical: 0 }}>

                                <Text style={{ fontWeight: 'bold' }}>Our Recruiters</Text>
                            </CardItem>
                            <CardItem>
                                <ScrollView horizontal={true}>
                                    <View>
                                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                            <Row data={state.tableHead1} widthArr={state.widthArr1} style={styles.header} textStyle={styles.text} />
                                        </Table>
                                        <ScrollView style={styles.dataWrapper}>
                                            <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                                {
                                                    tableData1.map((rowData, index) => (
                                                        <Row
                                                            key={index}
                                                            data={rowData}
                                                            widthArr={state.widthArr1}
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
                                <CardItem>
                                    <Text style={{ fontWeight: 'bold' }}>Placement details from 2006-2013</Text>
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
                                <CardItem>
                                    <Text style={{ fontWeight: 'bold' }}>faculty and staff details</Text>
                                </CardItem>
                                <CardItem>

                                <ScrollView horizontal={true}>
                                    <View>
                                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                            <Row data={state.tableHead3} widthArr={state.widthArr3} style={styles.header} textStyle={styles.text} />
                                        </Table>
                                        <ScrollView style={styles.dataWrapper}>
                                            <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                                {
                                                    tableData3.map((rowData, index) => (
                                                        <Row
                                                            key={index}
                                                            data={rowData}
                                                            widthArr={state.widthArr3}
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
                        </Card>
                    </Body>
                </CardItem>
            </Card >

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