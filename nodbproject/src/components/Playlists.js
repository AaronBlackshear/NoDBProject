import React, {Component} from 'react';
import './CSS/playlists.css';

export default class Playlists extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { name,population,platformName,platformId,id,favorite } = this.props;

        return (
            <div>
                <div className="playlistBox">
                    <h3>Playlist: {name}</h3>
                    <h3>Platform: {platformName}</h3>
                    <h3>Population: {population}</h3>
                    <button onClick={() => favorite(id,platformId)}>Add To Favorites</button>
                </div>
            </div>
        )
    }
}