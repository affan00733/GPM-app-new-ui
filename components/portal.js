import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";

import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
const logo = require("./images/GDG.jpg");
const cardImage = require("./images/serverless.jpg")
// let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import firebase from 'firebase'; // 4.8.1
import Fire from '../src/features/fire';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0

let deviceHeight = Dimensions.get('window').height;
let width = Dimensions.get('window').width;
const logo1 = require("./images/mkbhd.jpg");

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
            name: this.state.name,
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

        const images = {

            "1": require('../assets/feed_images/1.jpg'),
            "2": require('../assets/feed_images/2.jpg'),
            "3": require('../assets/feed_images/3.png')
        }

        return (
            // <Card>
            //     <CardItem>
            //         <Left>
            //             <Thumbnail source={require('../assets/me.jpg')} />
            //             <Body>
            //                 <Text>Portal   </Text>
            //                 {/* <Text note>Jan 15, 2018</Text> */}
            //             </Body>
            //         </Left>
            //     </CardItem>
            //     {/* <CardItem cardBody>
            //         <Image source={images[1]} style={{ height: 200, width: null, flex: 1 }} />
            //     </CardItem> */}
            //     {/* <CardItem style={{ height: 45 }}>
            //         <Left>
            //             <Button transparent>
            //                 <Icon name="ios-heart-outline" style={{ color: 'black' }} />
            //             </Button>
            //             <Button transparent>
            //                 <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
            //             </Button>
            //             <Button transparent>
            //                 <Icon name="ios-send-outline" style={{ color: 'black' }} />
            //             </Button>


            //         </Left>
            //     </CardItem> */}


            //     <CardItem>
            //         <Body>
                       
                    
            //         <Card style={{ flex: 1 ,width: width * 0.70}}>
            //                 <CardItem>
            //                     <Left>
            //                         <Thumbnail source={logo1} />
            //                         <Body>
            //                             <Text style={{ fontWeight: 'bold' }}>principal mam<Text style={{ fontWeight: 'normal', opacity: 0.5 }}> @MKBHD  •<Text>  2h</Text></Text></Text>
            //                         </Body>
            //                     </Left>
            //                 </CardItem>
            //                 {/* <CardItem cardBody style={{ paddingLeft: 10 }}>
            //                     <Text>Message{'\n\n'} </Text>

            //                 </CardItem> */}
            //                 <CardItem cardBody style={{ paddingLeft: 10 }}>
            //                     {/* <Text> Government Polytechnic Mumbai is an autonomous institute of Government of Maharashtra. Recently in 2010, we have celebrated Golden Jubilee of the institute.{'\n\n'}We have a team of highly qualified, experienced and dedicated faculties and non-teaching staff who are devoted to achieve excellence in the every activity of the institute. We own an excellent infrastructure, well equipped engineering departments, libraries, training and Placement cell, class rooms, seminar rooms and Auditorium Hall etc. {'\n\n'}The synergic efforts taken at the institute will help to achieve the vision of the institute and  make our student globally competitive entrepreneurs and employable engineers. This will ultimately help to transform them into a knowledge pool for India.</Text> */}
            //                     <GiftedChat
            //                                             messages={this.state.messages}
            //                                             onSend={Fire.shared.send}
            //                                             user={this.user}
            //                                             isAnimated={true}
            //                                             loadEarlier={true}
            //                                             isLoadingEarlier={true}
            //                                             showUserAvatar={true}
            //                                             showAvatarForEveryMessage={true}
            //                                             renderAvatarOnTop={true}
            //                                             renderUsernameOnMessage={true}
            //                                             // onPressAvatar={()=>{
            //                                             //     Alert.alert(this.user())
            //                                             // }}
            //                                         />
                                        

            //                 </CardItem>
                         
            //                 <CardItem style={{ paddingVertical: 0 }}>
            //                     <Left>
            //                         <Text></Text>
            //                     </Left>
            //                     <Body>

            //                     </Body>
            //                     <Right>

            //                     </Right>
            //                 </CardItem>
            //             </Card>
            //             {/*  */}
            //             {/* <Card style={{ flex: 1 ,width: width * 0.70}}>
            //                 <CardItem>
            //                     <Left>
            //                         <Thumbnail source={logo1} />
            //                         <Body>
            //                             <Text style={{ fontWeight: 'bold' }}>principal mam<Text style={{ fontWeight: 'normal', opacity: 0.5 }}> @MKBHD  •<Text>  2h</Text></Text></Text>
            //                         </Body>
            //                     </Left>
            //                 </CardItem>
                           
                          
            //                 <CardItem cardBody style={{ paddingLeft: 10 }}>
            //                     <Text>{'\n\n'}Prof.Swati D. Deshpande{'\n\n'} Ph:  9029001925{'\n\n'}  Email:  principal@gpmumbai.ac.in</Text>
            //                 </CardItem>
            //                 <CardItem style={{ paddingVertical: 0 }}>
            //                     <Left>
            //                         <Text></Text>
            //                     </Left>
            //                     <Body>

            //                     </Body>
            //                     <Right>

            //                     </Right>
            //                 </CardItem>
            //             </Card> */}
            //         </Body>
            //     </CardItem>
            // </Card>
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
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});