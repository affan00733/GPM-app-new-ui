
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

class CardPrinc extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
            scrollY: new Animated.Value(0),
            tableHeadLab: ['Name of Lab', ' Lab Incharge', ' Supporting Staff', ' Total Investment', ' Ext No'],
            widthArrLab: [60, 60, 60, 60, 60],
            tableHeadFaculty: ['Sr no', 'Name of the Faculty/staff', 'Position', 'Ext no'],
            widthArrFaculty: [40,60,60,40]
        }
      }
    render() {
        const state = this.state;
        const tableDataLab = [

            ['Chemistry', 'Prof.S.M Patil', 'Mr.V.M.Bhor', '10,28,150', '252'],
            ['Physics', 'Prof.A.V Pagar', 'Mrs.R.Shikalgar', '12,25,000', '253'],
            ['Language lab', 'Prof.S.S.Kulkarni', 'Mr.V.M.Bhor', '10,00,000', '251'],
      
          ];
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
        // for (let i = 0; i < 30; i += 1) {
        
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
                            <Text>Science and Humanities </Text>
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
                                        <Text style={{ fontWeight: 'bold' }}>Science and Humanities<Text style={{ fontWeight: 'normal', opacity: 0.5 }}> @MKBHD  ï<Text>  2h</Text></Text></Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Message{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>Science and Humanity department is the backbone of technical education. This department is as old as government polytechnic Mumbai and established in the year 1960. This department offers different subjects like Physics, Chemistry, Mathematics and English etc.	</Text>



                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>APPLIED CHEMISTRY{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>Chemistry is a basic Science subject which is essential for all Engineering Courses. It gives knowledge of engineering materials, their properties related applications and selection of material for engineering applications. Due to technological progress there are hazardous effects on environment and human life. The core knowledge of environment effect will bring awareness among students about the precautions and preventions to be taken to reduce the ill effects .This subject will generate curiosity of carrying out further development in engineering field.</Text>
                            
                            
                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>APPLIED PHYSICS{'\n\n'} </Text>
                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>The special feature of the subject is to develop the laboratory skills using Principals of Scientific Phenomenen.This course will satisfy the entire need of the technical students for his development in technical field. Different topics have been included in the syllabus will develop intellectual skills of the students. The focus of the subject is to develop psychomotor skill.</Text>
                                
                                
                                </CardItem>


                                <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>COMMUNICATION SKILLS{'\n\n'} </Text>
                            </CardItem>


                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>Since English is the global language today, the basic knowledge of this language is essential for everyone. To cope up with the challenges of the modern world, every engineering and technology students need the help of English. The major part of their work experience needs certain knowledge of this language. At worksite, on shop floor or in fields, they are required to take instructions from superiors and pass them onto subordinates. For writing letters, circulars, memos, notice and reports are the important task for engineering students for which they might in need of English language which transforms them into future technician.	</Text>
                            </CardItem>


                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>APPLIED MATHEMATICS{'\n\n'} </Text>
                            </CardItem>


                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>Applied mathematics help students to learn basic facts, concepts, principle and procedure of mathematics as a tool to analyze Engineering problems and lay down foundation for understanding the engineering and core technology subjects. Numerical analysis method is used to develop efficient algorithms for solving problems in science and technology and for to prepare programmes of Computer technology. Laplace transforms and Fourier transform resolves a function or signal into its mode of vibration. Laplace transform is used for analysis of linear-time invariant system such that electrical circuits, harmonic oscillation, optical devices and mechanical systems.	</Text>
                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>MAJOR LABS{'\n\n'} </Text>
                            </CardItem>




   
                    <ScrollView horizontal={true}>
                      <View>
                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                          <Row data={state.tableHeadLab} widthArr={state.widthArrLab} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                          <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                            {
                              tableDataLab.map((rowData, index) => (
                                <Row
                                  key={index}
                                  data={rowData}
                                  widthArrLab={state.widthArr}
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
                                <Text>{'\n\n'}</Text>
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
                                        <Text style={{ fontWeight: 'bold' }}><Text style={{ fontWeight: 'normal', opacity: 0.5 }}> @MKBHD  ï<Text>  2h</Text></Text></Text>
                                    </Body>
                                </Left>
                            </CardItem>
                           
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>FACULTY AND STAFF DETAILS{'\n\n'} </Text>
                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <View style={styles.container}>
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
                  </View>
                                              </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>{'\n\n'}</Text>
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
                                        <Text style={{ fontWeight: 'bold' }}><Text style={{ fontWeight: 'normal', opacity: 0.5 }}> @MKBHD  ï<Text>  2h</Text></Text></Text>
                                    </Body>
                                </Left>
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
export default CardPrinc;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });
