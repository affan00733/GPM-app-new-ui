import { StyleSheet, Text, WebView, View, Linking, Button, Modal, FlatList, Dimensions, PermissionsAndroid, Alert, TouchableHighlight, TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get('window')
const offset = 24;

export default styles = StyleSheet.create({
  container: { flex: 1, padding: 5, paddingTop: 10, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  // headerDip: { height: 30, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100', fontSize: 10 },
  dataWrapper: { marginTop: -1 },
  row: { height: 60, backgroundColor: '#E7E6E1' },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  row1: { height: 70, backgroundColor: '#E7E6E1' },
  row2: { height: 50, backgroundColor: '#E7E6E1' },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#F5FCFF',

  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  },
  profileContent: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
    paddingLeft: 16
  },
  profileBg: {
    width: null,
    height: 200
  },
  menuItem: {
    paddingLeft: 15,
    paddingVertical: 10,
    flexDirection: 'row'
  },
  // menuItemText: {
  //   fontSize: 18,
  //   color: RkConfig.colors.darkGray
  // },
  // menuItemIcon: {
  //   fontSize: 22,
  //   marginRight: 30,
  //   color: RkConfig.colors.darkGray
  // },
  subMenu: {
    marginLeft: 15
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10
  },
  userPhotoSmall: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 20,
  },
  profileTitle: {
    backgroundColor: 'transparent',
    fontSize: 18,
    // color: RkConfig.colors.white,
    fontWeight: 'bold'
  },
  profileEmail: {
    marginTop: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  pdf: {
    flex: 1,
    // height: Dimensions.get('window').height,
    // width: Dimensions.get('window').width,
  },

  web: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  notice:
  {
    flexDirection: 'row',
    padding: 7
  },
  noticeText: {
    paddingLeft: 4,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 24,
    // textDecorationLine : 'underline'
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
    backgroundColor: 'black'
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

  },
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,

    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
  drawerStyle: {
    height: height * 0.005, 
    backgroundColor: 'black',
     borderRadius: 2,
    //  paddingTop : 10
  }
});