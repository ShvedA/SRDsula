import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight  } from 'react-native';

export default class Actions extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableHighlight onPress={this.props.onClientClick}>
                        <Text>KLIENT</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableHighlight onPress={this.props.onReceiptClick}>
                        <Text>KVIITUNG</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

Actions.propTypes = {
    onClientClick: PropTypes.func.isRequired,
    onReceiptClick: PropTypes.func.isRequired,
}