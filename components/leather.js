
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
            tableHeadLab: ['Sr no','Name of Lab',' Cost of Equipments(Ruppes in Lac.)',' Name of In-Charge'],
      widthArrLab: [150,250, 250,250],
      tableHeadFaculty: ['Sr no','Name of the Faculty/staff','Position','Ext no'],
      widthArrFaculty: [150,300,300,150]
      
        }
      }
    render() {
        const state = this.state;
        
    const tableDataLab = [
     
        ['1','Footwear Technology Lab-1',' 12.00','Prof.R.C.Indulkar'],
        ['2','Footwear Technology Lab-2',' 4.00','Prof.V.N.Chaudhari'],
        ['3','Leather Goods Lab',' 4.00','Prof.R.C.Indulkar'],
        ['4','Footwear Physcial Testing Lab',' 3.00','Prof.K.M.Ramteke'],
        ['5','Chemistry Lab',' 2.00','Prof.L.A.Magdum'],
        ['6','Tannery Yard',' 2.00','Prof.G.T.Yadav'],
        ['7','Computer Lab',' 3.00','Prof.Birbal Joshi'],
  
      ];
          
    const tableDataFaculty=[
        ['1','Prof.M.B.Pol','Lecturer in Leather Technology','298'],
        ['2','Prof.S.G.Darveshi','Lecturer in Leather Goods and Footwear Technology','298'],
        ['3','Mr.K.M.Ramteke','Chemical Assistant','298'],
        ['4','Prof.L.A.Magdum','Forman-Leather','298'],
        ['5','Mr.G.T.Yadav','Technical Lab Assistant','298'],
        ['6','Mr.R.C.Indulkar','Instructor(Footwear)','298'],
        ['7','Mr.V.N.Chaudhari','Instructor(Footwear)','298'],
        ['8','Mr.B.K.Joshi','Chemical Assistant','298'],
        ['9','Mr.S.V.Patil','Skilled Worker','298'],
  
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
                            <Text>Leather Technology</Text>
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
                                        <Text style={{ fontWeight: 'bold' }}>Leather Technology<Text style={{ fontWeight: 'normal', opacity: 0.5 }}> @MKBHD  ï<Text>  2h</Text></Text></Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Message{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>

                            <Text>Government Institute of Leather Technology was established in 1938 under Board of Technical Education to conduct two years Diploma in Leather technology and Diploma in Leather Goods Footwear technology. The object of the establishment was to create trained man power due to huge demand of quality technician and experts in Leather, footwear and Leather Chemical Sector in India. It was established by Bombay Province (British Government).
                                  In 1963 two years Diploma Programme was converted to three years diploma in Leather technology and two years Advance diploma in Leather Goods and Footwear Technology till 1988 under Board of Technical Education. In 1988, these programmes were merged in Maharashtra State Board of Technical Education.
                                  In 1994 two years Advance Diploma in Leather Goods and Footwear Technology programme were converted to three years Diploma in Leather Goods and Footwear Technology. Both the diploma were recognized and approved by All India Council of Technical Education.
                                  In 2003 Government Institute of leather Technology merged in Government Polytechnic Mumbai and now it is the one of department of Government Polytechnic Mumbai.
                                  The Student work with DíLords Shoes. Metro shoes, Kavis fashion, Alpha chemicals, Italy, Ram export, Lakhani shoes, SGS testing, colorants, Viswat Chemical, Pidilite , Indofil, BASF chemicals,etc. as quality technician and experts in Leather, footwear and Leather Chemical ,Leather Goods and Garment Sector in India and abroad.	
                                                    </Text>



                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Sailent Features of Department:{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Provisional Education::{'\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>The Department has pioneered professional education in leather sector of India. Today the Dept. academic standards have become industry benchmarks.</Text>
                            
                            
                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>Relevant Curricular:{'\n'} </Text>
                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>The Curricular have been meticulously planned and structured. And though many of them were originally patterned after courses abroad, they have been recast to suit the Indian ethos. At the same time, care has been taken to ensure their global relevance. The multidisciplinary curricula deliver a skill-oriented, broad based coaching for developing professionals.</Text>
                                
                                
                                </CardItem>


                                <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>Industry Internship:{'\n'} </Text>
                            </CardItem>


                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>Students undergo an 16 week internship to study manufacturing process, observe and execute different department functions and execute small projects as per organizational needs. This internship helps industry analyses its day-to-day activities. Students in turn, gain solid, practical experience. They also improve their interpersonal communication skills by frequent industrial visits. The findings are then presented to the department for assessment.</Text>
                            </CardItem>


                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>Small Class Size:{'\n'} </Text>
                            </CardItem>


                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            
      <Text>A class at the Department is restricted to 15 students. This ensures a close and meaningful relationship between teachers and students. The faculty is able to devote more quality time to each student, interacting with them closely on a one-to one basis.</Text>
                            </CardItem>



                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>Teaching Meathodology:{'\n'} </Text>
                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            
                            <Text>The basic elements of the Departmentís teaching methodology are theory, demonstration and practice. Focus is learning by doing. Students undertake classroom and practical assignments make presentations and participate in Group Discussions and seminars. The lecture mode of teaching is supplemented by the latest Audio-visual and IT aids.</Text>
                                                  </CardItem>
                      
                                                  <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>Evaluation:{'\n'} </Text>
                            </CardItem>          


                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            
                            <Text>There is a system of continuous assessment. Students are evaluated by way of assignments, projects, internships and presentation which are held thrice during the semester and once at the end of the semester. The aim is to closely monitor a studentís evolution as a professional.</Text>
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

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });
