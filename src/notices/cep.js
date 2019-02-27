import React, { Component } from 'react';
import { StyleSheet, Text, WebView, View, Linking, Button, Modal, FlatList, Dimensions, PermissionsAndroid, Alert, TouchableHighlight, TouchableOpacity } from 'react-native';
import Pdf from 'react-native-pdf';
import RNFS from 'react-native-fs'
import styles from '../styles/styles'
import IconFont from 'react-native-vector-icons/FontAwesome'

export default class Cep extends Component {
  state = {
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
    Nicon: ''
    // source: require('./a.pdf')
  };

  componentWillMount() {
    this.fetchData();
    // this.UserRegistrationFunction()
  }
  fetchData = async () => {
    const response = await fetch("http://192.168.0.104/GPM/notices/cep.php");
    const json = await response.json();

    this.setState({ link: json });
    console.log('json', json)
    console.log('link', this.state.link[0].link)
    this.setState({ link2: this.state.link })

  };

  notice = () => {

    if (this.state.name == '') {
      // this.setState({Nicon : 'file-pdf-o'})
      return (
        <Pdf
          source={this.state.source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
          }}
          onError={(error) => {
            console.log(error);
          }}
          style={styles.pdf}
        />
      )
    }

    else {
      return (
        <WebView
          source={{ uri: this.state.name }}
          style={styles.web}

        />

      )

    }

  }






  render() {
    // let source = {uri:data}
    // console.log('data',data)

    console.log('source', this.state.source)
    return (
      <View style={styles.container}>


        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 22 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
              <Button
                title='close'

                onPress={() => {
                  this.setState({ modalVisible: false });
                }}>
                >


          </Button>
            </View>
          </View>

          {this.notice()}
          {console.log(this.state.name)}

        </Modal>

        <FlatList
          data={this.state.link}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>

            <View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ modalVisible: true });
                  this.setState({ name: item.link })
                  this.setState({ source: { uri: `http://192.168.0.104/Admin/pages/notices/pdf/${item.filename}` } })
                  console.log(this.state.source)

                }}>
                <View style={styles.notice}>
                  <IconFont name='external-link' color='red' size={28} />

                  <Text style={styles.noticeText}>
                    {` ${item.name} `}

                  </Text>
                </View>
              </TouchableOpacity>

            </View>
          }
        />


        {/* <Button
          title=""
          onPress={() => this.fetchData()}
        /> */}
      </View>
    );
  }
}
