import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    KeyboardAvoidingView

} from "react-native";

import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

import firebase from 'firebase'; // 4.8.1
import Fire from '../fire';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0



class CardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            modalVisible: false,
            messages: [],

        }



    }
    get user() {
        return {
            name: this.props.name,
            _id: Fire.shared.uid,
        };
    }
    pre = () => {
        // this.setState({ name: 'affan' });
        console.log('name',this.state.name)
        let name1 = this.props.navigation.state.params.Name
        console.log('name1',name1)
        this.setState({ modalVisible: true, name: name1 });
        console.log('name',this.state.name)

        // this.props.navigation.navigate('Chat', { name: name1 });
    }

    logout = () => {
        this.props.navigation.navigate('Login')

        firebase.auth().signOut().then(function () {
            // Sign-out successful.

            console.log('correct logout')

        }).catch(function (error) {
            // An error happened.
            console.log(error)
        });
    }
    render() {

      

        return (
          
                    
        
         
            <GiftedChat
            messages={this.state.messages}
            onSend={Fire.shared.send}
            user={this.user}
            isAnimated={true}
            loadEarlier={true}
            isLoadingEarlier={true}
            showUserAvatar={true}
            showAvatarForEveryMessage={true}
            renderAvatarOnTop={true}
            renderUsernameOnMessage={true}
            // onPressAvatar={()=>{
            //     Alert.alert(this.user())
            // }}
        />
        );
    }
    componentDidMount() {
      Fire.shared.on(message =>
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, message),
        }))
      );
    }
    componentWillUnmount() {
      Fire.shared.off();
    }
  
  }

export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});