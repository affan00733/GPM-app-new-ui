import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Block, Card, Icon, Label } from '../../components';
import { Overlay, Button } from 'react-native-elements'
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import DiplProg from './options/diplProg'
import ContEduPrg from './options/contEduPrg'
import AbtSch from './options/cont colg schem/abtSch'
import AdmNot from './options/cont colg schem/admNot'
import Broch from './options/cont colg schem/broch'


export default class Admission extends React.Component {
  static navigationOptions = {
    
    headerTitle: (
      <Block row middle><Text h4>Admission</Text></Block>
    )
  }
  constructor(props) {
    super(props)
    this.state = {
      isVisibleDiplProg: false,
      isVisibleContEduPrg: false,
      isVisibleAbtSch: false,
      isVisibleAdmNot: false,
      isVisibleBroch: false,
    }
  }

  render() {
    return (
      <View>
        <Overlay
          isVisible={this.state.isVisibleDiplProg}
          onBackdropPress={() => this.setState({ isVisibleDiplProg: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <DiplProg />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleContEduPrg}
          onBackdropPress={() => this.setState({ isVisibleContEduPrg: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <ContEduPrg />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleAbtSch}
          onBackdropPress={() => this.setState({ isVisibleAbtSch: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <AbtSch />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleAdmNot}
          onBackdropPress={() => this.setState({ isVisibleAdmNot: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <AdmNot />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleAdmNot}
          onBackdropPress={() => this.setState({ isVisibleAdmNot: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <AdmNot />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleBroch}
          onBackdropPress={() => this.setState({ isVisibleBroch: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Broch />
        </Overlay>
        <View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Diploma programme"
              type="outline"
              onPress={() => this.setState({ isVisibleDiplProg: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Continuing education programmes"
              type="outline"
              onPress={() => this.setState({ isVisibleContEduPrg: true })}
            />
          </View>
          
        </View>

        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="About Scheme"
              type="outline"
              onPress={() => this.setState({ isVisibleAbtSch: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Admission Notice"
              type="outline"
              onPress={() => this.setState({ isVisibleAdmNot: true })}
            />
          </View>
         
       
      
        </View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Brochure"
              type="outline"
              onPress={() => this.setState({ isVisibleBroch : true })}
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
