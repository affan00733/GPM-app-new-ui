import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import MainScreen from '../../../components/AppTabNavigator/HomeTab'
import { Block, Card, Icon, Label } from '../../components';
import { Overlay, Button } from 'react-native-elements'
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import Civil from './options/civil'
import Computer from './options/computer'
import Electrical from './options/electrical'
import Electronics from './options/electronics'
import InforTec from './options/inforTec'
import Instrum from './options/instrum'
import Leather from './options/leather'
import Mech from './options/mech'
import Rubber from './options/rubber'
import Sci from './options/sci'

export default class Department extends React.Component {
  static navigationOptions = {
    
    headerTitle: (
      <Block row middle><Text h4>Department</Text></Block>
    )
  }
  constructor(props) {
    super(props)
    this.state = {
      isVisibleCivil: false,
      isVisibleComputer: false,
      isVisibleElectrical: false,
      isVisibleElectronics: false,
      isVisibleInforTec: false,
      isVisibleInstrum: false,
      isVisibleLeather: false,
      isVisibleMech: false,
      isVisibleRubber: false,
      isVisibleSci: false,

    }
  }

  render() {
    return (
      <View>
        <Overlay
          isVisible={this.state.isVisibleCivil}
          onBackdropPress={() => this.setState({ isVisibleCivil: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Civil />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleComputer}
          onBackdropPress={() => this.setState({ isVisibleComputer: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Computer />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleElectrical}
          onBackdropPress={() => this.setState({ isVisibleElectrical: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Electrical />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleElectronics}
          onBackdropPress={() => this.setState({ isVisibleElectronics: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Electronics />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleInforTec}
          onBackdropPress={() => this.setState({ isVisibleInforTec: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <InforTec />
        </Overlay>
        
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleInstrum}
          onBackdropPress={() => this.setState({ isVisibleInstrum: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Instrum />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleLeather}
          onBackdropPress={() => this.setState({ isVisibleLeather: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Leather/>
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleMech}
          onBackdropPress={() => this.setState({ isVisibleMech: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Mech/>
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleSci}
          onBackdropPress={() => this.setState({ isVisibleSci: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Sci />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleRubber}
          onBackdropPress={() => this.setState({ isVisibleRubber: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Rubber/>
        </Overlay>
        <View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Civil Engineering"
              type="outline"
              onPress={() => this.setState({ isVisibleCivil: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Computer Engineering"
              type="outline"
              onPress={() => this.setState({ isVisibleComputer: true })}
            />
          </View>
          
        </View>

        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Electrical Engineering"
              type="outline"
              onPress={() => this.setState({ isVisibleElectrical: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Electronics Engineering"
              type="outline"
              onPress={() => this.setState({ isVisibleElectronics: true })}
            />
          </View>
         
       
      
        </View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Information Technology"
              type="outline"
              onPress={() => this.setState({ isVisibleInforTec: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Instrumentation Engineering"
              type="outline"
              onPress={() => this.setState({ isVisibleInstrum: true })}
            />
          </View>
          
        </View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Leather Technology"
              type="outline"
              onPress={() => this.setState({ isVisibleLeather: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Mechanical Engineering"
              type="outline"
              onPress={() => this.setState({ isVisibleMech: true })}
            />
          </View>
          
        </View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Science & Humanities"
              type="outline"
              onPress={() => this.setState({ isVisibleSci: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Rubber Technology"
              type="outline"
              onPress={() => this.setState({ isVisibleRubber: true })}
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
