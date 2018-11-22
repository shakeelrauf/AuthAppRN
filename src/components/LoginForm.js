import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import {Button,Card,Input, CardItem} from './common'
class LoginForm extends Component {
    state = {email: '',passwrod: ''}
    onButtonPress(){
        const {email, password} = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
            })
    }
    render(){
        return(
            <Card>
                <CardItem>
                    <Input
                        placeholder="example@text.com"
                        label={"Emai"}
                        value={this.state.email}
                        onChangeText={email => this.setState({email})} 
                        style={{height: 20,width: 100, color: 'black'}}/>
                </CardItem>
                <CardItem>
                    <Input
                        placeholder="******"
                        label={"Passwrod"}
                        value={this.state.password}
                        secureTextEntry={true}
                        onChangeText={password => this.setState({password})} 
                        style={{height: 20,width: 100, color: 'black'}}/>
                </CardItem>
                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardItem>
            </Card>
            )
    }
}

export default LoginForm;