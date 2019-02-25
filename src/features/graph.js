import React, { Component } from "react";
import styles from '../styles/styles'
import { StyleSheet, Text, Animated, ScrollView, Picker, ToastAndroid, WebView, View, Linking, Button, Modal, FlatList, Dimensions, PermissionsAndroid, Alert, TouchableHighlight, TouchableOpacity } from 'react-native';
import { RkButton, RkCard } from 'react-native-ui-kitten';
import ParallaxScrollView from 'react-native-parallax-scrollview';
import RadioForm from 'react-native-radio-form';
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

export default class Graph extends Component {
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
            name: this.props.navigation.state.params.Name,
            email: this.props.navigation.state.params.Email,
            enroll: this.props.navigation.state.params.Enroll,
            teacherName: ''

        }
    }


    async componentWillMount() {
        const response = await fetch("http://192.168.43.64/question_disp.php");
        const json = await response.json();
        this.setState({ data: json });
        const responseTeac = await fetch("http://192.168.43.64/teacher.php");
        const jsonTeach = await responseTeac.json();
        console.log(jsonTeach)
        this.setState({ teacherName: jsonTeach[0].teacher });
        for (let i = 0; i <= jsonTeach.length - 1; i++) {
            let val = jsonTeach[i].teacher
            console.log(val)
            teachArr.push(val)
            this.setState({ teacher: teachArr })

        }
        console.log(this.state.teacher)
        //  this.setState({questionName: this.state.data[this.state.index].question})

        //      this.setState({ questionName: this.state.data[0] });

    }


    fetchR = async () => {



        // console.log()
        console.log(this.props.navigation.state.params.Email)
        console.log(this.props.navigation.state.params.Enroll)
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
                    fetch('http://192.168.43.64/answer.php', {
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
            fetch('http://192.168.43.64/answer.php', {
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
        return (
            < ParallaxScrollView
                windowHeight={deviceHeight * 0.5}
                backgroundSource={{ uri: 'http://i.imgur.com/UyjQBkJ.png' }
                }
                leftIconOnPress={() => { this.props.navigation.openDrawer() }}
                navBarTitle='Graph'
                userName='Graph'
                userTitle=' '
                navBarTitleColor='black'
                navBarColor='white'
                userImage='http://i.imgur.com/uma9OfG.jpg'
                leftIcon={{ name: 'bars', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome' }}
                rightIcon={{ name: 'user', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome' }}
            >
                <ScrollView style={{ flex: 1, backgroundColor: '#EBEDEF' }}>


                    <View style={{ marginBottom: 50, marginTop: 25, paddingBottom: 50 }}>
                        <View style={{ padding: 10 }}>
                            <RkCard style={{ padding: 10, borderRadius: 15 }}>
                                <View rkCardHeader>
                                    <View>
                                        <Text>Graph Request</Text>

                                    </View>
                                </View>
                                <View rkCardContent >
                                    <Picker
                                        selectedValue={this.state.teacherName}
                                        style={{ height: 50, width: 100 }}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({ teacherName: itemValue })
                                        }>
                                        {this.state.teacher.map((item, index) => {
                                            return (<Picker.Item label={item} value={item} key={item} />)
                                        })}
                                    </Picker>
                                    <View>
                                        <Text>{this.state.questionName}</Text>
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
                                        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                                            <Button

                                                title={this.state.buttonVal}
                                                onPress={() => this.getData()}
                                            />
                                        </View>
                                    </View>




                                </View>

                            </RkCard>

                        </View>

                    </View>
                </ScrollView>
            </ParallaxScrollView >

        );
    }
}

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 15,
//     flex: 1,
//     // justifyContent: "center",
//     // alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   }
// });
