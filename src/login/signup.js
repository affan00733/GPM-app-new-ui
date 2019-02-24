import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
  Picker,
  Modal,
  Button,
  Alert,
  ToastAndroid
} from 'react-native'
const { width, height } = Dimensions.get("window");
//  import LocationPicker from 'react-native-location-picker';
import firebase from 'firebase'; // 4.8.1

const background = require("./signup_bg.png");
const backIcon = require("./back.png");
const personIcon = require("./signup_person.png");
const lockIcon = require("./signup_lock.png");
const emailIcon = require("./signup_email.png");
const birthdayIcon = require("./signup_birthday.png");
const dropIcon = require("./dropdown.png");

export default class Signup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false,
      enroll: '',
      name: '',
      email: '',
      password: '',
      year: '',
      dept: '',
      shift: '',
      mobile: '',
      address: '',
      dob : '',
      gender : ''

    }
  }

  pres = () => {
    const { enroll, name, email, password, year, dept, shift, mobile, address ,dob,gender} = this.state

    console.log(enroll)
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(year)
    console.log(dept)
    console.log(shift)
    console.log(mobile)
    console.log(address)

    

    fetch('http://192.168.0.105/user_registration.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        enroll: enroll,

        name: name,
        email: email,
        password: password,
        year: year,
        dept: dept,
        shift: shift,
        mobile: mobile,
        address: address,
        dob : dob,
        gender : gender,

      })

    }).then((response) => response.json())
      .then((responseJson) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
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
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={background}
          style={[styles.container, styles.bg]}
          resizeMode="cover"
        >
          <ScrollView>
            <View style={styles.headerContainer}>

              <View style={styles.headerIconView}>
                <TouchableOpacity style={styles.headerBackButtonView} onPress={() => this.props.navigation.goBack()}>
                  <Image
                    source={backIcon}
                    style={styles.backButtonIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.headerTitleView}>
                <Text style={styles.titleViewText}>Sign Up</Text>
              </View>

            </View>

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
                  placeholder="Enrollment No."
                  placeholderTextColor="#FFF"
                  onChangeText={enroll => this.setState({ enroll })}

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
                  placeholder="Name"
                  placeholderTextColor="#FFF"
                  underlineColorAndroid='transparent'
                  onChangeText={name => this.setState({ name })}

                />
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image
                    source={emailIcon}
                    style={styles.inputIcon}
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  style={[styles.input, styles.whiteFont]}
                  placeholder="Email"
                  placeholderTextColor="#FFF"
                  onChangeText={email => this.setState({ email })}

                />
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image
                    source={lockIcon}
                    style={styles.inputIcon}
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  secureTextEntry={true}
                  style={[styles.input, styles.whiteFont]}
                  placeholder="Password"
                  placeholderTextColor="#FFF"
                  onChangeText={password => this.setState({ password })}

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
                  selectedValue={this.state.year}
                  style={[styles.input, styles.whiteFont, { color: '#FFF', paddingTop: 13, marginTop: 12 }]}
                  onValueChange={(itemValue, itemIndex) => this.setState({ year: itemValue })}
                  prompt='Year'
                >

                  <Picker.Item label="I Year" value="I Year" />
                  <Picker.Item label="II Year" value="II Year" />
                  <Picker.Item label="III Year" value="III Year" />
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
                  selectedValue={this.state.dept}
                  style={[styles.input, styles.whiteFont, { color: '#FFF', paddingTop: 13, marginTop: 12 }]}
                  onValueChange={(itemValue, itemIndex) => this.setState({ dept: itemValue })}
                  prompt='Department'
                >

                  <Picker.Item label="Civil Engineering" value="Civil Engineering" />
                  <Picker.Item label="Computer Engineering" value="Computer Engineering" />
                  <Picker.Item label="Electrical Engineering" value="Electrical Engineering" />
                  <Picker.Item label="Electronics Engineering" value="Electronics Engineering" />
                  <Picker.Item label="Information Technology" value="Information Technology" />
                  <Picker.Item label="Instrumentation Engineering" value="Instrumentation Engineering" />
                  <Picker.Item label="Rubber Technology" value="Rubber Technology" />
                  <Picker.Item label="Leather Technology" value="Leather Technology" />
                  <Picker.Item label="Mechanical Engineering" value="Mechanical Engineering" />



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
                  selectedValue={this.state.shift}
                  style={[styles.input, styles.whiteFont, { color: '#FFF', paddingTop: 13, marginTop: 12 }]}
                  onValueChange={(itemValue, itemIndex) => this.setState({ shift: itemValue })}
                  prompt='Shift'
                >

                  <Picker.Item label="I Shift" value="I Shift" />
                  <Picker.Item label="II Shift" value="II Shift" />
                </Picker>
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image
                    source={lockIcon}
                    style={styles.inputIcon}
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  style={[styles.input, styles.whiteFont]}
                  placeholder="Mobile No."
                  placeholderTextColor="#FFF"
                  onChangeText={mobile => this.setState({ mobile })}

                />
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image
                    source={lockIcon}
                    style={styles.inputIcon}
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  style={[styles.input, styles.whiteFont]}
                  placeholder="Address"
                  placeholderTextColor="#FFF"
                  onChangeText={address => this.setState({ address })}

                />
              </View>
              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image
                    source={lockIcon}
                    style={styles.inputIcon}
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  style={[styles.input, styles.whiteFont]}
                  placeholder="Date of Birth"
                  placeholderTextColor="#FFF"
                  onChangeText={dob => this.setState({ dob })}

                />
              </View>

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
                  selectedValue={this.state.gender}
                  style={[styles.input, styles.whiteFont, { color: '#FFF', paddingTop: 13, marginTop: 12 }]}
                  onValueChange={(itemValue, itemIndex) => this.setState({ gender: itemValue })}
                  prompt='Gender'
                >

                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                  <Picker.Item label="Other" value="Other" />

                </Picker>
              </View>

            <View style={styles.footerContainer}>

              <TouchableOpacity style={{ alignContent: 'center', alignItems: "center", justifyContent: "center", marginTop: 10 }}
                // onPress={() => this.setState({ modalVisible: true })}
                onPress={() => this.pres()}
              >
                <View style={styles.signup}>
                  <Text style={styles.whiteFont}>Join</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{ paddingBottom: 50, marginBottom: 50 }}>
                <View style={styles.signin}>
                  <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont}> Sign In</Text></Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

let styles = StyleSheet.create({
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
    marginTop: 15,

    width: width * 0.5,
    alignContent: "center",
    borderRadius: 40
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
    color: '#FFF',
    fontSize: 18,

  }
})