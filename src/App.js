import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
export default class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyAn0wFCUb_iR-a3dOfhVXDkoW3uncTj3Ow',
      authDomain: 'auth-9f8f1.firebaseapp.com',
      databaseURL: 'https://auth-9f8f1.firebaseio.com',
      projectId: 'auth-9f8f1',
      storageBucket: 'auth-9f8f1.appspot.com',
      messagingSenderId: '159091660432'
    });
  }
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm/>
      </View>
    );
  }
}
