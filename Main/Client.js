import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';

export default class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: 'поиск',
            number: 'номер'
        };
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(search) => this.setState({search})}
                        value={this.state.search}
                    />
                </View>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(number) => this.setState({number})}
                        value={this.state.number}
                    />
                </View>
            </View>
        );
    }
}