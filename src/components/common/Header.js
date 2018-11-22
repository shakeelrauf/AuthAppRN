import React, {Component} from 'react';
import {Text ,View, StyleSheet} from 'react-native';


class Header extends Component { 
    
    render(){
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.headerText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        backgroundColor: '#798d99',
        fontWeight: 'bold',
        fontSize: 23,
        color: 'white',
        justifyContent:  'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 19},
        shadowOpacity: 0.7,
        alignItems: 'center',
        height: 60,
        paddingTop: 15
    }
    
});

export  {Header};