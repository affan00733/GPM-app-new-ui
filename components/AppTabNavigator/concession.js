import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base'
import CardComponent from '../concession'

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
                                    source={require('../../assets/StoriesHeaderThumbnails/1.jpg')} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/StoriesHeaderThumbnails/2.jpg')} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/StoriesHeaderThumbnails/3.jpg')} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/StoriesHeaderThumbnails/4.jpg')} />

                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/StoriesHeaderThumbnails/5.jpg')} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/StoriesHeaderThumbnails/6.jpg')} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/StoriesHeaderThumbnails/7.jpg')} />

                            </ScrollView>
                        </View>
                    </View>
                    <CardComponent
                        name={this.props.name}
                        email={this.props.email}
                        enroll={this.props.enroll}

                        year={this.props.year}
                        dept={this.props.dept}
                        shift={this.props.shift}
                        mobile={this.props.mobile}
                        address={this.props.address}
                        gender={this.props.gender}
                        dob={this.props.dob}
                        imageSource="1" likes="101" />

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