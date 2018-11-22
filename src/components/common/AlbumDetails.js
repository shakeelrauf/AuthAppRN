import React, {Component}  from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardItem  from './CardItem';
import Button  from './Button';

const AlbumDetails = ({album}) =>{
    const  {title, artist, thumbnail_image,image, url} = album;
    return(
        <Card>
            <CardItem>
                <View style={styles.thumbailStyle}>
                    <Image 
                        style={styles.thumbailStyle}
                        source={{uri: thumbnail_image}} 
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardItem>
            <CardItem>
                <Image style={styles.imageStyle} source={{uri:  image}}/>
            </CardItem>
            <CardItem>
                <Button onPress={() =>  Linking.openURL('https://facebook.com')}/>
            </CardItem>
        </Card>
    )
}


const styles= {
    headerContentStyle: {
        flexDirection:  'column',
        justifyContent: 'space-around'
    },
    thumbailStyle: {
        width: 50,
        height: 50
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
}
export  {AlbumDetails};