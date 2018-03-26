import React, {Component} from 'react';
import './CSS/favorites.css';

export default class Favorites extends Component{
    render(){
        const { name,population,platformName,platformId,id,favorite,moveFav } = this.props;

        

        return(
            <div className="favorites">
                {!favorite.length ? (<div />) : (
                    <div className="fav">
                    <h3>Playlist: {name}</h3>
                    <h3>Platform: {platformName}</h3>
                    <h3>Population: {population.players}</h3>
                    <button onClick={() => moveFav(id,platformId)}>Remove</button>
                    </div>
                )}
            </div>
        )
    }
}
