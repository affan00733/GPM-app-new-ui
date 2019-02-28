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

import styles from '../src/styles/styles'
import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
const logo = require("./images/GDG.jpg");
const cardImage = require("./images/serverless.jpg")
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const logo1 = require("./images/mkbhd.jpg");

class CardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrollY: new Animated.Value(0),
            tableHead1: ['SR No ', 'Name of the sections', 'Brief description', 'name of the incharge'],
            tableHead2: ['SR No', 'Particular', 'no.'],
            tablehead3: ['SR No', 'Name', 'Designation', 'Contact no.'],
            widthArr1: [40, 60, 80, 60],
            widthArr2: [40, 60, 60],
            widthArr3: [40, 100, 60, 60]

        }
    }
    render() {

        const images = {

            "1": require('../assets/feed_images/1.jpg'),
            "2": require('../assets/feed_images/2.jpg'),
            "3": require('../assets/feed_images/3.png')
        }
        const state = this.state;
        const tableData1 = [
            ['1', 'circulation section', 'Book circulation to the user.', 'MRS. R.D.JADHAV'],
            ['2', 'Periodcal section', 'New periodicals \nJournals display and circulation to users.', 'MR. T. B. BORSE'],
            ['3', 'E-Library', 'Online resources like e-books ,\n journals, Cds and DVDs And online search facility (OPAC) provided to the users.', 'MR. T. B. BORSE'],
            ['4', 'Refrence section', 'Reference books like encyclopedia,\n directories, handbooks, \n data books are provided by library', 'MRS. R.D.JADHAV'],
            ['5', 'Reading room', 'Reading room facility provided \nby this section.', 'MRS. K. J. PARMAR'],
        ];
        const tableData2 = [
            ['1', 'Books', '39,007'],
            ['2', 'CD', '710'],
            ['3', 'Audio cassettes', '13'],
            ['4', 'Technical Journal subscribed', '31'],
            ['5', 'E-journals', '623']
        ];
        const tableData3 = [
            ['1.', 'Mr. K.R.Bhawar (M.A. M.Lib.l.Sc. M.Phil\n (E-Mail: Kishanrbhawar@rediffmail.com)', 'Librarian', 'Ext no: 245'],
            ['2.', 'Mrs. R.D.Jadhav (M.A. M.Lib.l.Sc.)\n (E-Mail: rajashri_nitner@rediffmail.com)', 'Assiatant librarian', 'Ext no:247'],
            ['3.', 'Mr. T.B.Borse (M.A. M.Lib.l.Sc.)\n(E-Mail: tushar.nice@gmail.com)', 'assiatant Librarian', 'Ext no:247'],
            ['4.', 'Mr. Wayal N.S', 'Library attendant', '-'],
            ['5.', 'Mrs. K.J. Parmar', 'Library attendant', '-'],
            ['6.', 'Mr. R.S.Este.', 'Peon', '-']
        ];


        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/me.jpg')} />
                        <Body>
                            <Text>Central Library </Text>
                            {/* <Text note>Jan 15, 2018</Text> */}
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[1]} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        {/* <Button transparent>
                            <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{ color: 'black' }} />
                        </Button> */}


                    </Left>
                </CardItem>


                <CardItem>
                    <Body>


                        <Card style={{ flex: 1 }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>Central library</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text> This institute has an excellent Central Library STOCKED with latest editions of books, periodicals, encyclopedias, handbooks, data books, CDs and DVDs covering all facets of engineering. The library serves to fulfill the academic needs of the diploma students, faculties and supporting staffs. It provides continuous access to knowledge and information to the users of the library for achieving excellence in engineering disciplines. It is fully computerized using SLIM software. The library serves to fulfill the academic needs of all diploma students, faculties and supporting staffs. Book circulation and search facility (OPAC) is provided to the users using the software. E-books and e-journals are also available through DELNET for the users.</Text>



                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                    <Text style={{ fontWeight: 'bold' }}>Major centres</Text>
                              
                            </CardItem>
                            <CardItem>

                                <ScrollView horizontal={true}>
                                    <View>
                                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                            <Row data={state.tableHead1} widthArr={state.widthArr1} style={styles.header} textStyle={styles.text} />
                                        </Table>
                                        <ScrollView style={styles.dataWrapper}>
                                            <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                                {
                                                    tableData1.map((rowData, index) => (
                                                        <Row
                                                            key={index}
                                                            data={rowData}
                                                            widthArr={state.widthArr1}
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
                        <Card style={{ flex: 1, width: width * 0.70 }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>Library Serives/Facilities:</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>

                                <ScrollView horizontal={true}>
                                    <View>
                                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                            <Row data={state.tableHead2} widthArr={state.widthArr2} style={styles.header} textStyle={styles.text} />
                                        </Table>
                                        <ScrollView style={styles.dataWrapper}>
                                            <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                                {
                                                    tableData2.map((rowData, index) => (
                                                        <Row
                                                            key={index}
                                                            data={rowData}
                                                            widthArr={state.widthArr2}
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
                            <Text style={{ fontWeight: 'bold' }}>{'\n\n'}Library Serives/Facilities:{'\n\n'}</Text>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                    <Text>1.Book lending facility {'\n\n'} 2.refernce Service{'\n\n'}3.display of new arrival{'\n\n'}4.book bank facility for all student{'\n\n'}5.intern library loan system{'\n\n'}6.Open accesss system for students and faculty members{'\n\n'} 7.current awareness services{'\n\n'}8.reading room facility{'\n\n'} 9.news paper clipping service{'\n\n'}10.repography facility avialable for BIS codes,syllabus,Question papers and rare document only{'\n\n'}11.internet facility</Text>

                            </CardItem>

                            <CardItem style={{ paddingVertical: 0 }}>


                                <Body>

                                </Body>
                                <Right>

                                </Right>
                            </CardItem>
                        </Card>
                        {/*  */}
                        <Card style={{ flex: 1, width: width * 0.70 }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>Additional activities/services/Facilities</Text>
                                    </Body>
                                </Left>
                            </CardItem>


                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>1.Book exibhition{'\n\n'} 2.gpm talent searchv{'\n\n'} 3."14 hours continuous study" on the occasion of Dr. Babasaheb Ambedkar's Birth anniversary{'\n\n'}4.student council meeting for library problems and solution{'\n\n'}5.Publication of "Know your library"{'\n\n'}6."Granthayan" Wall poster publication{'\n\n'}7.Build your "vocabulary"{'\n\n'}8.essay competition{'\n\n'}9.Display list of Roll model books{'\n\n'}10.user Orientation programme for new users</Text>
                            </CardItem>
                            <CardItem style={{ paddingVertical: 0 }}>
                              
                                    <Text style={{ fontWeight: 'bold' }}>Faculty/staff details</Text>
                            
                            </CardItem>
                            <CardItem>

                                <ScrollView horizontal={true}>
                                    <View>
                                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                            <Row data={state.tablehead3} widthArr={state.widthArr3} style={styles.header} textStyle={styles.text} />
                                        </Table>
                                        <ScrollView style={styles.dataWrapper}>
                                            <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                                {
                                                    tableData3.map((rowData, index) => (
                                                        <Row
                                                            key={index}
                                                            data={rowData}
                                                            widthArr={state.widthArr3}
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