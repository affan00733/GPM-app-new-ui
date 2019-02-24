import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

import { Block, Card, Icon, Label } from '../../components';
import { Overlay, Button } from 'react-native-elements'
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import AcadCal from './options/acadCal'
import Circular from './options/circular'
import ClassTT from './options/classTT'
import Curr from './options/curr'
import Online from './options/online'
import QuestPaper from './options/questPaper'
import Result from './options/result'


export default class StudentSec extends React.Component {
  static navigationOptions = {
    
    headerTitle: (
      <Block row middle><Text h4>Student Section</Text></Block>
    )
  }
  constructor(props) {
    super(props)
    this.state = {
      isVisibleAcadCal: false,
      isVisibleCircular: false,
      isVisibleClassTT: false,
      isVisibleCurr: false,
      isVisibleOnline: false,
      isVisibleQuestPaper: false,
      isVisibleResult: false,
     
      
    }
  }

  render() {
    return (
      <View>
        <Overlay
          isVisible={this.state.isVisibleAcadCal}
          onBackdropPress={() => this.setState({ isVisibleAcadCal: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <AcadCal/>
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleCurr}
          onBackdropPress={() => this.setState({ isVisibleCurr: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Curr/>
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleQuestPaper}
          onBackdropPress={() => this.setState({ isVisibleQuestPaper: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <QuestPaper/>
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleCircular}
          onBackdropPress={() => this.setState({ isVisibleCircular: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Circular/>
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleOnline}
          onBackdropPress={() => this.setState({ isVisibleOnline: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Online />
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleResult}
          onBackdropPress={() => this.setState({ isVisibleResult: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <Result/>
        </Overlay>
        {/*  */}
        <Overlay
          isVisible={this.state.isVisibleClassTT}
          onBackdropPress={() => this.setState({ isVisibleClassTT: false })}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          // overlayBackgroundColor="red"
          width={width * 0.85}
          height={height * 0.85}
        >
          <ClassTT/>
        </Overlay>
        <View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Academic Calendar"
              type="outline"
              onPress={() => this.setState({ isVisibleAcadCal: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Curriculum"
              type="outline"
              onPress={() => this.setState({ isVisibleCurr: true })}
            />
          </View>
          
        </View>

        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Question paper"
              type="outline"
              onPress={() => this.setState({ isVisibleQuestPaper: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Circular / Notices"
              type="outline"
              onPress={() => this.setState({ isVisibleCircular: true })}
            />
          </View>
         
       
      
        </View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Online Resources"
              type="outline"
              onPress={() => this.setState({ isVisibleOnline: true })}
            />
          </View>
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Result"
              type="outline"
              onPress={() => this.setState({ isVisibleResult: true })}
            />
          </View>
          
        </View>
        <View style={{ flexDirection: 'row' }}
        >
          <View style={{ width: width * 0.47, paddingLeft: width * 0.05, paddingTop: width * 0.05 }}>
            <Button
              title="Class Time Table"
              type="outline"
              onPress={() => this.setState({ isVisibleClassTT: true })}
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
