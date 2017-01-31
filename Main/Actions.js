import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight  } from 'react-native';

export default class Actions extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableHighlight onPress={this.props.onClientClick} underlayColor="red">
                        <Text>Клиент</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableHighlight onPress={this.props.onReceiptClick} underlayColor="green">
                        <Text>Квитанция</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

Actions.propTypes = {
    onClientClick: PropTypes.func.isRequired,
    onReceiptClick: PropTypes.func.isRequired,
};