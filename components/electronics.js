import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions ,
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
          tableHead: ['Name of lab','Total Investment','Name of lab in charge','Supporting staff','Ext no.'],
          tablehead2:['Sr no.','Name of faculty/staff','Position','Ext no.'],
          widthArr: [60, 60,60,60,30],
          widthArr2: [30, 60,60,30]      
          }
    }

    render() {
        const state = this.state;
        const tableDataLab = [
    
          ['Power Electronics Lab', '7,00,000/-', 'Prof.S.R. Kasture', 'Mr.P.B.Dongare', '267'],
          ['VLSI Lab', '1,00,000/-', 'Prof.S.R. Kasture', 'Mr.P.B.Dongare', '267'],
          ['Digial Electronics Lab/LIC Lab', '1,40,000/-', 'Prof.S.G.Sakhre', 'Mr.D.S.Garude', '270/306'],
          ['Basic /Applied Electronics Lab', '4,00,000/-', 'Prof.S.A.Ghodake', 'Mr.K.B.Kaple', '272'],
          ['Workshop/PCB', '1,00,000/-', 'Prof.S.A.Ghodake', 'Mr.K.B.Kaple', '272'],
          ['Audio Visual Lab/Computer Lab/Microcontroller Lab', '7,50,000/-', 'Prof.A.S.Aghav', 'Mr.D.S.Garude', '270'],
    
        ];
        const tableDataFaculty = [
            ['1', 'Prof. V.P.Yavalkar', 'I/C HOD', '--'],
            ['2', 'Prof. Sanjay Ahare', 'I/C HOD', '--'],
            ['3', 'Prof. S.R.Kasture', 'Lecturer', '--'],
            ['4', 'Prof. H.M.Pardeshi', 'Lecturer', '--'],
            ['5', 'Prof. R.A.Patil', 'Lecturer', '--'],
            ['6', 'Prof. B.J.Nimbalkar', 'Lecturer', '--'],
            ['7', 'Prof. S.V.Bannore', 'Lecturer', '--'],
            ['8', 'Prof. A.D.Kalyankar', 'Lecturer', '--'],
            ['9', 'Prof. P.A.Khande', 'Lecturer', '--'],
            ['10', 'Prof. Avanti Ghagde', 'Lecturer', '--'],
            ['11', 'Prof. T.S.Padvi', 'Lecturer', '--'],
            ['12', 'Prof. S.C.Bulani', 'Lecturer', '--'],
            ['13', 'Prof. V.Y.Patil', 'Lecturer', '--'],
            ['14', 'Prof. T.K.Balsaraf', 'Lecturer', '--'],
            ['15', 'Prof. Sanyogita Puri', 'Lecturer', '--'],
            ['16', 'Prof. S.M.Patil', 'Lecturer', '--'],
            ['17', 'Prof. S.C.Dhir', 'Lecturer', '--'],
            ['18', 'Prof. M.B.Ghodke', 'Lecturer', '264'],
            ['19', 'Prof. A.S.Aghav', 'Lecturer', '--'],
            ['20', 'Prof. S.H.Sisodiya', 'Lecturer', '264'],
            ['21', 'Prof. V.S.Pawar', 'Lecturer', '264'],
            ['22', 'Prof. A.S.Pawar', 'Lecturer', '264'],
            ['23', 'Prof. P.P.Rajhans', 'Lecturer', '--'],
            ['24', 'Prof. S.R.Nagargoje', 'Lecturer', '--'],
            ['25', 'Mr. P.B.Dongre', 'Tech.Lab Assistant', '267'],
            ['26', 'Mr. K.B.Kaple', 'Tech.Lab Assistant', '272'],
            ['27', 'Mr. D.S.Garude', 'Tech.Lab Assistant', '270'],
            ['28', 'Mr. J.K.Sahu', 'Tech.Lab Assistant', '--'],
            ['29', 'Mr. V.V. Apandkar', 'Tech.Lab Assistant', '--'],
            ['30', 'Mrs. S.S.Tondvalkar', 'Peon', '--'],
            ['31', 'Mr. S.P.Bule', 'Hamal', '--'],
            ['32', 'Mr. H.S.Suryavanshi', 'Hamal', '--'],
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
                            <Text> Electronics Engineering </Text>
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
                                <Text>{'\n\\n'}</Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Electronics Engineering</Text>
                              


                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>The department of Industrial Electronics Engineering was established in 1988 with intake capacity of 60 students with MSBTE,
                       Mumbai as a controlling authority for curriculum and examinations for strengthening quality of technical education. 
                       Government Polytechnic Mumbai was awarded Autonomy for curriculum and examinations in 1994.
                       In 2006, the department renamed as Electronics Engineering Department. In 2010, second shift was started with intake capacity of 60 students.
                       The department will strive to achieve excellence in education so as to enable students to establish themselves as world-class technicians and practicing engineer.
                       The department has vibrant infrastructure and with Designing softwareís like ORCAD, MATLAB, VLSI labs etc. to empower them with the proficiency and knowledge required to excel in the dynamic field of Electronics
                       and Technology to pursue higher education. It also imparts technical knowledge and skills to students towards continuous improvement in education and placement and prepare the students to meet the challenges in the
                        technical advancement to serve the community. </Text>

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
                                <Text>Power Electronics Lab:</Text>

                            </CardItem>
                          
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>It is awith the state-of-the-art instrumentation for design, simulation, 
                                                layout, prototyping, and testing of switching/analog circuits. The research in 
                                                the Power Electronics Laboratory at Government Polytechnic Mumbai involves modeling, control, topologies, 
                                                and integration of switching converters, inverters, class-D power amplifiers, 
                                                soft switching techniques, single-phase and three-phase power factor correction 
                                                methods, single phase and three-phase active power filters, power conversion for 
                                                alternative energy sources, etc. </Text>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>VLSI Lab:</Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>  This lab is well equipped with 20 Pentium ñ IV IBM, which are compatible with 
                                                MATLAB 6.1, Xilinix ISE 8.2i, Cadence. In addition, this lab houses DSP 
                                                processors like TMS 320 C5156 & TMS320 F2407 with code composer studio, Advanced 
                                                FPGA kits, advanced interface boards. LASER Printer, CD writer are also 
                                                available in the laboratory.
                                            </Text>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Digital Electronics/Linear Integrated Circuit Lab:</Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text> In this lab experiments pertaining to linear and Digital integrated circuits can 
                                                be carried out. This lab is well equipped with necessary trainer kits and 
                                                accessories for conducting about 50 experiments. This Lab has Equipments which 
                                                are: Demorgan Therom kit, Adder/Subtractor, Multiplexer/Demultiplexer, 
                                                Encoder/Decoder, Counter, Flip-Flop, Ring Counter ,Logic Gates, Shift Registers, 
                                                Magnitude Comparator, Filters, Oscillators, Amplifiers, Modulators, Transmitters 
                                                and Rectifiers.
                                            </Text>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Basic Electronics/Applied Electronics Lab:</Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>In this laboratory, experiments based on Electronics devices characteristics, 
                                                Network theorems, simple Amplifier circuits and their response can be studied. 
                                                About 35 experiments can be conducted in the lab. Major equipments are: CROs 
                                                function generators, Digital Multimeters, Linear IC Power supplies, Digital IC 
                                                Power supplies.</Text>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Audio Visual Lab/Computer Lab/Microcontroller Lab:</Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>In this lab 35 numbers of 8085 trainer kits, 10 numbers of 8086 kits, Advanced 
                                                8086 trainer kit Microprocessor and Microcontroller Board are available to train 
                                                the students. Sufficient numbers of interface cards are available in the lab. 
                                                The laboratory has Pentium IV Processor that provides LAN environment with 
                                                server 20 clients. </Text>
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