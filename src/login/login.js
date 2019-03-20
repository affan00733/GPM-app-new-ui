
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    Button,
    TouchableOpacity,
    ImageBackground,
    Alert,
    ToastAndroid
} from 'react-native';
import firebase from 'firebase'; // 4.8.1

const { width, height } = Dimensions.get("window");

const background = require("./login1_bg.png");
const mark = require("./login1_mark.png");
const lockIcon = require("./login1_lock.png");
const personIcon = require("./login1_person.png");
const backIcon = require("./back.png");
firebase.initializeApp({

    apiKey: "AIzaSyA2OQpG8lowe8FYk7DF6PXRbiHACwRbiJU",
    authDomain: "chatapp-16f24.firebaseapp.com",
    databaseURL: "https://chatapp-16f24.firebaseio.com",
    projectId: "chatapp-16f24",
    storageBucket: "chatapp-16f24.appspot.com",
    messagingSenderId: "559355718425"
});
let json = []
export default class Login extends Component {
    static navigationOptions = {
        headerMode: 'none'
    }
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            data: [],
        }
    }

    login = async () => {
        const { email, password } = this.state
        try {

            await firebase.auth().signInWithEmailAndPassword(email, password).then(async function (user) {
                console.log(user)
                let response = await fetch("http://192.168.43.64/GPM/user_login.php", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({

                        email: email,

                        password: password

                    })
                })
                json = await response.json();
                // this.setState({ data: json });
                // console.log(this.state.data[0])
                console.log('response enroll', json[0].enroll)
                console.log('response enroll', json[0].name)
                console.log('response enroll', json[0].email)

                console.log('response enroll', json[0])



                await ToastAndroid.showWithGravityAndOffset(
                    `welcome ${email}`,
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50,
                );




            })


            await this.props.navigation.navigate('St2'
                , {
                    Enroll: json[0].enroll,
                    Name: json[0].name,
                    Email: json[0].email,
                    year: json[0].year,
                    dept: json[0].dept,
                    shift: json[0].shift,
                    mobile: json[0].mobile,
                    address: json[0].address,
                    gender: json[0].gender,
                    dob: json[0].dob,

                }
            );
        }

        catch (error) {
            console.log(error.toString())
            Alert.alert(error.toString())
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={background} style={[styles.container, styles.bg]}
                    resizeMode="cover">
                    <View style={styles.headerContainer}>

                        <View style={styles.headerIconView}>
                            <TouchableOpacity style={styles.headerBackButtonView} onPress={() => this.props.navigation.navigate('Dr')}>
                                <Image
                                    source={backIcon}
                                    style={styles.backButtonIcon}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>



                    </View>
                    <View style={styles.markWrap}>
                        <Image source={mark} style={styles.mark} resizeMode="contain" />
                    </View>
                    <View style={styles.wrapper}>

                        <View style={styles.inputWrap}>
                            <View style={styles.iconWrap}>
                                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
                            </View>
                            <TextInput
                                placeholder="Email ID"
                                placeholderTextColor="#FFF"
                                onChangeText={email => this.setState({ email })}
                                style={[styles.input, styles.whiteFont]}
                            />
                        </View>
                        <View style={styles.inputWrap}>
                            <View style={styles.iconWrap}>
                                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
                            </View>
                            <TextInput
                                placeholderTextColor="#FFF"
                                placeholder="Password"
                                onChangeText={password => this.setState({ password })}
                                style={[styles.input, styles.whiteFont]}
                                secureTextEntry
                            />
                        </View>
                        <TouchableOpacity activeOpacity={.5}>
                            <View>
                                {/* <Text style={styles.forgotPasswordText}>Forgot Password?</Text> */}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignContent: 'center', alignItems: "center", justifyContent: "center", }} activeOpacity={.5}
                            onPress={() => this.login()}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Sign In</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={[styles.container, { paddingBottom: 10, marginBottom: 10 }]}>
                        <View style={styles.signupWrap}>
                            <Text style={styles.accountText}>Don't have an account?</Text>
                            <TouchableOpacity activeOpacity={.5}>
                                <View>
                                    <Text style={styles.signupLinkText} onPress={() => this.props.navigation.navigate('Signup')}>Sign Up</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    markWrap: {
        flex: 1,
        paddingVertical: 30,
    },
    mark: {
        width: null,
        height: null,
        flex: 1,
    },
    background: {
        width,
        height,
    },
    wrapper: {
        paddingVertical: 30,
    },
    inputWrap: {
        flexDirection: "row",
        marginVertical: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#CCC"
    },
    iconWrap: {
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        height: 20,
        width: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: "#FF3366",
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        width: width * 0.5,
        alignContent: "center",
        borderRadius: 40

    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
    },
    forgotPasswordText: {
        color: "#D8D8D8",
        backgroundColor: "transparent",
        textAlign: "right",
        paddingRight: 15,
    },
    signupWrap: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    accountText: {
        color: "#D8D8D8"
    },
    signupLinkText: {
        color: "#FFF",
        marginLeft: 5,
    },
    container: {
        flex: 1,
    },
    bg: {
        paddingTop: 30,
        width: null,
        height: null
    },
    headerContainer: {
        flex: 1,
    },
    inputsContainer: {
        flex: 3,
        marginTop: 50,
    },
    footerContainer: {
        flex: 1
    },
    headerIconView: {
        marginLeft: 10,
        backgroundColor: 'transparent'
    },
    headerBackButtonView: {
        width: 25,
        height: 25,
    },
    backButtonIcon: {
        width: 25,
        height: 25
    },
    headerTitleView: {
        backgroundColor: 'transparent',
        marginTop: 25,
        marginLeft: 25,
    },
    titleViewText: {
        fontSize: 40,
        color: '#fff',
    },
    inputs: {
        paddingVertical: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent',
        flexDirection: 'row',
        height: 75,
    },
    iconContainer: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputIcon: {
        width: 30,
        height: 30,
    },
    input: {
        flex: 1,
        fontSize: 20,
    },
    signup: {
        backgroundColor: '#FF3366',
        paddingVertical: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    signin: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    greyFont: {
        color: '#D8D8D8'
    },
    whiteFont: {
        color: '#FFF'
    }
})
