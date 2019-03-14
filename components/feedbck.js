import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Button,
    Animated, ScrollView, Picker, ToastAndroid, WebView, Linking, Modal, FlatList, PermissionsAndroid, Alert, TouchableHighlight, TouchableOpacity

} from "react-native";

import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Icon } from 'native-base'
const logo = require("./images/GDG.jpg");
const cardImage = require("./images/serverless.jpg")
import RadioForm from 'react-native-radio-form';
import styles from '../src/styles/styles'
let teachArr = []

const mockData = [
    {
        label: 'worst',
        value: 25
    },
    {
        label: 'good',
        value: 50
    },
    {
        label: 'better',
        value: 75
    },
    {
        label: 'best',
        value: 100
    }
];
let deviceHeight = Dimensions.get('window').height;
let width = Dimensions.get('window').width;


const logo1 = require("./images/mkbhd.jpg");
// name={} email={} enroll={}  
class CardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            teacher: [],
            value1: 0,
            question: '',
            answer: 0,
            radio: 0,
            checked: 'first',
            feedback: '',
            questionName: '',
            index: 0,
            item: 25,
            buttonVal: 'begin test',
            name: this.props.name,

            email: this.props.email,
            enroll: this.props.enroll,
            teacherName: ''

        }
    }

    async componentWillMount() {
        const response = await fetch("http://192.168.43.64/GPM/question_disp.php");
        const json = await response.json();
        this.setState({ data: json });
        const responseTeac = await fetch("http://192.168.43.64/GPM/teacher.php");
        const jsonTeach = await responseTeac.json();
        console.log(jsonTeach)
        this.setState({ teacherName: jsonTeach[0].teacher });
        for (let i = 0; i <= jsonTeach.length - 1; i++) {
            let val = jsonTeach[i].teacher
          
                console.log(val)
                teachArr.push(val)
                this.setState({ teacher: teachArr })
            
            // teachArr=[];
           

        }
        teachArr=[];
        console.log(this.state.teacher)
        //  this.setState({questionName: this.state.data[this.state.index].question})

        //      this.setState({ questionName: this.state.data[0] });

    }


    fetchR = async () => {



        console.log()
        // console.log(this.props.navigation.state.params.Email)
        // console.log(this.props.navigation.state.params.Enroll)
        console.log(json)



    };

    getData = () => {
        this.setState({ buttonVal: 'next' })

        console.log(this.state.questionName)
        if (this.state.index <= this.state.data.length - 1) {
            // console.log(this.state.questionName)
            // console.log(this.state.questionName.question)

            if (this.state.index == this.state.data.length) {
                Alert.alert('submited')

            }

            else {

                this.setState({ index: this.state.index + 1 })
                this.setState({ questionName: this.state.data[this.state.index].question })
                // Alert.alert(`${this.state.questionName} value is ${this.state.item}`)
                if (this.state.questionName != '') {
                    console.log(`${this.state.questionName} value is ${this.state.item}`)
                    fetch('http://192.168.43.64/GPM/answer.php', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name: this.state.name,
                            email: this.state.email,
                            enroll: this.state.enroll,
                            questionName: this.state.questionName,
                            answer: this.state.item,
                            teacherName: this.state.teacherName

                        })

                    }).then((response) => response.json())
                        .then((responseJson) => {

                            // Showing response message coming from server after inserting records.
                            // Alert.alert(resposnseJson);
                            ToastAndroid.showWithGravityAndOffset(
                                responseJson,
                                ToastAndroid.LONG,
                                ToastAndroid.BOTTOM,
                                25,
                                50,
                            );
                        }).catch((error) => {
                            console.error(error);
                        });
                }
            }
        }
        else {
            this.setState({ buttonVal: 'finish' })

            console.log(`${this.state.questionName} value is ${this.state.item}`)
            fetch('http://192.168.43.64/GPM/answer.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    enroll: this.state.enroll,
                    questionName: this.state.questionName,
                    answer: this.state.item,
                    teacherName: this.state.teacherName


                })

            }).then((response) => response.json())
                .then((responseJson) => {

                    // Showing response message coming from server after inserting records.
                    // Alert.alert(resposnseJson);
                    ToastAndroid.showWithGravityAndOffset(
                        responseJson,
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM,
                        25,
                        50,
                    );
                }).catch((error) => {
                    console.error(error);
                });
            Alert.alert('COMPLETED')
        }

    }

    _onSelect = (item) => {
        console.log(item.value);
        this.setState({ item: item.value })
    };
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
                            <Text>feedback    </Text>
                            {/* <Text note>Jan 15, 2018</Text> */}
                        </Body>
                    </Left>
                </CardItem>
               


                <CardItem>
                    <Body>


                    <Card style={{ width: width * 0.80}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>Feedback form</Text>
                                    </Body>
                                </Left>
                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 ,width : width * 0.6}}>

                                <Picker
                                    selectedValue={this.state.teacherName}
                                    style={{ flex : 1 }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ teacherName: itemValue })
                                    }>
                                    {this.state.teacher.map((item, index) => {
                                        return (<Picker.Item label={item} value={item} key={item} />)
                                    })}
                                </Picker>

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
                                        <Text style={{ fontWeight: 'bold' }}>Feedback form</Text>
                                    </Body>
                                </Left>
                            </CardItem>

                            <CardItem cardBody style={{ paddingLeft: 10 }}>

                                <Text>{this.state.questionName}</Text>
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10 }}>

                                <RadioForm
                                    style={{ width: 350 - 30 }}
                                    dataSource={mockData}
                                    itemShowKey="label"
                                    itemRealKey="value"
                                    circleSize={16}
                                    initial={0}
                                    formHorizontal={true}
                                    labelHorizontal={true}
                                    onPress={(item) => this._onSelect(item)}
                                />
                            </CardItem>
                            <CardItem cardBody style={{ paddingLeft: 10,justifyContent: 'center', alignContent: 'center' ,alignItems: 'center' }}>

                                <View style={{ justifyContent: 'center', alignContent: 'center' ,alignItems: 'center'}}>
                                    <Button

                                        title={this.state.buttonVal}
                                        onPress={() => this.getData()}
                                    />
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
export default CardComponent;

