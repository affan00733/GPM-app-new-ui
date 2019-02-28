import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base'
import CardComponent from '../ConsTest'

class HomeTab extends Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                {/* <Header>
                    <Left><Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} /></Left>
                    <Body><Text style={{ fontSize: 20 }}>Instagram</Text></Body>
                    <Right><Icon style={{ paddingRight: 10 }} name="ios-send-outline" /></Right>
                </Header> */}
                <Content>

                    <View style={{ height: 100 }}>
                        {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
                            <Text style={{ fontWeight: 'bold' }}>Stories</Text>

                            <View style={{ flexDirection: 'row', 'alignItems': 'center' }}>
                                <Icon name="md-play" style={{ fontSize: 14 }}></Icon>
                                <Text style={{ fontWeight: 'bold' }}> Watch All</Text>
                            </View>
                        </View> */}
                        <View style={{ flex: 3 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5
                                }}

                            >
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={{uri : 'https://media.giphy.com/media/d7oIySisFqif2hbCPm/giphy.gif'}} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={{uri : 'https://media.giphy.com/media/fH6alNXs0dom8f9LYO/giphy.gif'}} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={{uri : 'https://media.giphy.com/media/RHIqtNSkzSpNJwCjvV/giphy.gif'}} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={{uri : 'https://media.giphy.com/media/OT4ZCk1Ka6Dld4c7LC/giphy.gif'}} />

                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={{uri : 'https://media.giphy.com/media/54Yh50N6UoM8U4YJu8/giphy.gif'}} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={{uri : 'https://media.giphy.com/media/9OZV68toidVykxgEiH/giphy.gif'}} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={{uri : 'https://media.giphy.com/media/NPIeX1SXfNMdy6E3Gc/giphy.gif'}} />

                            </ScrollView>
                        </View>
                    </View>
                    <CardComponent imageSource="1" likes="101" />
                   
                </Content>
            </Container>
        );
    }
}
export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});