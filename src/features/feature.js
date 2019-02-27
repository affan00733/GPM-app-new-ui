import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
// import prop
import { Block, Card, Icon, Label } from '../components';
import { Overlay, Button } from 'react-native-elements'
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import Concession from './options/concession'
import Feedbck from './options/feedbck'
import Portal from './options/portal'
// let name = this.props.navigation.state.params.Name

// let email= this.props.navigation.state.params.Email
// let enroll= this.props.navigation.state.params.Enroll

export default class Gallery extends React.Component {
  static navigationOptions = {
    headerLeftContainerStyle: {
      paddingLeft: 34,

    },
    headerRightContainerStyle: {
      paddingRight: 24
    },
    headerLeft: (
      <TouchableOpacity style={{ marginLeft: 10 }}  ><Icon menu /></TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity style={{ marginRight: 10 }} onPress={() => this.props.navigation.navigate('Login')} ><Icon notification /></TouchableOpacity>
    ),
    headerTitle: (
      <Block row middle><Text h4>Features</Text></Block>
    )
  }
  constructor(props) {
    super(props)
    this.state = {
      isVisibleConcession: false,
      isVisibleFeedback: false,
      isVisiblePortal: false,

    }
  }

  render() {
    return (
      <View>

     
        <Overlay
          isVisible={this.state.isVisibleConcession}
          onBackdropPress={() => this.setState({ isVisibleConcession: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Concession
            name={this.props.navigation.state.params.Name}
            email={this.props.navigation.state.params.Email}
            enroll={this.props.navigation.state.params.Enroll}
            year={this.props.navigation.state.params.year}
            dept={this.props.navigation.state.params.dept}
            shift={this.props.navigation.state.params.shift}
            mobile={this.props.navigation.state.params.mobile}
            address={this.props.navigation.state.params.address}
            gender={this.props.navigation.state.params.gender}
            dob={this.props.navigation.state.params.dob}
          />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleFeedback}
          onBackdropPress={() => this.setState({ isVisibleFeedback: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Feedbck
            name={this.props.navigation.state.params.Name}
            email={this.props.navigation.state.params.Email}
            enroll={this.props.navigation.state.params.Enroll}
          />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisiblePortal}
          onBackdropPress={() => this.setState({ isVisiblePortal: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
          fullScreen={true}
        >
          <Portal />
        </Overlay>
        <View>
          <View style={{ flexDirection: 'column' }}
          >
            <View style={{ paddingLeft: width * 0.05, paddingRight: width * 0.05, paddingTop: width * 0.05, height: height * 0.05, marginBottom: width * 0.05, }}>
              <Button
                title="Concession"
                type="outline"
                onPress={() => this.setState({ isVisibleConcession: true })}
              />
            </View>
            <View style={{ paddingLeft: width * 0.05, paddingRight: width * 0.05, paddingTop: width * 0.05, height: height * 0.05, marginBottom: width * 0.05, }}>
              <Button
                title="Feedback"
                type="outline"
                onPress={() => this.setState({ isVisibleFeedback: true })}
              />
            </View>
            <View style={{ paddingLeft: width * 0.05, paddingRight: width * 0.05, paddingTop: width * 0.05, height: height * 0.05, marginBottom: width * 0.05, }}>
              <Button
                title="Portal"
                type="outline"
                onPress={() => this.setState({ isVisiblePortal: true })}
              />
            </View>

          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
