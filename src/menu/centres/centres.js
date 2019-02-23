import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import MainScreen from '../../../components/AppTabNavigator/HomeTab'
import { Block, Card, Icon, Label } from '../../components';
import { Overlay, Button } from 'react-native-elements'
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import ConsTest from './options/ConsTest'
import CentLib from './options/centLib'
import ComClg from './options/comClg'
import ComPol from './options/comPol'
import ExamCell from './options/examCell'
import PlacSer from './options/placSer'

export default class Centres extends React.Component {
  static navigationOptions = {
   
    headerTitle: (
      <Block row middle><Text h4>Centres</Text></Block>
    )
  }
  constructor(props) {
    super(props)
    this.state = {
      isVisibleConsTest: false,
      isVisibleCentLib: false,
      isVisibleComClg: false,
      isVisibleComPol: false,
      isVisibleExamCell: false,
      isVisiblePlacSer: false,
    }
  }

  render() {
    return (
      <View>
        <Overlay
          isVisible={this.state.isVisibleConsTest}
          onBackdropPress={() => this.setState({ isVisibleConsTest: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <ConsTest />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleCentLib}
          onBackdropPress={() => this.setState({ isVisibleCentLib: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <CentLib />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleComClg}
          onBackdropPress={() => this.setState({ isVisibleComClg: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <ComClg />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleComPol}
          onBackdropPress={() => this.setState({ isVisibleComPol: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <ComPol />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleExamCell}
          onBackdropPress={() => this.setState({ isVisibleExamCell: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <ExamCell />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisiblePlacSer}
          onBackdropPress={() => this.setState({ isVisiblePlacSer: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <PlacSer />
        </Overlay>
        <View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Central Library"
              type="outline"
              onPress={() => this.setState({ isVisibleCentLib: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Examination Cell"
              type="outline"
              onPress={() => this.setState({ isVisibleExamCell: true })}
            />
          </View>
          
        </View>

        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Placemnt Services"
              type="outline"
              onPress={() => this.setState({ isVisiblePlacSer: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Community Polytechnic"
              type="outline"
              onPress={() => this.setState({ isVisibleComPol: true })}
            />
          </View>
         
       
      
        </View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Community College"
              type="outline"
              onPress={() => this.setState({ isVisibleComClg: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Consultancy and Testing"
              type="outline"
              onPress={() => this.setState({ isVisibleConsTest: true })}
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
