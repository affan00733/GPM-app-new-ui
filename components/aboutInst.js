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

class AboutInstitute extends Component {

    

    render() {

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
                            <Text>About Institute  </Text>
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
                                        <Text style={{ fontWeight: 'bold' }}><Text style={{ fontWeight: 'normal', opacity: 0.5 }}>  ï<Text>  2h</Text></Text></Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>About Institute {'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text>Establishment of Polytechnic at Elphinston Technical School, Dhobi Talav, Mumbai 
                                            with 60 intake in Civil Engineering on 15th June, 1960.{'\n\n'}The Polytechnic acquired existing campus in  May, 1985.{'\n\n'}Introduction of new diploma courses under State Government plan schemes viz. 
                                            Electronics engineering and Instrumentation in 1988, Mechanical in 1989.{'\n\n'}Implementation of Canada India Industry Polytechnic Linkage Project (CIILP-2002 
                                            to 2005). The project focus was training of faculty and staff. {'\n\n'}The Polytechnic has been awarded Narsee Monjee Award for best performance in the 
                                            year 1999 by ISTE. {'\n\n'}The diploma program in Rubber Technology, a joint venture between the institute 
                                            and All India Rubber Industries Association (AIRIA) started in 1999-2000. {'\n\n'}Accredited by National Board of Accreditation (NBA) for five diploma programs in 
                                            2003 i.e. Civil, Mechanical, Electronics, Computer, and Instrumentation. {'\n\n'}The Polytechnic is selected for implementation of Technical Education Quality 
                                            Improvement Project (TEQIP- 2003-2009). The project was focused on development 
                                            of excellence, establishment of campus-wide networking, development of MIS, 
                                            modernization of laboratories and faculty training. {'\n\n'}The government institute of Leather Technology has been merged in the Polytechnic 
                                            as a department of Leather Technology in 2003. The department conducts two diploma courses viz. 1. Leather technology, 2. Leather goods and footwear manufacturing with 15 intake each.  {'\n\n'}A satellite design studio for footwear design has been established in 2005 as a 
                                            joint venture of the Polytechnic and Footwear Design &amp; Development Institute 
                                            (FDDI), Noida working under Ministry of Commerce, Government of India. The 
                                            studio provides design and staff training facilities to the industries.  {'\n\n'}The Polytechnic is project institute for implementation of centre government 
                                            scheme for bringing the Persons With Disabilities (PWD) in the main stream of 
                                            technical education and community development through the Polytechnic. {'\n\n'}The Polytechnic has started conducting number of continuing education programs for working class people from the industries and other organizations.{'\n\n'} </Text>



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
export default AboutInstitute;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });