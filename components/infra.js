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



class Infrastructure extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableHead1: ['Main Building'],
            widthArr1: [60, 60],
  
            tableHead2: ['Workshop'],
            widthArr2: [60, 60],
  
            tableHead3: ['Leather Buliding'],
            widthArr3: [60, 60],
  
            tableHead4: ['Boys Hostel'],
            widthArr4: [60, 60],
        }
    }

    render() {
        const tableData1 = [
            ['Ground Floor', '3540.83'],
            ['First Floor', '3576.73'],
            ['Second Floor', '3202.93'],
            ['Third Floor', '2905.83'],
            ['Fourth Floor', '2092.25'],
            ['Total', '15318.57'],
  
          ];
  
          const tableData2 = [
              ['Ground Floor', '1920.28'],
              ['First Floor', '1920.28'],
              ['Total', '3840.56'],
             
            ];
  
            const tableData3 = [
              ['New Building', 'Ground Floor','167.57'],
              ['First Floor', '571.71'],
              ['Second Floor', '626.00'],
              ['Third Floor', '626.00'],
              ['Built-up area of add column', '4.00'],
              ['Total', '1995.28'],
    
            ];
  
            const tableData4 = [
              ['Ground Floor', '676.56'],
              ['First Floor', '553.68'],
              ['Second Floor', '553.68'],
              ['Third Floor', '553.68'],
              ['Fourth Floor', '553.68'],
              ['Total Land Area', '28636.00'],
    
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
                            <Text> Infrastructure  </Text>
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
                                <Text>Infrastructure{'\n\n'} </Text>

                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                            <Text> Details about the existing Infrastructural facilities:{'\n\n'}
                        Land:28656.669 Sq. Meter (2.8 Hectares){'\n\n'}{'\n\n'} Statement showing existing building details:(values in Sq. Meters)</Text>


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
                            
                            <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Statement showing existing building details:(values in Sq. Meters)</Text>

                            </CardItem>
                            <View style={{alignItems: 'center',
        justifyContent: 'center'}}>
                            
                            <ScrollView horizontal={true}>
                      <View>
                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                          <Row data={this.state.tablehead1} widthArr={this.state.widthArr1} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                          <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                            {
                              tableData1.map((rowData, index) => (
                                <Row
                                  key={index}
                                  data={rowData}
                                  widthArr={this.state.widthArr1}
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
                            <CardItem style={{ paddingVertical: 0 }}>
                                <Left>
                                    
                                    <Text></Text>
                                </Left>
                                <Body>

                                </Body>
                                <Right>

                                </Right>
                            </CardItem>
                            <View style={{alignItems: 'center',
        justifyContent: 'center'}}>

                            <ScrollView horizontal={true}>
                      <View>
                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                          <Row data={this.state.tablehead2} widthArr={this.state.widthArr2} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                          <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                            {
                              tableData2.map((rowData, index) => (
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
</View>


                    <CardItem style={{ paddingVertical: 0 }}>
                                <Left>
                                    
                                    <Text></Text>
                                </Left>
                                <Body>

                                </Body>
                                <Right>

                                </Right>
                            </CardItem>
                            <View style={{alignItems: 'center',
        justifyContent: 'center'}}>

                            <ScrollView horizontal={true}>
                      <View>
                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                          <Row data={this.state.tablehead3} widthArr={this.state.widthArr3} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                          <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                            {
                              tableData3.map((rowData, index) => (
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
</View>
                    <CardItem style={{ paddingVertical: 0 }}>
                                <Left>
                                    
                                    <Text></Text>
                                </Left>
                                <Body>

                                </Body>
                                <Right>

                                </Right>
                            </CardItem>

<View style={{alignItems: 'center',
        justifyContent: 'center'}}>
                            <ScrollView horizontal={true}>
                      <View>
                        <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                          <Row data={this.state.tablehead4} widthArr={this.state.widthArr4} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                          <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                            {
                              tableData4.map((rowData, index) => (
                                <Row
                                  key={index}
                                  data={rowData}
                                  widthArr={this.state.widthArr4}
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



                        </Card>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default Infrastructure;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });