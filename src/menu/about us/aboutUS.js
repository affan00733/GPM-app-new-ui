import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert,Dimensions } from 'react-native';
import { Block, Card, Icon, Label } from '../../components';
import { Overlay, Button } from 'react-native-elements'
// import Button from '../../../animated button/button'
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
    const { style, full, opacity, children, ...props } = this.props;

    return (
      <View>
        <Overlay
          isVisible={this.state.isVisiblePrincipalDesk}
          onBackdropPress={() => this.setState({ isVisiblePrincipalDesk: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
          fullScreen={true}
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
          fullScreen={true}

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
          fullScreen={true}

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
          fullScreen={true}

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
          fullScreen={true}

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
          fullScreen={true}

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
          fullScreen={true}

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
          fullScreen={true}

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
          fullScreen={true}

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
