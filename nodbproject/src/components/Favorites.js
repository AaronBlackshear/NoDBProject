import React, {Component} from 'react';
import './CSS/favorites.css';

export default class Favorites extends Component{
    render(){
        const { name,population,platformName,platformId,id,favorite,moveFav } = this.props;

        

        return(
            <div className="favorites">
                {!favorite.length ? (<div />) : (
                    <div className="fav">
                    <h3 className="fav">Playlist: {name}</h3>
                    <h3 className="fav">Platform: {platformName}</h3>
                    <h3 className="fav">Population: {population.players}</h3>
                    <button className="remove fav" onClick={() => moveFav(id,platformId)}>Remove</button>
                    </div>
                )}
            </div>
        )
    }
}
