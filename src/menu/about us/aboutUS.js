import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import MainScreen from '../../../components/AppTabNavigator/HomeTab'
import { Block, Card, Icon, Label } from '../../components';
import { Overlay, Button } from 'react-native-elements'
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import PrincipalDesk from './options/principleDesk'
import AboutInst from './options/aboutInst'
import MissionVission from './options/missionVission'
import OrganStruc from './options/organStruc'
import GovernBod from './options/governBod'
import Rti from './options/rti'
import CitiChar from './options/citiChar'
import ManDis from './options/manDis'
import Infra from './options/infra'

export default class AboutUS extends React.Component {
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
      <TouchableOpacity style={{ marginRight: 10 }} ><Icon notification /></TouchableOpacity>
    ),
    headerTitle: (
      <Block row middle><Text h4>About US</Text></Block>
    )
  }
  constructor(props) {
    super(props)
    this.state = {
      isVisiblePrincipalDesk: false,
      isVisibleAboutInst: false,
      isVisibleMissionVission: false,
      isVisibleOrganStruc: false,
      isVisibleGovernBod: false,
      isVisibleRti: false,
      isVisibleCitiChar: false,
      isVisibleManDis: false,
      isVisibleInfra: false,


    }
  }

  render() {
    return (
      <View>
        <Overlay
          isVisible={this.state.isVisiblePrincipalDesk}
          onBackdropPress={() => this.setState({ isVisiblePrincipalDesk: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <PrincipalDesk />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleAboutInst}
          onBackdropPress={() => this.setState({ isVisibleAboutInst: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <AboutInst />
        </Overlay>
        {/*  */} 
        <Overlay
          isVisible={this.state.isVisibleMissionVission}
          onBackdropPress={() => this.setState({ isVisibleMissionVission: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <MissionVission />
        </Overlay>
        {/*  */} 
        <Overlay
          isVisible={this.state.isVisibleOrganStruc}
          onBackdropPress={() => this.setState({ isVisibleOrganStruc: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <OrganStruc />
        </Overlay>
        {/*  */} 
        <Overlay
          isVisible={this.state.isVisibleGovernBod}
          onBackdropPress={() => this.setState({ isVisibleGovernBod: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <GovernBod />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleRti}
          onBackdropPress={() => this.setState({ isVisibleRti: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Rti />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleCitiChar}
          onBackdropPress={() => this.setState({ isVisibleCitiChar: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <CitiChar />
        </Overlay>
        {/*  */}
         <Overlay
          isVisible={this.state.isVisibleManDis}
          onBackdropPress={() => this.setState({ isVisibleManDis: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <ManDis />
        </Overlay>
        {/*  */} 
        <Overlay
          isVisible={this.state.isVisibleInfra}
          onBackdropPress={() => this.setState({ isVisibleInfra: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Infra />
        </Overlay>
        {/*  */}

        <View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Principal desk"
              type="outline"
              onPress={() => this.setState({ isVisiblePrincipalDesk: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="About Institute"
              type="outline"
              onPress={() => this.setState({ isVisibleAboutInst: true })}
            />
          </View>
          
        </View>

        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Mission and Vision"
              type="outline"
              onPress={() => this.setState({ isVisibleMissionVission: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Organizing Structure"
              type="outline"
              onPress={() => this.setState({ isVisibleOrganStruc: true })}
            />
          </View>
         
       
      
        </View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Governing Body"
              type="outline"
              onPress={() => this.setState({ isVisibleGovernBod: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="RTI Act"
              type="outline"
              onPress={() => this.setState({ isVisibleRti: true })}
            />
          </View>
          
        </View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Citizen Charter"
              type="outline"
              onPress={() => this.setState({ isVisibleCitiChar: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Mandatory Disclosure"
              type="outline"
              onPress={() => this.setState({ isVisibleManDis: true })}
            />
          </View>
          
        </View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Infrastructure"
              type="outline"
              onPress={() => this.setState({ isVisibleInfra: true })}
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
