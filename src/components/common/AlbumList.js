import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios'
import AlbumDetails from './AlbumDetails'


class AlbumList extends Component { 
    state = {albums: []};
    componentWillMount(){
        console.log("HEllo i am mounted data")
        axios.get("http://rallycoding.herokuapp.com/api/music_albums")
            .then(response => this.setState({albums: response.data}));
    }


    listOfAlbums(){
        return this.state.albums.map(album =>  
            <AlbumDetails key={album.title} album={album} />
        )
    }
    render(){
    console.log(this.state)
    return (
            <ScrollView>
               {this.listOfAlbums()}
            </ScrollView>
        );
    }
}


export  {AlbumList};