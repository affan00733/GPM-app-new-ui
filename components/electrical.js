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
          widthArr: [60, 60,60,60,40],
          widthArr2: [40, 60,60,40]

        }
    }
    render() {

        const state = this.state;
        const tableDataLab = [
    
          ['Electrical Machine Lab(007B)', '5,67,399/-', 'Prof.A.V.Patil', 'Mr. A.D. Gengaje\n Mr.S.T. Bhawari', '226'],
          ['Electrical Measurement Lab(007A)', '1,29,958/-', 'prof.S.R. Shiledar', 'Mr.S.T. Bhawari\n Mr. A.D. Gengaje', '226'],
          ['Basic Electrical(212)', '2,92,543/-', 'prof.M.P. Deshpande', 'Mr.S.S. Duakre', '--'],
          ['Electrical Computer Lab(116)', '6,73,713/-', 'prof.J.D. Waghmare', 'Mr.S.T. Bhawari', '257'],
          ['Switchgear & Protection Lab(007A)', 'Under Development', 'prof.J.D. Waghmare', 'Mr.S.S. Dukare', '--'],
    
        ];

        const tableDataFaculty = [
            ['1',  'Prof.J.D.Waghmare','I/C HOD','257'],
            ['2',  'Prof.M.P. Deshpande', 'Lecturer', '--'],
            ['3',  'Prof.S.R. Schiledar', 'Lecturer', '224'],
            ['4',  'Prof.A.V.Patil', 'Lecturer', '--'],
            ['5',  'Prof.S.B.Vishwarupe ', 'Lecturer ', '--'],
            ['6',  'Prof. M.S.Narkhede', 'Lecturer ', '--'],
            ['7',  'Prof. E.N.Khuspe ', 'Lecturer ', '--'],
            ['8',  'Prof. A.K.Dhulshette ', 'Lecturer ', '--'],
            ['9',  'Prof. V.U.Bhosle', 'Lecturer ', '--'],
            ['10', 'Prof. P.N.Padghan ', 'Lecturer ', '--'],
            ['11', 'Mr. A.D.Gengaje', 'Technical Lab Ass. ', '226'],
            ['12', 'Mr. S.S.Yedre', 'Technical Lab Ass. ', '--'],
            ['13', 'Mr. A.P.Marbhale', 'Technical Lab Ass. ', '--'],
            ['14', 'Mr.S.T.Bhawari', 'Electrician', '257'],
            ['15', 'Mr.S.S.Dukare', 'Electrician', '251'],
            ['16', 'Mr.A.M.Nikam', 'Hamal', '226'],
            ['17', 'Mr.A.M.Kadam', 'Hamal', '257'],
            ['18', 'Mr. T.K. Sonavne', 'Hamal', '--'],
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
                            <Text>Electrical Engineering   </Text>
                            {/* <Text note>Jan 15, 2018</Text> */}
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[1]} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
              


                <CardItem>
                    <Body>
                       
                    
                        <Card style={{ flex: 1 }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>Major Labs :	 <Text style={{ fontWeight: 'normal', opacity: 0.5 }}> @MKBHD  ï<Text>  2h</Text></Text></Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem >
                  <Text> The department of Electrical Engineering was established in 2009 with intake capacity of 60 students. 
                  The department empowers the students with the proficiency and knowledge required to excel in the dynamic field of Electrical to pursue higher education.
                   It also imparts technical knowledge and skills to students towards continuous improvement in education and placement and prepares the students to meet the challenges in the technical advancement to serve the community</Text> 


                </CardItem>
                <CardItem>
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
</CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>
                                Electrical Machine Lab {'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text> 
                                Electrical Machine Laboratory consolidates the theoretical concepts by means of practical and hands on approach to various machines such as Transformers,
                   AC and DC Motors, Generators, Rectifier, etc.</Text>


                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>
                        
                                Electrical Measurement Lab:
                    {'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text> 
                      
                                In this laboratory, experiments based on Electrical measurements, instrumentation, network theorems can be studied. About 20 experiments can be conducted in the lab. Major equipments are: Digital Multi meters, ammeters, voltmeters, wattmeters, energy meter, calibration of energy meter, power factor meter, megger, CT, PT, etc
                    </Text>


                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>
                        
                                Basic Electrical Lab:
                    {'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text> 
                      
                                The lab is equipped with various measuring instruments Rheostats, storage battery, transformer, dimmer stat, Wheatstone bridge, LCD projector,etc to perform the basic electrical engineering experiments.
                    </Text>


                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>
                        
                                Electrical Computer Lab:
                    {'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text> 
                        
                                In this lab 20 computers are available to perform the various practicals of subjects like Microcontroller & application, Electrical Transmission & Distribution, Computer Fundamental, Electrical Drawing & Circuit Simulation which consolidates the theoretical concept by means of practice using computers.</Text>


                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>
                        
                                Departmental Achievements:
                    {'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text> 
                        
                                The Department is running Community Polytechnic courses to transfer technology to the society. The Department conducted the workshop on Development of MSBTE lab manual of two subjects of Power Electronics, DC Machine &Transformer. The Students of third year engineering achieved First Prize on National Level Project Competition 2012 at Sangali.</Text>


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
                                        <Text style={{ fontWeight: 'bold' }}>Faculty And Staff Details</Text>
                                    </Body>
                                </Left>
                            </CardItem>
<CardItem>
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
