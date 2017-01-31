/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Action from './Main/Actions';
import Client from './Main/Client';
import Receipt from './Main/Receipt';
import MenuItem from './Main/Constants/MenuItem';
const client = 'client';
const main = 'main';
const receipt = 'receipt';

export default class SRDsula extends Component {

    clientClicked() {

        this.forward(client);
    }

    receiptClicked() {

        this.forward(receipt);
    }

    forward(name) {
        const nextIndex = this.route.index + 1;
        navigator.push({
            menu: name,
            index: nextIndex,
        });
    }

    back() {
        if (this.route.index > 0) {
            navigator.pop();
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{menu: main, index: 0}}
                renderScene={(route, navigator) =>
                <div>
                    route.menu == main &&
                    <Action
                        onClientClick={() => {
                            this.clientClicked();
                        }}

                        onReceiptClick={() => {
                            alert('receiptClicked');
                        }}
                    />
                    route.client == client &&
                    <Client/>
                </div>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('Autopesula', () => SRDsula);
