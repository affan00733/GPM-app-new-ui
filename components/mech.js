
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

class CardPrinc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0),
            
      tableHeadLab: ['Sr no','Name of Lab',' Total Investment',' Lab Incharge',' Supporting Staff',' Ext No'],
      widthArrLab: [150,250, 250,250,150,150],
      tableHeadEduPrograms: ['Sr no','Programme','Duration(in weeks)','Eligibility','Contact Person'],
      widthArrEduPrograms: [150,250,150,250,350],
      tableHeadFaculty: ['Sr no','Name of the Faculty/staff','Position','Ext no'],
      widthArrFaculty: [150,300,300,150]
        }
      }
    render() {
        const state = this.state;
        
    const tableDataLab = [
     
        ['1','Thermal Eng','8,94,833','Shri K.B.Salunkhe','Shri.F.B.carwalo','229'],
        ['2','Metrology and Quality Control','20,00,000','Shri. P. P. Chaudhari','Shri. F. B. Carwalo','287'],
        ['3','RAC','10,27,650','Shri. A.D. Kurumbhate','Shri. F. B. Carwalo','229'],
        ['4','Hydraulics','5,05,011','Shri. E.C. Dhembare','Shri. T.K. Khare','228'],
        ['5','CAD','97,30,000','Shri. V. P. Rathod','Shri. P.K. Gunvare','258'],
        ['6','CNC','1,00,00,000','Shri.R.A. Kulkarni','Shri.F.B.carwalo','235'],
  
  
  
      ];
      const tableDataEduPrograms=[
        ['1','AUTO-CAD','8','10th pass/ITI','Prof. Ajay Naik(9833091185)'],
        ['2','CAD/CAM - ProE','8','Diploma','Prof. Ajay Naik(9833091185)'],
        ['3','CNC PROGRAMMING','8','ITI/10 pass','----'],
      ];
      const tableDataFaculty=[
        ['1','Prof. DINESH H. KAMBLE','HOD','230'],
        ['2','Shri. S. V. JOSHI','Lecturer','231'],
        ['3','Shri. B. B. Kulkarni','Lecturer','231'],
        ['4','Shri. N. N. ANSARI','Lecturer','240'],
        ['5','Shri. A. D. KURUMBHATE','Lecturer','233'],
        ['6','Shri. K. B. SALUNKE','Lecturer','229'],
        ['7','Dr. S. B. Mahagaonkar','Lecturer','232'],
        ['8','Dr. A. A. LONKAR','Lecturer','232'],
        ['9','Shri. P. P. CHAUDHARI','Lecturer','229'],
        ['10','Dr. A. V. KHANDEKAR ','Lecturer','248'],
        ['11','Dr. V. P. RATHOD','Lecturer','256'],
        ['12','Shri. S. P. KADAM','Lecturer','248'],
        ['13','Shri. R. U. CHAVAN','Lecturer','248'],
        ['14','Shri. Y. B. JAMNIK','Lecturer','256'],
        ['15','Shri. E. C. DHEMBARE','Lecturer','---'],
        ['16','Shri. F. B. Carwalo','General Mechanic','229'],
        ['17','Shri. R. G. BARASKAR','TECH. LAB. ASST','231'],
        ['18','Shri. P. K. GUNVARE','TECH. LAB. ASST','258'],
        ['19','Shri. T. K. KHARE','PUMP ATTENDENT','---'],
        ['20','Shri. J. B GURAV','PEON','---'],
        ['21','Shri. A. G.SALVI','Hamal','2 29'],
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
                            <Text>MECHANICAL ENGINEERING </Text>
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
                                        <Text style={{ fontWeight: 'bold' }}>MECHANICAL ENGINEERING<Text style={{ fontWeight: 'normal', opacity: 0.5 }}> @MKBHD  ï<Text>  2h</Text></Text></Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Message{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>Mechanical Engineering is one of the oldest and broadest engineering branches and hence, one of the most preferred one by the engineering aspirants. The branch applies the principles of engineering, physics and material science for the design, analysis, manufacturing and maintenance of mechanical systems.  This branch of engineering involves design, production, and operation of machinery. The role of a mechanical engineer is to take a product from an idea to the marketplace. A Mechanical Engineer can design and manufacture everything from small individual parts and devices like micro-scale sensors, inkjet printer nozzles to large systems like spacecraft, machine tools, etc. Mechanical Engineering includes design, manufacture, installation and operation of engines, machines, robotics, heating and cooling systems and manufacturing processes.{'\n\n'}  The Mechanical engineering Department was established in the year 1989. The department is continuously striving to achieve excellence in education, academic and industry oriented research as well as consultancy work with service to the society. We aim to provide our students with a perfect blend of intellectual and practical experiences, that helps them to serve our society and address a variety of needs. With a solid grounding in the principles and practice of mechanical engineering, our diploma students are ready to engage in ethical approaches to engineering, with concern for society and the environment.   Currently the department works in two shifts with a sanctioned intake of 120 students. The department offers a three year post SSC diploma programme. The curriculum is updates regularly with inputs from industries and other stakeholder. The department has highly qualified and experienced teaching faculty. Under Continuous Education Programme department is conducting various course viz
                1.Advance Diploma in Industrial Safety{'\n'}
                2.Auto CAD Software with Drafting{'\n'}
                3.CNC PROGRAMMING and OPERATION{'\n'}
                4.Diploma in Fire and  Industrial Safety{'\n'}
                5.Film and Video Editing{'\n'}
                6.HVAC Engineering/Text{'\n'}
                7.NDT Level 2 (Non Destructive Testing){'\n'}
                8.NDT Level 2 (Non Destructive Testing){'\n'}
                9.Piping Design Engineering-Level-2{'\n'}
                10.3D modelling using Pro-E{'\n'}
                11.Sound Engineering{'\n'}
                            
                            
                            
                            
                            
                            </Text>



                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>VISION:{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>
Mechanical Engineering departments will develope technicians and practicing engineers of world class standard imbibed with high ethical values to meet the global demand through academic excellence at all level,partnership with industry, business professionals, social and cultural organization.
The department will pursue programs for sustainable development using appropriate technologies and will strive for regional excellence in economic development through research &amp; collaboration.

</Text>
                            
                            
                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>MISSION{'\n\n'} </Text>
                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>
The Mechanical engineering Department is committed to impact quality education at diploma level with the philosophy of lifelong learning. It will be accomplished through:{'\n'}
 1.Need based curriculum revision.{'\n'}
 2.Innovative teaching methodology.{'\n'}
 3.Enhanced industry institute interaction.{'\n'}
 4.Establishing centre of excellence.{'\n'}
 5.Value based education system.{'\n'}
 6.Innovative delivery modes.{'\n'}
 7.Research equal opportunities to women and disabled persons.{'\n'}               
   We believe in:{'\n'}
   1.High ethical and moral values.{'\n'}
   2.Sincerity and transparency.{'\n'}
   3.Accountability.{'\n'}
   4.Equity.{'\n'}
   5.Innovation.{'\n'}
   6.Concern for Environment.{'\n'}    
                                
                                </Text>
                                </CardItem>


                                

                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>MAJOR LABS{'\n\n'} </Text>
                            </CardItem>




   <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <View style={styles.container}>
                    <ScrollView horizontal={true}>
                      <View>
                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                          <Row data={this.state.tableHeadLab} widthArr={this.state.widthArrLab} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                          <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                            {
                              tableDataLab.map((rowData, index) => (
                                <Row
                                  key={index}
                                  data={rowData}
                                  widthArrLab={this.state.widthArrLab}
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

                           
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>1.Thermal Eng Lab:{'\n\n'} </Text>
                            </CardItem>
 
                           
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>This is one of the core laboratories of Mechanical Engineering department. This lab is well equipped with test rigs to conduct the experiments for verifying the performance of I/C engines. It also has models of I/C engines, boilers, and other thermal engineering equipments.
                            
                            
                            
                            
                            
                            </Text>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>2.Metrology and Quality Control Lab :{'\n\n'} </Text>
                            </CardItem>
 


                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>It is one of the important laboratories in the department. It is well equipped with modern measuring instruments like profile projectors, gear tooth micrometer, tool maker microscope, angle dekker etc.
                                </Text>
                                </CardItem>

                                <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>3.Hydraulic Lab :{'\n\n'} </Text>
                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>Hydraulic laboratory is a well equipped laboratory in which various experiments related to hydraulic, hydraulic machinery and fluid power can be performed. The lab has two hydraulic benches, test rigs to study the performance of turbines, pumps and trainers to study industrial hydraulic and pneumatic circuits.
                                </Text>
                                </CardItem>


                                <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>4.CAD Lab :{'\n\n'} </Text>
                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>The lab consists of modeling softwares such as Uni-graphics, CATIA, Solid-works, PRO-E for 3D modeling and analysis. The advent of CAD has paved the way for highly flexible, accurate, fast and integrated approach for creating manufacturing products and its components.</Text>
                                </CardItem>


                                <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>5.CNC Lab :{'\n\n'} </Text>
                            </CardItem>


                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>CNC lab is one of the advanced labs in the department. It consists of CNC Milling centre and CNC turning machine. These machines are fully automatic and connected with Simulators. A batch of 20 students can perform practicals independently related to CNC programming.</Text>
                                </CardItem>

                                <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>Continuing Education Programs :{'\n\n'} </Text>
                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <View style={styles.container}>
                    <ScrollView horizontal={true}>
                      <View>
                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                          <Row data={this.state.tableHeadEduPrograms} widthArr={this.state.widthArrEduPrograms} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                          <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                            {
                              tableDataEduPrograms.map((rowData, index) => (
                                <Row
                                  key={index}
                                  data={rowData}
                                  widthArrEduPrograms={this.state.widthArrEduPrograms}
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
                            <Text>FACULTY AND STAFF DETAILS{'\n\n'} </Text>
                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <View style={styles.container}>
                    <ScrollView horizontal={true}>
                      <View>
                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                          <Row data={this.state.tableHeadFaculty} widthArr={this.state.widthArrFaculty} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                          <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                            {
                              tableDataFaculty.map((rowData, index) => (
                                <Row
                                  key={index}
                                  data={rowData}
                                  widthArrFaculty={this.state.widthArrFaculty}
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


