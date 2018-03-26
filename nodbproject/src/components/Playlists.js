import React, {Component} from 'react';
import './CSS/playlists.css';

export default class Playlists extends Component{

    render(){
        const { name,population,platformName,platformId,id,favorite,fav,deleteItem } = this.props;
        
        if(fav.length < 5){
            return (
            <div className="playlistBox">
            <h3>Playlist: {name}</h3>
            <h3>Platform: {platformName}</h3>
            <h3>Population: {population}</h3>
            <button className='orange-btn' onClick={() => favorite(id,platformId)}>Add To Favorites</button>
            <button className='blue-btn' onClick={() => deleteItem(id,platformId)}>Delete</button>
            </div>
            )
        }
        else{
            return (
                <div className="playlistBox">
                <h3>Playlist: {name}</h3>
                <h3>Platform: {platformName}</h3>
                <h3>Population: {population}</h3>
                <button className='blue-btn' onClick={() => deleteItem(id,platformId)}>Delete</button>
                </div>
                )
        }
    }
}