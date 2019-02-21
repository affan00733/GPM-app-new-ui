import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Dimensions} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import MainScreen from '../../../components/AppTabNavigator/HomeTab'
import { Block, Card, Icon, Label } from '../../components';
import {Overlay,Button} from 'react-native-elements'
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import PrincipalDesk from './options/principleDesk' 
export default class AboutUS extends React.Component {
  static navigationOptions = {
    headerLeftContainerStyle: {
        paddingLeft: 34,

    },
    headerRightContainerStyle: {
        paddingRight: 24
    },
    headerLeft: (
        <TouchableOpacity style={{marginLeft : 10}}  ><Icon menu /></TouchableOpacity>
    ),
    headerRight: (
        <TouchableOpacity style={{marginRight : 10}} ><Icon notification /></TouchableOpacity>
    ),
    headerTitle: (
        <Block row middle><Text h4>About US</Text></Block>
    )
}
constructor(props){
  super(props)
  this.state={
    isVisible : false
  }
}

  render() {
    return (
      <View>
<Overlay
  isVisible={this.state.isVisible}
  onBackdropPress={() => this.setState({ isVisible: false })}
  windowBackgroundColor="rgba(255, 255, 255, .5)"
  // overlayBackgroundColor="red"
  width={width * 0.85}
  height={height * 0.85}
>
<PrincipalDesk />
  </Overlay>
<View   style = {{ width : width * 0.5, paddingLeft : width * 0.05, paddingTop : width * 0.05}}
>
<Button
  title="Principal desk"
  type="outline"
  onPress={()=>this.setState({ isVisible: true })}
/>
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
