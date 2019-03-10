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

class RightToInformation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableHead1: ['Sr.No.','Name and actual Designation','Contact No.'],
          widthArr1: [40, 60,60],

        }
    }

    render() {
        const state = this.state;
        const tableData1 = [
          ['1', 'Prof. Swati Deshpande,\nPrincipal','Appealing Officer','Contact No:- 9029001925,\nEmail: gpmumbai@gpmumbai.ac.in'],
          ['2', 'Mr. P. P. Choudhary,\nAdministrative Officer','Information Officer'],
          ['3', 'Mrs. S. S. Kochrekar,\nRegistrar','Asst. Information Officer'],
          

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
                            <Text> Right To Information </Text>
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
                                <Text>Right To Information{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text> Accordingly, a Right to Information Cell has been established at Government Polytechnic, Mumbai{'\n\n'}</Text>



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

                    <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Documents under 4(1)(b)at Government Polytechnic Mumbai :</Text>

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
export default RightToInformation;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });