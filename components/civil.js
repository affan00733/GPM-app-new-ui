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

import styles from '../src/styles/styles'
import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
const logo = require("./images/GDG.jpg");
const cardImage = require("./images/serverless.jpg")
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const logo1 = require("./images/mkbhd.jpg");

class CardComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          tablehead:['Sr no.','Name of faculty/staff','Position','Ext no.'],
          widthArr: [50, 100,50,50]
        }
    }

    render() {
        const tableDataFaculty = [
            ['1', 'Prof. S.S Chavan', 'I/C HOD', '260'],
            ['2', 'Dr. R.N Thakur', 'Lecturer', '259'],
            ['3', 'Dr. D.K Gupta', 'Lecturer', '231'],
            ['4', 'Prof. M.K Anserwadekar', 'Lecturer', '261'],
            ['5', 'Prof. S.M Male', 'Lecturer', '261'],
            ['6', 'Prof. S.S Kasulla', 'Lecturer', '261'],
            ['7', 'Prof. M.S. Sorde', 'Lecturer', '261'],
            ['8', 'Prof. S.V.Chaudhari', 'Lecturer', '--'],
            ['9', 'Prof. D.K. Fad', 'Lecturer', '--'],
            ['10', 'Prof. P.A.Pisal', 'Lecturer', '--'],
            ['11', 'Mr. A. M Potdar', 'Curetor', '260'],
            ['12', 'Mrs. S.K Rajam', 'Lab Assistant', '262'],
            ['13', 'Mr. R.S Barfe', 'Lab Assistant', '218'],
            ['14', 'Mr. V.S Gabhale', 'Peon', '--'],
            ['15', 'Mr. U.S Govit', 'Peon', '--'],
            ['16', 'Mr. Nikam', 'Peon', '--'],
          ];

        const images = {
            

            "1": {uri : 'http://192.168.43.64/GPM/images/img09.jpg'}
          
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{uri : 'http://192.168.43.64/GPM/images/download.jpg'}} />
                        <Body>
                            <Text> Civil engineering   </Text>
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
                                <Thumbnail source={{uri : 'http://192.168.43.64/GPM/images/download.jpg'}} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}><Text style={{ fontWeight: 'normal', opacity: 0.5 }}>  ï<Text>  2h</Text></Text></Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Civil Engineering{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text> Government Polytechnic Mumbai is an autonomous institute of Government of Maharashtra. Recently in 2010, we have celebrated Golden Jubilee of the .{'\n\n'}The passouts will have job potentials in construction organization, Government 
                    and provate firms engaged in different types of constructions, consultancy 
                    services and also self employment..</Text>


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
                                <Thumbnail source={{uri : 'http://192.168.43.64/GPM/images/download.jpeg'}} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>principal mam<Text style={{ fontWeight: 'normal', opacity: 0.5 }}> @MKBHD  ï<Text>  2h</Text></Text></Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text style={{fontWeight : 'bold'}} >Major Labs{'\n\n'} Computer Lab :{'\n\n'}</Text>

                            </CardItem>
                          
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>This laboratory is utilised for software related subjects in which the object 
                    oriented programming languages, event driven programming languages practical is 
                    conducted.In addition to this it also covers the multimedia technology. </Text>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Soil Mechanics Lab:</Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Soil Mechanics Lab describes the behaviour of soil. Soil mechanics provide the theoretical basis for analysis in geotechnical engg and engg geology.. </Text>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Strength of Material Lab:</Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Mechanics of Materials, also called Strength of Materials, is a lab which deals with the behaviour of solid objects subject to stresses and strain.</Text>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Surveying Lab:</Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Surveying Lab is a lab of profession, and science of accurately determining the terrestrial or three-dimensional positions of points and distance and angles between them, commonly practiced by licensed surveyors, and members of various building professions.</Text>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Faculty And Staff Details:</Text>

                            </CardItem>
                            <ScrollView horizontal={true}>
                      <View>
                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                          <Row data={this.state.tablehead} widthArr={this.state.widthArr} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                          <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                            {
                              tableDataFaculty.map((rowData, index) => (
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