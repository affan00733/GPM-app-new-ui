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
          tableHead: ['Name of lab','Total Investment','Name of lab in charge','Supporting staff','ext no.'],
          tablehead2:['Sr no.','Name of faculty/staff','Position','ext no.'],
          widthArr: [60, 60,60,60,30],
          widthArr2: [30, 60,60,30]

        }
    }

    render() {
        const state = this.state;
    const tableDataLab = [

      ['Network Access Center', '7,50,000/-', 'Prof.M.S. Arade', 'Mr.P.B.Yadav', '223'],
      ['Web Designing Lab', '11,25,820/-', 'Prof.M.S. Arade', 'Mr.P.B.Yadav', '220'],
      ['Hardware & Networking Lab', '11,25,820/-', 'Prof.M.S. Arade', 'Mr.P.B.Yadav', '220'],
      ['Programming Laboratry', '15,30,000/-', 'Prof.N.A. Wankhade', 'Mr.Jayant Padte', '278'],
      ['Audio Visual Laboratry', '12,00,000/-', 'Prof.N.A. Wankhade', 'Mr.K.G. Karulkar', '277'],

    ];
    const tableDataFaculty = [
        ['1', 'Dr.R.A.Patil', 'I/C HOD', '277'],
        ['2', 'Prof. Madhuri S.Arade', 'Lecturer', '220'],
        ['3', 'Prof. Namrata Wankhade', 'Lecturer', '278'],
        ['4', 'Mr.K.G. Karulkar', 'Tech.Lab Assistant', '277'],
        ['5', 'Mr.Jayant Padte', 'Lab Assistant', '277'],
        ['6', 'Mr.P.B.Yadav', 'Lab Assistant', '220'],
        ['7', 'Mr.J.N.Sargar', 'Peon', '--'],
        ['8', 'Mr.N.Rathod', 'Peon', '--'],
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
                            <Text> Information Technology  </Text>
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
                                        <Text style={{ fontWeight: 'bold' }}> Information Technology </Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Vission{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Develop IT professionals to solve real life problems{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Mission</Text>
                               


                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>1) Information technology department is committed to...{'\n\n'}
                      	  2)Offer need based quality education for lifelong learning.{'\n\n'}
                          3)Continuous up gradation of curriculum and laboratories through industry institute interaction.{'\n\n'}
                          4)Conduct short term programmes to serve society.{'\n\n'}
                          5)Develop entrepreneurial capabilities.{'\n\n'}{'\n\n'}
                          
                          
                         {'\n\n'} The department of Information Technology was established in 2001 with intake capacity of 40 students. 
										In 2007 intake capacity is increased to 60 students. In 2011 minority shift (second shift) is started with intake capacity of 60 students. 
										Information Technology department will strive to achieve excellence in education so as to enable students to establish themselves as world-class technicians. 
										The department will provide vibrant infrastructure and software application tool sets to empower them with the proficiency and knowledge required to excel in the dynamic field of IT and to pursue higher education.
										Information Technology department is committed to create and disseminate knowledge through innovative teaching & learning to provide world class technicians at diploma level. 
										It also Imparts technical knowledge and skills to students towards continuous improvement in education and placement and prepare the students to meet the challenges in the technical advancement to serve the community.{'\n\n'} </Text>

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
                                        <Text style={{ fontWeight: 'bold' }}></Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Major Labs:</Text>

                            </CardItem>
                            <ScrollView horizontal={true}>
                      <View>
                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                          <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                          <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                            {
                              tableDataLab.map((rowData, index) => (
                                <Row
                                  key={index}
                                  data={rowData}
                                  widthArr={this.state.widthArr}
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
                                <Text>Department Laboratories:{'\n\n'}1. Network Access Center:</Text>

                            </CardItem>
                          
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>The lab is equipped with 20 Acer Intel core 2 duo 2.93Ghz, 4GB RAM, 500GB HD, Windows 7 OS.
										    All computers are connected in LAN, with internet facility. </Text>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>2.Web Designing Lab:</Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Well furnished, Air conditioned Lab equipped with 20 Lenovo i5PCS(Intel I5, 4 GB RAM, 500GB HD with 64 bit Windows7), Local Area Network with Internet facility.Mainly used for web designing, computer fundamentals, VB.NET</Text>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>3.Hardware and networking Laboratory:</Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>The lab is equipped with 15 Acer Intel core 2 duo 2.93Ghz, 4GB RAM, 500GB HD, Windows 7 OS. 
										It is mainly used for Computer architecture and organization and Data communication and networking.
										Students learn assembling of PC in this lab.</Text>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>4.Programming Laboratory:</Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>The lab is equipped with 20 Acer Intel core 2 duo 2.93Ghz, 4GB RAM, 500GB HD, Windows 7 OS. 
										{'\n\n'}All computers are connected in LAN, with internet facility. It is mainly used for subjects Relational Database Management System, Object Oriented Programming, and Java.
                                        </Text>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>5.Audio Visual Laboratory:</Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Well furnished, Air conditioned Lab equipped with Lenovo i5 PCS(Intel I5, 4 GB RAM, 500GB HD with 64 bit Windows7), Local Area Network with Internet facility.Student perform practicals of Multimedia and Computer Graphics.
                                        </Text>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Faculty And Staff Details:</Text>

                            </CardItem>
                            <ScrollView horizontal={true}>
                      <View>
                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                          <Row data={this.state.tablehead2} widthArr={this.state.widthArr2} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                          <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                            {
                              tableDataFaculty.map((rowData, index) => (
                                <Row
                                  key={index}
                                  data={rowData}
                                  widthArr={this.state.widthArr2}
                                  style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                                  textStyle={styles.text}
                                />
                              ))
                            }
                          </Table>
                        </ScrollView>
                      </View>
                    </ScrollView>
                        
                            
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