import React, {Component} from 'react';
import './CSS/playlists.css';

export default class Playlists extends Component{
    constructor(props){
        super(props)
        this.state = {
            button: false
        }
    }

    render(){
        const { name,population,platformName,platformId,id,favorite,fav,deleteItem } = this.props;
        console.log()
        
        if(fav.length < 5){
            return (
            <div className="playlistBox">
            <h3>Playlist: {name}</h3>
            <h3>Platform: {platformName}</h3>
            <h3>Population: {population}</h3>
            <button disabled={this.state.button} onClick={() => favorite(id,platformId)}>Add To Favorites</button>
            <button onClick={() => deleteItem(id,platformId)}>Delete</button>
            </div>
            )
        }
        else{
            return (
                <div className="playlistBox">
                <h3>Playlist: {name}</h3>
                <h3>Platform: {platformName}</h3>
                <h3>Population: {population}</h3>
                <button onClick={() => deleteItem(id,platformId)}>Delete</button>
                </div>
                )
        }
    }
}