import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Actions extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}><Text>KLIENT</Text></View>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}><Text>KVIITUNG</Text></View>
            </View>
        );
    }
}