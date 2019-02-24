import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

import { Block, Card, Icon, Label } from '../../components';
import { Overlay, Button } from 'react-native-elements'
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import Reach from './options/reach'
import Telephone from './options/telephone'

export default class Contact extends React.Component {
  static navigationOptions = {
   
    headerTitle: (
      <Block row middle><Text h4>Contact</Text></Block>
    )
  }
  constructor(props) {
    super(props)
    this.state = {
      isVisibleReach: false,
      isVisibleTelephone: false

    }
  }

  render() {
    return (
      <View>
        <Overlay
          isVisible={this.state.isVisibleReach}
          onBackdropPress={() => this.setState({ isVisibleReach: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Reach />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleTelephone}
          onBackdropPress={() => this.setState({ isVisibleTelephone: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Telephone />
        </Overlay>
        <View>
          <View style={{ flexDirection: 'row' }}
          >
            <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
              <Button
                title="Reach"
                type="outline"
                onPress={() => this.setState({ isVisibleReach: true })}
              />
            </View>
            <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
              <Button
                title="Telephone"
                type="outline"
                onPress={() => this.setState({ isVisibleTelephone: true })}
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
