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
          tableHead1: ['Equipment Name','Quantity'],
          tableHead2: ['SR NO.','Name of Faculty/Staff','Position','Ext no'],
          
          widthArr1: [80,60],
          widthArr2: [40, 60,60,40],

        }
    }
    render() {
        const state = this.state;
        const tableData1 = [
         ['Sever with intel xeo processor','01'],
         ['computers with intel core 2 duo Processor','04'],
         ['SHARP Photocopier cum Printer (35ppm)','03'],
         ['RICOH Gestener(120ppm)','01'],
         ['Management information system Software','01'],
        ];
        const tableData2 = [
         ['1.','Mr. N.N. Ansari','Controller of examination','240'],
         ['2.','Mrs. G. Gayakwad','Programmer','241'],
         ['3.','Mr. V.R. Gawade','clerk','241'],
         ['4.','Mrs. P.S. Gholap','Data entry Operator','241'],
         ['5.','Mr. G.P Raorane','Data entry Operator','241'],
         ['6.','Mrs. C.C. gawade ','peon','241'],
         ['7.','Mr. A.G.Salve','Peon','241'],
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
                            <Text> Examination Cell   </Text>
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
                                        <Text style={{ fontWeight: 'bold' }}>Examnition cell</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Message{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>The Examination Cell of Government Polytechnic Mumbai was established in 1994 with the commencement of academic autonomy. Examination Cell is mainly responsible for conduction of various examinations of different diploma programs offered by the institute, declaration of results, and providing the diploma certificates to the students who have successfully completed these diploma programs. These responsibilities make the Examination Cell the backbone of this autonomous institute. </Text>


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
                                        <Text style={{ fontWeight: 'bold' }}>Activities performed by examination cell</Text>
                                    </Body>
                                </Left>
                            </CardItem>


                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>{'\n\n'}Course Registration{'\n\n'} Examination Registration{'\n\n'} theory and practical examination conduction{'\n\n'}Award of Diploma Certificates{'\n\n'}Issue Equivalece certificates, Provisional Certificate,Migration Certificate,Verifcation Certificate,Transcript etc.</Text>
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
                            <Text style={{ fontWeight: 'bold' }}>Examination cell is Equipped with:</Text>
                        </Body>
                    </Left>
                </CardItem>
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

                <CardItem cardBody style={{ paddingLeft: 10 }}>
                    <Text></Text>
                </CardItem>
                <CardItem cardBody style={{ paddingLeft: 10 }}>
                   
                    <Text style={{ fontWeight: 'bold' }}>Faculty/staff details</Text>
                </CardItem>
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