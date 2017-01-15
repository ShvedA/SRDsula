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
import Action from './Main/Actions'

export default class SRDsula extends Component {

  clientClicked(){
      const nextIndex = this.route.index + 1;
      navigator.push({
          title: 'Scene ' + nextIndex,
          index: nextIndex,
      });
  }

  backClicked(){
      if (this.route.index > 0) {
          navigator.pop();
      }
  }

  render() {
    return (
      <Navigator
        initialRoute={{index: 0 }}
        renderScene={(route, navigator) =>
          <Action
            onClientClick={() => {
            this.clientClicked();}}

            onReceiptClick={() => {
            alert('receiptClicked');}}
          ></Action>
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
