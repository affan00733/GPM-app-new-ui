import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    
    Dimensions,
    Animated,
    Picker,
    ScrollView,
    TextInput,
    ToastAndroid,
    Image,
    WebView,
    Linking,
    Modal, FlatList, PermissionsAndroid, Alert, TouchableHighlight, TouchableOpacity
} from "react-native";
import styles from '../src/styles/styles'
import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
const logo = require("./images/GDG.jpg");
const cardImage = require("./images/serverless.jpg")
// let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import RNFS from 'react-native-fs'

// import { RkButton, RkCard } from 'react-native-ui-kitten';
// import ParallaxScrollView from 'react-native-parallax-scrollview';
let deviceHeight = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

const personIcon = require("../src/features/login1_person.png");
const dropIcon = require("../src/features/dropdown.png");
const logo1 = require("./images/mkbhd.jpg");

class CardComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            scrollY: new Animated.Value(0),
            image: null,
            res: '',
            file: '',
            pic: null,
            name: null,
            // uri: '',
            source: { uri: '' },
            su: null,
            modalVisible: false,
            link: '',
            link2: '',
            name: '',
            pdf: '',
            enroll: '',
            name: '',
            email: '',


            from: '',
            to: '',
            clas: 'First',
            period: 'I month\'s',



            // source: require('./a.pdf')
        }
    }
    componentWillMount() {
        // this.fetchData();
        // this.UserRegistrationFunction()
    }

    fetchData = () => {
        console.log(this.props.navigation.state.params.Name)
        console.log(this.props.navigation.state.params.Email)
        console.log(this.props.navigation.state.params.Enroll)
        const { from, to, period, clas } = this.state
        this.setState({ enroll: this.props.navigation.state.params.Enroll, name: this.props.navigation.state.params.Name, email: this.props.navigation.state.params.Email })
        let name = this.props.navigation.state.params.Name
        let email = this.props.navigation.state.params.Email
        let enroll = this.props.navigation.state.params.Enroll
        let year = this.props.navigation.state.params.year
        let dept = this.props.navigation.state.params.dept
        let shift = this.props.navigation.state.params.shift
        let mobile = this.props.navigation.state.params.mobile
        let address = this.props.navigation.state.params.address
        let gender = this.props.navigation.state.params.gender
        let dob = this.props.navigation.state.params.dob

        fetch('http://192.168.43.64/upload.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: from,
                to: to,
                clas: clas,
                period: period,

                name: name,
                email: email,
                enroll: enroll,
                year: year,
                dept: dept,
                shift: shift,
                mobile: mobile,
                address: address,
                gender: gender,
                dob: dob

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
    _pickDocument = async () => {
        await DocumentPicker.show({
            filetype: [DocumentPickerUtil.pdf()],
        }, (error, res) => {
            // Android
            console.log(
                res.uri,
                res.type, // mime type
                res.fileName,
                res.fileSize,
                'd', res.data
            );
            alert(res.uri);
            // const cleanURL = fileURL.replace("file://", "");

            this.setState({ source: { uri: res.uri }, res: res.uri, name: res.fileName })
            this.setState({ su: this.state.res.replace("content://", "file://") })
            console.log(this.state.su)
        });


    }


    uploadPic = async () => {
        this.fetchData()

        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the read")
            } else {
                console.log("read permission denied")
            }

            const granted1 = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
            )
            if (granted1 === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the write")
            } else {
                console.log("Camera permission write")
            }


        } catch (err) {
            console.warn(err)
        }

        let url = this.state.res; //The url you received from the DocumentPicker
        let decodedURL = decodeURIComponent(url)

        let uploadUrl = 'http://192.168.43.64/moveFile.php';  // For testing purposes, go to http://requestb.in/ and create your own link

        // I STRONGLY RECOMMEND ADDING A SMALL SETTIMEOUT before uploading the url you just got.
        const split = decodedURL.split('/');
        const name = split.pop();
        const inbox = split.pop();
        const inbox1 = inbox
        const split1 = decodedURL.split(':');

        // const inbox2 = inbox1.split(':')
        const inboxF = split.pop()
        const inboxF1 = split.pop()
        const path = split1.pop()
        // for(let i=0;i< ; i++){

        // }
        console.log('url', url)
        console.log('split', split)
        console.log('name', name)
        console.log('inbox', inbox)
        // console.log('inbox1',inbox2)
        console.log('inboxF', inboxF)
        console.log('inboxF1', inboxF1)

        console.log(RNFS.ExternalStorageDirectoryPath + '/Android')
        console.log(RNFS.ExternalDirectoryPath)

        const realPath = `${RNFS.ExternalStorageDirectoryPath}/${path}`;

        // var decodedURL = decodeURIComponent(url)

        console.log(decodedURL)
        console.log('split1', split1)
        console.log('split1F', split1.pop())
        console.log('realpath', realPath)


        const uploadBegin = (response) => {
            const jobId = response.jobId;
            console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
            // this.fetchData()

        };

        const uploadProgress = (response) => {
            const percentage = Math.floor((response.totalBytesSent / response.totalBytesExpectedToSend) * 100);
            console.log('UPLOAD IS ' + percentage + '% DONE!');

        };

        RNFS.uploadFiles({
            toUrl: uploadUrl,
            files: [{
                name: 'pdf',
                filename: `${this.props.navigation.state.params.Enroll}.pdf`,
                filepath: realPath,
            }],
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            begin: uploadBegin,
            beginCallback: uploadBegin, // Don't ask me, only way I made it work as of 1.5.1
            progressCallback: uploadProgress,
            progress: uploadProgress
        })
            .then((response) => {
                console.log(response, "<<< Response");
                if (response.statusCode == 200) { //You might not be getting a statusCode at all. Check
                    console.log('FILES UPLOADED!');
                } else {
                    console.log('SERVER ERROR');
                }
            })
            .catch((err) => {
                if (err.description) {
                    switch (err.description) {
                        case "cancelled":
                            console.log("Upload cancelled");
                            break;
                        case "empty":
                            console.log("Empty file");
                        default:
                        //Unknown
                    }
                } else {
                    //Weird
                }
                console.log(err);
            });

        // this.setState({name :  ,email : ,enroll : })

        // const {email,enroll}=this.state

        // this.fetchData()


    }



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
                            <Text>Concession    </Text>
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


                    <Card style={{ flex: 1 ,width: width * 0.70}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>principal mam</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            {/* <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Message{'\n\n'} </Text>

                            </CardItem> */}
                            <CardItem cardBody style={{ paddingLeft: 10 }}>

                                <View style={styles.inputsContainer}>

                                    <View style={styles.inputContainer}>
                                        <View style={styles.iconContainer}>
                                            <Image
                                                source={personIcon}
                                                style={styles.inputIcon}
                                                resizeMode="contain"
                                            />
                                        </View>
                                        <TextInput
                                            style={[styles.input, styles.whiteFont]}
                                            placeholder="FROM"
                                            placeholderTextColor="#FFF"
                                            onChangeText={from => this.setState({ from })}

                                            underlineColorAndroid='transparent'
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <View style={styles.iconContainer}>
                                            <Image
                                                source={personIcon}
                                                style={styles.inputIcon}
                                                resizeMode="contain"
                                            />
                                        </View>
                                        <TextInput
                                            style={[styles.input, styles.whiteFont]}
                                            placeholder="TO"
                                            placeholderTextColor="#FFF"
                                            onChangeText={to => this.setState({ to })}

                                            underlineColorAndroid='transparent'
                                        />
                                    </View>


                                    <View style={styles.inputContainer}>
                                        <View style={styles.iconContainer}>
                                            <Image
                                                source={dropIcon}
                                                style={styles.inputIcon}
                                                resizeMode="contain"
                                            />
                                        </View>

                                        <Picker
                                            selectedValue={this.state.clas}
                                            style={[styles.input, styles.whiteFont, { color: '#FFF', paddingTop: 13, marginTop: 12 }]}
                                            onValueChange={(itemValue, itemIndex) => this.setState({ clas: itemValue })}
                                            prompt='Class'
                                        >

                                            <Picker.Item label="First" value="First" />
                                            <Picker.Item label="Second" value="Second" />
                                        </Picker>
                                    </View>


                                    <View style={styles.inputContainer}>
                                        <View style={styles.iconContainer}>
                                            <Image
                                                source={dropIcon}
                                                style={styles.inputIcon}
                                                resizeMode="contain"
                                            />
                                        </View>

                                        <Picker
                                            selectedValue={this.state.period}
                                            style={[styles.input, styles.whiteFont, { color: '#FFF', paddingTop: 13, marginTop: 12 }]}
                                            onValueChange={(itemValue, itemIndex) => this.setState({ period: itemValue })}
                                            prompt='Period'
                                        >

                                            <Picker.Item label="I month's" value="I month's" />
                                            <Picker.Item label="Quaterly" value="Quaterly" />
                                        </Picker>
                                    </View>
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
                        {/*  */}
                        <Card style={{ flex: 1 ,width: width * 0.70}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={logo1} />
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>principal mam</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            {/* <CardItem cardBody style={{ paddingLeft: 10 }}>
                                <Text>Message{'\n\n'} </Text>

                            </CardItem> */}
                            <CardItem cardBody style={{ paddingLeft: 10 }}>

                            <TouchableOpacity style={{ alignContent: 'center', alignItems: "center", justifyContent: "center", }} activeOpacity={.5}
                    onPress={() => this._pickDocument()}
                  >
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Choose</Text>
                    </View>
                  </TouchableOpacity>
</CardItem>
                  <CardItem cardBody style={{ paddingLeft: 10 }}>

                  <TouchableOpacity style={{ alignContent: 'center', alignItems: "center", justifyContent: "center", }} activeOpacity={.5}
                    onPress={() => this.uploadPic()}
                  >
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Upload</Text>
                    </View>
                  </TouchableOpacity>

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

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });