import React, { Component } from 'react';
import { View } from 'react-native';

export default class Actions extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex:1, backgroundColor: 'red'}}></View>
                <View style={{flex:1, backgroundColor: 'orange'}}></View>
            </View>
        );
    }
}