import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions  ,
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
          tableHead: ['Name of lab','Major equipment','Total Investment','Name of lab in charge','Supporting staff'],
          tablehead2: ['Program','Duration (in weeks)','Eligiblity','Contact person'],
          tablehead3:['Sr no.','Name of faculty/staff','Position','ext no.'],
          widthArr: [ 60,60,60,60,60],
          widthArr2: [80,60,60,60],
          widthArr3: [40, 60,60,40]


        }
      }
    render() {

        const state = this.state;
        const tableDataPro = [
    
          ['Computer Hardware & Networking', '6 Weeks', '10th Pass', 'Prof. V. S. Lokhande','Mr. R.G Waghmare'],
          ['Windows server administration & infrastructure management', '15 Weeks', '10th Pass', 'Mr. R.G Waghmare', 'Prof. V. S. Lokhande'],
          ['Computer network technology infrastructure design & management', '8 Weeks', '10th Pass', 'Mr. R.G Waghmare', 'Prof. V. S. Lokhande'],
         
    
        ];

    const tableDataLab = [

      ['Software Laboratory (303A)', 'Computer,printer,switch,visual studio,Mac PC', '10,48,797/-', 'Prof. A. M. Bhatt Oza', 'Mr. S.A. Rokade'],
      ['Hardware laboratory (303B)', 'Computer,printer,switch,turbo C', '7,62,888/-', 'Prof. A. M. Bhatt Oza', 'Mr. S.A. Rokade'],
      ['Database Laboratory (302A & 302B)', '---------------', '14,54,000', 'Prof. M H Bhalerao', 'Mrs. S.C. Badage'],
      ['Electronics Laboratory (LT Room no. 7)', 'Computer,CRO,8085 kits,digital kits', '7,00,000', 'Prof. J. S. Patil', 'Mrs. S. D. Kasare'],
      ['Network laboratory', 'Network Laboratory', '4,00,000', 'Prof. V.S. Lokhande', 'Mr. R. G. Waghmare'],
      [' Project Laboratory', ' Computers', '4,00,000', 'Prof. R. S. Lokare', 'Mrs. S. C. Badage'],

    ];

    const tableDataFaculty = [
        ['1', ' Prof. V.M. Aswar', 'I/C HOD', '290'],
        ['2', ' Prof. S. R. Nagargoje', 'Lecturer', '288'],
        ['3', 'Prof. V.A. Patil', 'Lecturer', '289'],
        ['4', 'Prof. R.S. Lokare', 'Lecturer', '288'],
        ['5', 'Prof. P.S. Chame ', 'Lecturer', '289'],
        ['6', 'Prof. V.S. Lokhande', 'Lecturer', '--'],
        ['7', 'Prof. R.V. Molavade', 'Lecturer', '--'],
        ['8', ' Prof. A.J.Bhatt', 'Lecturer', '--'],
        ['9', 'Prof.A. M. Bhatt Oza', 'Lecturer', '292'],
        ['10', '  Prof.J.S. Patil', 'Lecturer', '288'],
        ['11', ' Mr. V.V. Gurav', ' A. V. Aids Technician', '--'],
        ['12', ' Mr. S. A. Rokade', 'A. V. Aids Technician', '292'],
        ['13', ' Mrs. S.C. Badage', 'Technical Lab. Assistant', '291'],
        ['14', ' Mr. R.G. Waghmare', 'Technical Lab. Assistant', '295'],
        ['15', 'Mrs. S.D. Kasare', 'Technical Lab. Assistant', '297'],
        ['16', 'Mr. S. M. Bhalerao', 'Peon', '293'],
        ['16', 'Mr. R. S. Mane', 'Peon', '293'],
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
                            <Text>Computer engineering    </Text>
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
                                        <Text style={{ fontWeight: 'bold' }}>Major Labs:</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem >
                  <Text>The Computer Engineering Department was established in the year 1994 and the 
                    first batch of first shift received their diploma award in the year 1997. The 
                    second shift of diploma program for minority was started in 2011 and the first 
                    batch of final year is in pipeline. Nearly 120 students (including both shifts) 
                    are adtted each year into the post SSC Diploma Programme, out of which the 
                    second shift is reserved only for minority. The diploma programme is a three 
                    years (six semesters) course, the curriculum being updated every 3-4 years 
                    according to the need of current technology used in the industries. The 
                    department with its state of the art laboratories and young and dynamic 
                    facultiemis are involved in providing quality education at diploma level.{'\n\n'} Computer engineering is a highly innovative branch in computer and information 
                        technology and covers major areas of software, hardware, networking, network 
                        security, object oriented programming languages, event driven programming 
                        languages, latest SQL database like SQL Server Oracle, computer graphics, 
                        Multimedia technology, web design and information technology.</Text> 


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
                        Software Laboratory (303A){'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text> 
                        This laboratory is utilised for software related subjects in which the object 
                        oriented programming languages and event driven programming languages practical 
                        is conducted.In addition to this it also covers the multimedia technology.</Text>


                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>
                        
                                Hardware Laboratory (303B)
                    {'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text> 
                      
                                This is one of the core laboratories of Computer Engineering Dept. This lab is 
                        utilized to understand fundamental concepts of computer systems .It covers the 
                        Computer Fundamentals, C programming and computer workshop practicals.
                    </Text>


                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>
                        
                        Database Laboratory (302A & 302B)
                    {'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text> 
                      
                                This laboratory is utilised for Database related subjects which covers the SQL 
                        server 2011 and Oracle 11g databases.It is also utilised for programming 
                        practicals like object oriented programming languages and event driven 
                        programming languages subjects.
                    </Text>


                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>
                        
                                Electronics Laboratory(LT Room no. 7)
                    {'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text> 
                        
                                This laboratory is utilised
 for Electronics related practicals like Electronic workshop, Basic electronics, Digital Techniques and Microprocessor 8085 and 8086 which is base for Computer Fundamental.</Text>


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
                        <Card style={{ flex: 1 ,width: width * 0.70}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>Contnuing Education Program</Text>
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
                              tableDataPro.map((rowData, index) => (
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
                          
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
        
                            </CardItem>
                            <CardItem style={{ paddingVertical: 0 }}>
                                <Left>
                                    <Text>Faculty And Staff Details</Text>
                                </Left>
                                <Body>

                                </Body>
                                <Right>

                                </Right>
                            </CardItem>
                            <CardItem>
                            <ScrollView horizontal={true}>
                      <View>
                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                          <Row data={state.tablehead3} widthArr={this.state.widthArr3} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                          <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                            {
                              tableDataFaculty.map((rowData, index) => (
                                <Row
                                  key={index}
                                  data={rowData}
                                  widthArr={this.state.widthArr3}
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