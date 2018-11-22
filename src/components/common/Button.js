import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const  Button = (props) => {
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>CLick me!!</Text>
        </TouchableOpacity>
        )
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: { 
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius:  5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    }
}
export {Button} ;