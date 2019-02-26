
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
          tableHead: ['Name', 'Designation'],
          widthArr: [140, 100]
        }
      }
    render() {
        const state = this.state;
        const tableData = [
          ['Mr. Pramod A. Naik,\nJoint Director,\n Directorate of Technical Education, Regional office\nMumbai - 400 051.', 'Chairman'],
          ['Dr. H. P. Taskar,\nPrincipal,\nGovernment Polytechnic,\nMumbai.', 'Member Secretary'],
          ['Mr. P. N. Jumale,\nDirector,\nBoard of Apprentice (BOAT),\nMumbai.', 'Member'],
          ['Mr. G. V. Ballale,\nDeputy Director, \nIndustries, Office of the Joint Director Industries, Chunabhatti.', 'Member'],
          ['Mr. H. K. Kadam,\nChief Manager (HRD),\nR.C.F Ltd,\nChembur, Mumbai-400 022', 'Member'],
          ['Mr. Abhay Kimmatkar,\nSecretary,\nThe Institution of Enggineers, Maharashtra Center,\n Mumbai', 'Member'],
          ['Mr. R. K. Gajria,\nCEO,\nManisha Consultant, \nMalad (W), Mumbai – 400 064', 'Member'],
          ['Mr. A. D. SHAHANE\nVice President, Corporate Training, \n Larsen & Tourbro, Mumbai. ', 'Chairman'],
          ['DR. H. P. TASKAR\nPrincipal,\nGovernment Polytechnic,\nMumbai.', 'Member'],
          ['MR. RAJESH SAWANT \nManaging Director, \nAkademika Mumbai.', 'Member'],
          ['MR. B. K. GODBOLE\nConsultant  \nEncon Engineers and Consultants, Navi Mumbai', 'Member'],
          ['MR. V. D. VAIDYA\nDeputy Secretary, \nRBTE, Mumbai', 'Member'],
          ['MR. D. M. CHITALE\n Electrosystems, Thane', 'Member'],
          ['MR. SAMIR RAUT\n Project Manager , \nPC Technology, Mumbai', 'Member'],
          ['MR. PRAKASH KADAM\n City Engineer, \nMCGM, Mumbai', 'Member'],
          ['MR. MEHUL PATEL\n CEO, \nAttuned Polymers Lab, Mumbai', 'Member'],
          ['PROF. R. P. BARHATE\nVice Principal & HOD Civil Engg Dept,\nGovt. Polytechnic Mumbai.', 'Member'],
          ['PROF. R. A. PATIL \nAcademic Co ordinator & I/C HoD of Information Technology,\nGovt. Polytechnic Mumbai.', 'Member'],
          ['PROF. B. B. KULKARNI\nI/C HoD of Mechanical Engg.\nGovt. Polytechnic Mumbai.', 'Member'],
          ['PROF. MRS. J.D. WAGHMARE\nI/C HoD of Electrical Engg. \nGovt. Polytechnic Mumbai.', 'Member'],
          ['PROF. C. D. KAPSE \nHoD of Instrumantation\nGovt. Polytechnic Mumbai.', 'Member'],
          ['PROF. V. M. ASWAR\nI/C HoD of Computer Engg. \nGovt. Polytechnic Mumbai.', 'Member'],
          ['PROF. S. R. KASTURE \nI/C Hod of Electronics Engg. \nGovt. Polytechnic Mumbai.', 'Member'],
          ['PROF. M. B. POL\nI/C HoD Leather Technology\nGovt. Polytechnic Mumbai.', 'Member'],
          ['DR. A. U. WARAD\nI/C HoD Science Dept. \nGovt. Polytechnic Mumbai.', 'Member'],
          ['PROF. P. S. DAVE \nLecturer in Maths \nGovt. Polytechnic Mumbai.', 'Member'],
          ['PROF. U. B. SHINDE \nLecturer in Instrumantation & TPO\nGovt. Polytechnic Mumbai.', 'Member'],
          ['PROF.  G. G. WANKHEDE\nController of Examination', 'Member'],
          ['Mr. R. S. DANGAT \nCoordinator Rubber Technology', 'Member'],
          ['PROF. MS. SADAF S. \nLecturer in Information Technology ', 'Member'],
    
    
        ];
        // for (let i = 0; i < 30; i += 1) {
        const rowData = [
          ['Mr. Pramod A. Naik,', 'Chairman'],
          ['Mr. Pramod A. Naik,', 'Chairman'],
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
                            <Text>principal desk </Text>
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
                                        <Text style={{ fontWeight: 'bold' }}>principal mam</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Message{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text> Government Polytechnic Mumbai is an autonomous institute of Government of Maharashtra. Recently in 2010, we have celebrated Golden Jubilee of the institute.{'\n\n'}We have a team of highly qualified, experienced and dedicated faculties and non-teaching staff who are devoted to achieve excellence in the every activity of the institute. We own an excellent infrastructure, well equipped engineering departments, libraries, training and Placement cell, class rooms, seminar rooms and Auditorium Hall etc. {'\n\n'}The synergic efforts taken at the institute will help to achieve the vision of the institute and  make our student globally competitive entrepreneurs and employable engineers. This will ultimately help to transform them into a knowledge pool for India.</Text>


                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>{'\n\n'}Prof.Swati D. Deshpande{'\n\n'} Ph:  9029001925{'\n\n'}  Email:  principal@gpmumbai.ac.in</Text>
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
                                        <Text style={{ fontWeight: 'bold' }}>principal mam<Text style={{ fontWeight: 'normal', opacity: 0.5 }}> @MKBHD  •<Text>  2h</Text></Text></Text>
                                    </Body>
                                </Left>
                            </CardItem>
                           
                          
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <View style={styles.container}>
                    <ScrollView horizontal={true}>
                      <View>
                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                          <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                          <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                            {
                              tableData.map((rowData, index) => (
                                <Row
                                  key={index}
                                  data={rowData}
                                  widthArr={state.widthArr}
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

